const fs = require("fs");
const path = require("path");

// Read environment variables from .env file
const envPath = path.join(__dirname, "..", ".env");
let AIRTABLE_API_KEY = "";
let AIRTABLE_BASE_ID = "";

try {
  const envContent = fs.readFileSync(envPath, "utf8");
  const lines = envContent.split("\n");

  lines.forEach((line) => {
    if (line.startsWith("NEXT_PUBLIC_AIRTABLE_API_KEY=")) {
      AIRTABLE_API_KEY = line.split("=")[1].trim();
    }
    if (line.startsWith("NEXT_PUBLIC_AIRTABLE_BASE_ID=")) {
      AIRTABLE_BASE_ID = line.split("=")[1].trim();
    }
  });
} catch (error) {
  console.error("Error reading .env file:", error.message);
  process.exit(1);
}

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  console.error(
    "Error: AIRTABLE_API_KEY or AIRTABLE_BASE_ID not found in .env file"
  );
  process.exit(1);
}

const SERVICES_TABLE_ID = "tbly5BVK4NP9b7KU4";

async function fetchServicesSchema() {
  console.log("Fetching Services schema from Airtable...\n");

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/meta/bases/${AIRTABLE_BASE_ID}/tables`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Find the Services table
    const servicesTable = data.tables.find(
      (table) => table.id === SERVICES_TABLE_ID
    );

    if (!servicesTable) {
      console.error("Services table not found!");
      console.log("Available tables:");
      data.tables.forEach((table) => {
        console.log(`  - ${table.name} (${table.id})`);
      });
      process.exit(1);
    }

    console.log(`Found table: ${servicesTable.name}\n`);
    console.log(`Fields (${servicesTable.fields.length}):`);
    servicesTable.fields.forEach((field) => {
      console.log(`  - ${field.name} (${field.type})`);
    });

    // Save schema
    const schemaPath = path.join(
      __dirname,
      "..",
      "data",
      "mocks",
      "services-schema.json"
    );
    fs.writeFileSync(schemaPath, JSON.stringify(servicesTable, null, 2));
    console.log(`\n✓ Schema saved to: ${schemaPath}`);

    return servicesTable;
  } catch (error) {
    console.error("Error fetching schema:", error);
    process.exit(1);
  }
}

async function fetchServices() {
  console.log("\nFetching services records from Airtable...\n");

  try {
    // Fetch all records, handling pagination
    let allRecords = [];
    let offset = null;

    do {
      const url = new URL(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${SERVICES_TABLE_ID}`
      );
      if (offset) {
        url.searchParams.set("offset", offset);
      }

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      allRecords = allRecords.concat(data.records);
      offset = data.offset;
    } while (offset);

    console.log(`Found ${allRecords.length} service records:\n`);

    // Display each record
    allRecords.forEach((record, index) => {
      const name = record.fields["Name"] || record.fields["Service Name"] || "(no name)";
      console.log(`${index + 1}. ${name}`);
      console.log(`   ID: ${record.id}`);
      
      // Show all fields for this record
      Object.entries(record.fields).forEach(([key, value]) => {
        if (key !== "Name" && key !== "Service Name") {
          const displayValue = Array.isArray(value) 
            ? value.join(", ") 
            : typeof value === "object" 
              ? JSON.stringify(value)
              : value;
          console.log(`   ${key}: ${displayValue}`);
        }
      });
      console.log("");
    });

    // Save to file
    const outputPath = path.join(
      __dirname,
      "..",
      "data",
      "mocks",
      "services.json"
    );
    fs.writeFileSync(outputPath, JSON.stringify(allRecords, null, 2));
    console.log(`✓ Services saved to: ${outputPath}`);

    return allRecords;
  } catch (error) {
    console.error("Error fetching services:", error);
    process.exit(1);
  }
}

async function main() {
  await fetchServicesSchema();
  await fetchServices();
  console.log("\n✅ Services fetch complete!");
}

main();

