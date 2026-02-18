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

const DONATIONS_TABLE_ID = "tblgr5Ylq722TIv08";

async function fetchDonationsSchema() {
  console.log("Fetching Donations schema from Airtable...\n");

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

    // Find the Donations table
    const donationsTable = data.tables.find(
      (table) => table.id === DONATIONS_TABLE_ID
    );

    if (!donationsTable) {
      console.error("Donations table not found!");
      console.log("Available tables:");
      data.tables.forEach((table) => {
        console.log(`  - ${table.name} (${table.id})`);
      });
      process.exit(1);
    }

    console.log(`Found table: ${donationsTable.name}\n`);
    console.log(`Fields (${donationsTable.fields.length}):`);
    donationsTable.fields.forEach((field) => {
      console.log(`  - ${field.name} (${field.type})`);
    });

    // Save schema
    const schemaPath = path.join(
      __dirname,
      "..",
      "data",
      "mocks",
      "donations-schema.json"
    );
    fs.writeFileSync(schemaPath, JSON.stringify(donationsTable, null, 2));
    console.log(`\n✓ Schema saved to: ${schemaPath}`);

    return donationsTable;
  } catch (error) {
    console.error("Error fetching schema:", error);
    process.exit(1);
  }
}

async function fetchDonations() {
  console.log("\nFetching donation records from Airtable...\n");

  try {
    // Fetch all records, handling pagination
    let allRecords = [];
    let offset = null;

    do {
      const url = new URL(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${DONATIONS_TABLE_ID}`
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

    console.log(`Found ${allRecords.length} donation items:\n`);

    // Group by status for summary
    const byStatus = {};
    allRecords.forEach((record) => {
      const status = record.fields["Status"] || "Unknown";
      byStatus[status] = (byStatus[status] || 0) + 1;
    });

    console.log("By Status:");
    Object.entries(byStatus).forEach(([status, count]) => {
      console.log(`  - ${status}: ${count}`);
    });
    console.log("");

    // Group by category for summary
    const byCategory = {};
    allRecords.forEach((record) => {
      const category = record.fields["Category"] || "Uncategorized";
      byCategory[category] = (byCategory[category] || 0) + 1;
    });

    console.log("By Category:");
    Object.entries(byCategory).forEach(([category, count]) => {
      console.log(`  - ${category}: ${count}`);
    });
    console.log("");

    // List open items
    const openItems = allRecords.filter(
      (r) =>
        r.fields["Status"] === "Open" ||
        r.fields["Status"] === "Partially Fulfilled"
    );

    if (openItems.length > 0) {
      console.log(`Open/Partially Fulfilled Items (${openItems.length}):\n`);
      openItems.forEach((record, index) => {
        const name = record.fields["Item Name"] || "(no name)";
        const org = record.fields["Requesting Organization"] || "Unknown org";
        const needed = record.fields["Quantity Needed"] || 0;
        const delivered = record.fields["Quantity Delivered"] || 0;
        const remaining = needed - delivered;
        const priority = record.fields["Priority"] || "Normal";

        console.log(`${index + 1}. ${name}`);
        console.log(`   Organization: ${org}`);
        console.log(`   Needed: ${needed}, Delivered: ${delivered}, Remaining: ${remaining}`);
        console.log(`   Priority: ${priority}`);
        console.log("");
      });
    }

    // Save to file
    const outputPath = path.join(
      __dirname,
      "..",
      "data",
      "mocks",
      "donations.json"
    );
    fs.writeFileSync(outputPath, JSON.stringify(allRecords, null, 2));
    console.log(`✓ Donations saved to: ${outputPath}`);

    return allRecords;
  } catch (error) {
    console.error("Error fetching donations:", error);
    process.exit(1);
  }
}

async function main() {
  await fetchDonationsSchema();
  await fetchDonations();
  console.log("\n✅ Donations fetch complete!");
}

main();



