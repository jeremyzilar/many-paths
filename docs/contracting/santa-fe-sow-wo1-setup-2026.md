# Shared Data Platform Setup: Statement of Work

**Contractor:** 59 Projects LLC  
**Prepared for:** City of Santa Fe, Office of Community Health and Safety  
**Not to Exceed:** $19,500  
**Contract Period:** [Start Date] to [End Date]  
**Version:** Draft, [Date]

---

## Why this work is essential

The City of Santa Fe has purchased an Airtable Enterprise account to serve as the shared data infrastructure for homelessness coordination. Without proper configuration, that investment produces no value. An empty, unconfigured account cannot track individuals experiencing homelessness, cannot give providers the interfaces they need to enter data, and cannot give City staff the administrative tools to manage the system.

This contract delivers a fully configured, production-ready data environment in the City's own Airtable account. It moves the system from prototype to operational, establishes the two-tier access structure that separates City staff from provider portal users, and ensures City staff are trained to administer the system independently.

This work is the technical prerequisite for everything else in the coordination program. Provider onboarding and case conferencing cannot begin until this system is in place.

---

## Background

Previous contracts with the City of Santa Fe (April 2025 and October 2025) produced a research prototype: a by-name list data structure tested with mock data and draft Airtable Interfaces. The value of that work is in the research and design decisions behind it. The prototype is a starting point, not a finished product.

This contract uses that foundation to build the actual system inside the City's enterprise Airtable account. The data model, Interfaces, and access structure will be adapted and built for real users and real data.

---

## What will be delivered

### The Airtable data environment

The City's Airtable Enterprise account will be configured with a production-ready by-name list database. This includes:

- The complete data structure: all tables, fields, and relationships required to track individuals experiencing homelessness, the organizations serving them, and the services provided
- Data entry views and filters for City staff
- A progressive data capture model, meaning outreach workers enter a minimal record in the field, shelter intake staff add demographic detail, and case managers complete the full record over time. Each provider enters only what their role makes possible, not an ideal complete record that no one can realistically fill out

The progressive capture approach is central to getting providers to actually use the system. It removes the burden of complete data entry at the point of first contact, where that contact may be brief and the person may not be ready to share extensive information.

### Two-tier access structure

The system separates two types of users with different access levels:

**City staff (core users, 10 enterprise licenses):** Full access to the data layer. City homelessness services staff, coalition coordinators, data administrators, and the contractor have access to view tables, create and edit records, build views, and manage the system.

**Provider staff (portal users, 25 enterprise portal licenses):** Restricted access through provider-facing Interfaces only. Provider case managers and outreach staff see only what the Interface shows them and have no access to the underlying data layer. Access is automatically isolated between organizations, meaning no provider can see another organization's data unless it has been shared through the coordination system.

### Provider-facing Interfaces

Each provider type will have an Interface built specifically for their role and data entry needs. Interfaces are the portal through which providers interact with the system. They are built and tested at portal-access level before any provider is onboarded.

### User account setup

All 10 core user accounts will be configured for City staff. Portal access structure will be prepared for provider organizations to be activated during provider onboarding.

### HIPAA compliance setup

The City and Airtable will execute a Business Associate Agreement (BAA) as required for HIPAA compliance. This is a prerequisite for entering any client health information into the system. 59 Projects LLC will support the City through this process.

### Training for City staff

Three training sessions will be delivered for City core users:

- Session 1: Introduction to the system, the data layer, and how the coordination model works
- Session 2: Hands-on data entry, adding and updating records, logging service interactions
- Session 3 (for administrators): Managing users and permissions, configuring portal access for providers, troubleshooting

### Documentation

- Full user guide for City core users: navigation, data entry, views, exports
- Administrator guide: user management, portal access configuration, troubleshooting, Airtable enterprise support contacts
- Rollout plan: a documented plan for introducing the system to provider organizations, in what order and on what timeline, to be executed under the provider onboarding contract

---

## What is not included

Data governance, data entry standards, HMIS field mapping, and consent documentation are not included in this contract. Those are delivered under a separate contract (Data Governance and Standards) and must be finalized before providers are asked to enter real client data.

---

## Deliverables

- Configured Airtable base in the City's enterprise account, adapted and expanded from the research prototype
- All provider-facing Interfaces built and verified at portal-access level
- Core user accounts configured (10 City staff)
- Portal access structure prepared for provider onboarding
- Business Associate Agreement executed between City and Airtable
- City staff training sessions completed (3 sessions)
- City core user guide
- City administrator guide
- Provider rollout plan

---

## Timeline

| Milestone | Target |
|-----------|--------|
| Contract executed; kickoff with City staff | Week 1 |
| API credentials obtained from City Airtable administrator | Week 2 |
| Airtable base configured; Interfaces built | Week 3-4 |
| Rollout plan drafted and reviewed with City | Week 3 |
| City staff training sessions 1 and 2 completed | Day 30-45 |
| Administrator training session completed | Day 45 |
| All documentation delivered | Day 45 |
| System confirmed functional; City sign-off | Day 45 |

Specific dates confirmed after contract execution.

---

## Budget

| Scope of work | Hours (est.) | Amount |
|---------------|-------------|--------|
| Data environment configuration and Interface builds | [X] hrs | $[X,XXX] |
| User account setup and access configuration | [X] hrs | $[X,XXX] |
| BAA coordination and HIPAA compliance setup | [X] hrs | $[X,XXX] |
| City staff training (3 sessions including preparation) | [X] hrs | $[X,XXX] |
| User guide and administrator guide | [X] hrs | $[X,XXX] |
| Provider rollout plan | [X] hrs | $[X,XXX] |
| Project coordination and City liaison | [X] hrs | $[X,XXX] |
| **Total** | **[X] hrs** | **$[XX,XXX]** |

Hourly rate: $200/hr. All work performed by or under the direction of 59 Projects LLC.

Payment terms: [e.g., 50% on execution; 50% on final deliverable acceptance and City sign-off].

---

## Assumptions

- The City's Airtable Enterprise account is active or will be active within [X weeks] of contract execution. Delays in account activation will shift the timeline accordingly.
- The City's Airtable administrator will provide API credentials and add 59 Projects LLC as a core user within 5 business days of account activation.
- City staff (up to 10 core users) will be available for three training sessions during the contract period.
- At least one City staff member will serve as the designated administrator for the Airtable account.

---

## About 59 Projects LLC

59 Projects LLC is the prime contractor. The City contracts with and pays 59 Projects LLC directly. Any subcontractors engaged by 59 Projects LLC are paid under separate agreements; the City has no contractual relationship with subcontractors.
