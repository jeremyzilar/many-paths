// Airtable field names as they appear in the Airtable interface
export interface PeopleTableFields {
  "Full Name"?: string;
  "Date of Birth"?: string;
  Phone?: string;
  "Person ID"?: string;
  "Date Added"?: string;
  Status?: string;
  Notes?: string;
  "Bed Types Needed"?: string[];
  Providers?: string[];
  Waitlist?: string[];
  encampment?: string;
}

// Form fields type (for future use when adding people)
export type PeopleFormFields = PeopleTableFields;

// Type for the Airtable record response from the People table
export interface PeopleRecord {
  id: string;
  fields: PeopleTableFields;
  createdTime: string;
}

// Type for creating a new record in the People table
export type CreatePeopleRecord = Omit<PeopleRecord, "id" | "createdTime">;

// Gender options for the form
export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "non-binary", label: "Non-binary" },
  { value: "other", label: "Other" },
] as const;

// Encampments table field types
export interface EncampmentsTableFields {
  name: string;
  notes?: string;
  coordinates?: string;
  active: boolean;
  geocode_cache?: string;
  count: number;
  last_updated: string;
  created: string;
  created_by: string;
}

// Form fields use the same structure as table fields
export type EncampmentsFormFields = EncampmentsTableFields;

// Mapping between our form fields and Airtable fields for the Encampments table
export const encampmentsFieldMapping: Record<
  keyof EncampmentsFormFields,
  keyof EncampmentsTableFields
> = {
  name: "name",
  notes: "notes",
  coordinates: "coordinates",
  active: "active",
  geocode_cache: "geocode_cache",
  count: "count",
  last_updated: "last_updated",
  created: "created",
  created_by: "created_by",
} as const;

// Type for the Airtable record response from the Encampments table
export interface EncampmentsRecord {
  id: string;
  fields: EncampmentsTableFields;
  createdTime: string;
}

// Type for creating a new record in the Encampments table
export type CreateEncampmentsRecord = Omit<
  EncampmentsRecord,
  "id" | "createdTime"
>;

// Providers table field types
export interface ProvidersTableFields {
  Name?: string;
  Notes?: string;
  Operator?: string;
  "Population served"?: string;
  "Services & Amenities"?: string;
  "Total beds"?: number;
  "Bed Types"?: string[];
  "Beds filled"?: number;
  "Beds open now"?: number;
  "Beds upcoming"?: number;
  "Capacity / Layout"?: string;
  "Entry / Referral Process"?: string;
  "Entry Criteria"?: string;
  Website?: string;
  Phone?: string;
  "Donate URL"?: string;
  Publish?: boolean;
}

// Type for the Airtable record response from the Providers table
export interface ProvidersRecord {
  id: string;
  fields: ProvidersTableFields;
  createdTime: string;
}

// Interface for Bed Types table
export interface BedTypesTableFields {
  Name?: string;
  Description?: string;
}

export interface BedTypesRecord {
  id: string;
  fields: BedTypesTableFields;
  createdTime: string;
}

// Interface for Donations/Needs table (Community Donations)
export interface DonationsTableFields {
  "Item Name"?: string;
  Category?: string;
  "Requesting Organization"?: string[]; // Linked record - array of provider IDs
  "Quantity Needed"?: number;
  "Quantity Claimed"?: number;
  "Quantity Delivered"?: number;
  "Quantity Remaining"?: number; // Formula field
  "Unit Type"?: string;
  Priority?: string;
  "Needed By"?: string;
  Recurrence?: string;
  Season?: string;
  Status?: string;
  "Drop-off Location"?: string[]; // Lookup field
  "Drop-off Hours"?: string[]; // Lookup field
  "Contact Phone"?: string[]; // Lookup field
  "Contact Person"?: string;
  "Contact Email"?: string;
  Notes?: string;
  "Last Updated"?: string;
  Created?: string;
}

export interface DonationsRecord {
  id: string;
  fields: DonationsTableFields;
  createdTime: string;
}
