# Statement of Work: Santa Fe Street Homelessness Coordination

**Airtable Rollout, By-Name List, and Case Conferencing**

**Vendor:** 59 Projects LLC  
**Delivery Partner:** Lakeraven ([lakeraven.com](https://www.lakeraven.com/))  
**Prepared for:** City of Santa Fe  
**Contract Period:** [Start Date] – [End Date]  
**Total Contract Amount:** $[AMOUNT]  
**Version:** Draft for review -- Feb 2026

---

## Background

Over the past year, the City of Santa Fe has invested in laying the groundwork for a more coordinated homelessness response. Discovery work identified the gaps. A plan for a shared coordination platform was developed. A by-name list approach was proposed. Airtable was evaluated and selected as the shared data infrastructure.

A working prototype has been built. The by-name list data structure is designed and tested with mock data. Airtable Interfaces for managing and viewing the list have been prototyped. A companion Next.js web application has been built to pull and display the data in multiple formats for different audiences. The data fields, workflows, and coordination logic have been worked out.

What remains is migrating that prototype into the City's own Airtable environment -- and then doing the hardest part: getting people to actually use it.

This SOW is deliberately narrow. It does not repeat broad discovery or platform development work from previous contracts. It focuses on three concrete, interconnected workstreams:

1. **Airtable rollout** -- migrating the prototype into the City's Airtable instance; rebuilding interfaces and connections; coordinating with City IT; training staff and providers; documenting everything
2. **By-Name List stewardship** -- getting the list populated with real data, maintained regularly, and trusted by providers
3. **Case conferencing** -- establishing a regular meeting rhythm and building the trust that makes coordination sustainable

Technology without adoption is not a solution. The goal of this contract is to make coordinated care the default, not the exception.

---

## 1. Vendor and delivery

**59 Projects LLC** is the prime vendor to the City of Santa Fe. The City pays 59 Projects LLC; 59 Projects LLC pays its delivery partners (Lakeraven and others) under separate agreements. Jeremy Zilar leads program and provider coordination.

**Lakeraven** is the named delivery partner for specific workstreams (see Section 3). Lakeraven is a Native-owned, veteran-led digital agency with experience in government digital services; their team includes former members of 18F, the Technology Transformation Service, and the Presidential Innovation Fellows. **Rebecca Refoy** (Lakeraven) supports project shaping, business development, and relationship building with City staff and providers in Santa Fe (and, where relevant, connections to future work in Albuquerque).

**Shannon** (user researcher, Albuquerque-based) may be engaged by 59 Projects LLC to conduct provider conversations and adoption research: talking with providers about adopting the application, surfacing barriers and workflows, and informing training and rollout. Her involvement is scoped to support this contract's adoption goals within the agreed budget.

Platform licensing is handled separately by the City of Santa Fe through a direct agreement with Airtable (E-Review submitted; $12,900/year). That cost is not included in this SOW.

---

## 2. Scope overview

| Workstream | What it covers |
|------------|----------------|
| **1. Airtable rollout** | Migrate prototype to City's Airtable instance; rebuild interfaces and app connections; coordinate with City IT; train staff and providers; produce guides and a rollout roadmap; revisit governance |
| **2. By-Name List stewardship** | Populate initial data with providers; establish data entry standards; maintain data quality; produce regular aggregate reports |
| **3. Case conferencing** | Facilitate regular provider coordination meetings; build meeting materials and follow-up practices; track outcomes over time |

Out of scope for this SOW: new platform development from scratch; HMIS integration or replacement; direct social services delivery; work outside the Santa Fe geographic area.

### Constraints and approach

There is a lot of work in this SOW and limited time and budget to do it. We are not assuming we can do everything at full depth in one pass. Our approach:

- **Prioritize adoption over perfection.** The goal is to get the system live, get a core set of providers using it, and run case conferencing regularly. We will trim or defer nice-to-haves (e.g., extra training rounds, exhaustive documentation) if needed to stay within scope and budget.
- **Phase delivery where possible.** Migration and first case-conferencing meeting come first; broader provider onboarding and reporting can follow in clear phases. Milestones and invoices can be tied to phases so the City can pause or adjust after each phase.
- **Lean team.** 59 Projects LLC (Jeremy) leads and does provider coordination and facilitation. Lakeraven (Rebecca) focuses on project shaping and relationships. Shannon is brought in specifically for provider adoption research and conversations when budget allows. We do not assume a large Lakeraven technical team on this contract; technical work (migration, Interfaces, app) is either done by 59 Projects LLC or explicitly scoped and funded as Lakeraven deliverables.
- **Explicit tradeoffs.** If the contract amount or timeline is fixed, we will agree up front what is in scope for that amount (e.g., "migration + first 3 case conferences + initial provider onboarding") and what is explicitly out of scope or deferred (e.g., "full 25 portal users onboarded" or "monthly reports for 12 months"). We can document those tradeoffs in a short "In scope for this contract" / "Deferred or out of scope" list once the budget is set.

---

## 3. Workstream details

### Workstream 1: Airtable rollout

**Goal:** The by-name list and coordination tools move from prototype into the City's live Airtable environment, with providers and City staff trained and able to use them independently.

A working prototype exists: the data structure is designed, Airtable Interfaces have been built, and a Next.js companion app connects to the base. This workstream migrates that prototype into the City's own Airtable Enterprise account and makes it production-ready.

The City of Santa Fe Airtable account has two distinct tiers of access, each requiring separate setup and training:

**Tier 1 -- Core users (10 Enterprise Scale licenses, ~$70/user/month)**

City homelessness services staff, coalition coordinators, data administrators, and 59 Projects LLC (Jeremy Zilar). Core users have full access to the Airtable data layer: they can view tables, create and edit records, build views, manage automations, and configure Interfaces. This is where the by-name list actually lives.

**Tier 2 -- Portal users (25 Enterprise Scale portal licenses, ~$15/user/month)**

Service provider case managers and staff from partner organizations. Portal users access the system exclusively through Airtable Interfaces -- they see only what the Interface shows them and have no visibility into the underlying data layer. Critically, portal users cannot see other portal users' data; access is automatically isolated. This is the primary access method for most providers.

#### 1a. Migration and technical setup

- **Migrate the Airtable base** from the prototype account into the City's Enterprise instance; replicate all tables, fields, views, automations, and Interfaces
- **Rebuild Airtable Interfaces** in the new account; all provider-facing Interfaces from the prototype must be recreated, tested, and confirmed working for portal-level access
- **Reconnect the Next.js companion app** to the new account: update API credentials, verify all data connections, and test against the live base
- **Request API credentials** from the City's Airtable administrator (Lia Salaverry or designated IT contact); establish a process for credential storage and rotation
- **Set up and assign user accounts**: configure the 10 core user accounts (City staff + 59 Projects); configure portal access for initial provider contacts as they are onboarded
- Support execution of the **Business Associate Agreement (BAA)** between the City and Airtable as required for HIPAA compliance
- Note: No City IT infrastructure, servers, or on-premise software is required. Airtable is fully cloud-based and accessed through a web browser.

#### 1b. Rollout planning

- Produce a **rollout roadmap**: a step-by-step plan for how the by-name list tools will be introduced to each participating organization, in what order, on what timeline, and with what support -- distinguishing between core user onboarding (City staff) and portal user onboarding (providers)
- Identify key contacts at each provider organization who will receive portal access and serve as the primary points of coordination
- Confirm the full list of core users with Lia Salaverry (Director, Community Health and Safety); distribute the 10 core licenses accordingly
- Coordinate scheduling of onboarding sessions with City staff and provider contacts
- Define a process for adding new portal users (providers) over time as the network grows, up to the 25-seat portal capacity

#### 1c. Training and documentation

Training and documentation follow the two-tier access structure: core users (City staff) receive comprehensive training covering the full system; portal users (providers) receive lighter, Interface-focused training.

**Documentation -- for City core users:**

- **Airtable full user guide**: how to view and navigate the data layer, add and update records, create and manage views, use Interfaces, and export data
- **Airtable administrator guide**: how to manage user accounts and permissions, onboard new core users and portal users, create or modify fields and views, troubleshoot, and contact Airtable enterprise support

**Documentation -- for provider portal users:**

- **Provider Interface guide**: how to log in, use the Interface to view and update relevant records, navigate between views, and understand what information is shared with whom
- **Data entry standards**: what to enter, when, how often, and how to handle common edge cases (aliases, missing information, exits from the list) -- written for non-technical provider staff

**Training sessions -- City core users:**

- Session 1: Introduction -- what the system is, why it matters, how the data layer works
- Session 2: Hands-on data entry -- adding and updating records, logging service interactions
- Session 3 (administrators): Managing the base -- users, permissions, portal access, troubleshooting

**Training sessions -- Provider portal users:**

- Session 1 (per provider org or small group): Using the Interface -- logging in, finding people, updating records through the portal view
- Brief written quick-start guide for portal users to reference independently after onboarding

- Additional sessions as needed based on provider feedback, capacity, or new participant onboarding

#### 1d. Governance update

The data governance document drafted under previous contracts will be reviewed and refitted for the current structure:

- Updated to reflect 59 Projects LLC and the City of Santa Fe as the governing parties (removing fiscal sponsor from the chain)
- Clarified roles for data entry, access, retention, and consent
- Simplified for provider review and sign-off
- Aligned with Airtable's BAA terms and the City's data policies

**Primary delivery:** 59 Projects LLC (migration, rollout planning, training facilitation, governance); Lakeraven (Interface rebuilds, Next.js app reconnection, documentation design, where budget allows). Shannon (user researcher) may support provider adoption conversations and inform training/rollout when engaged within budget.

**Deliverables:**
- Live Airtable base in the City's Enterprise account, fully migrated from prototype
- All Airtable Interfaces rebuilt and functional in the new account, verified at portal-access level
- Next.js companion app reconnected and verified with City API credentials
- Rollout roadmap (covering both core user and portal user onboarding phases)
- Airtable full user guide (core users -- City staff)
- Airtable administrator guide (for City administrators)
- Provider Interface guide (portal users -- providers)
- Data entry standards document
- Updated governance document
- Core user training sessions completed (City staff)
- Portal user onboarding sessions completed for initial participating providers

**Milestone:** The live Airtable base is accessible to all 10 core users, all Interfaces are confirmed functional at portal-access level, and at least [X] providers have completed portal onboarding -- within [45 days of contract start].

---

### Workstream 2: By-Name List stewardship

**Goal:** The by-name list is populated with current, real data and maintained regularly enough that providers trust and rely on it.

**Activities:**

- Work with providers and outreach teams to populate the initial list; document who is currently known to be experiencing street homelessness in Santa Fe
- Establish clear, simple data entry standards (what to enter, when, how) aligned with provider capacity and workflows
- Provide regular data quality check-ins (e.g., monthly): identify missing data, stale records, or inactive entries
- Produce monthly aggregate summary reports (total count, demographics in broad categories, service connections, trends) suitable for City review and eventual public sharing
- Respect privacy standards throughout: no PII in public reports; consent practices documented and followed

**Primary delivery:** 59 Projects LLC

**Deliverables:**
- Populated initial by-name list within [45 days of contract start]
- Data entry standards document (brief, provider-facing)
- Monthly aggregate reports throughout the contract period
- End-of-contract summary: counts, trends, data quality assessment, recommendations

**Milestone:** By-name list contains records for at least [X] individuals currently experiencing street homelessness in Santa Fe, with at least [Y] providers actively updating records, within [60 days of contract start].

---

### Workstream 3: Case conferencing

**Goal:** Providers meet regularly, coordinate on the people they share, and build enough trust in the system and each other to sustain the work after this contract.

This is the most important and most difficult workstream. Trust between providers -- and between providers and the City -- is what makes a by-name list work. It cannot be built through software alone.

**Activities:**

- Facilitate regular case conferencing meetings (suggested: bi-weekly or monthly; frequency to be determined with providers and City)
- Develop a lightweight, consistent meeting structure: agenda, shared list review, coordination on active cases, follow-up actions
- Maintain brief meeting notes and action items for each session; distribute to participants after each meeting
- Track coordination outcomes over time: services connected, housing referrals, cases actively coordinated, exits from the list
- Support relationship-building with providers who are not yet regularly participating; develop outreach approach for bringing hesitant organizations in
- Identify and address blockers to participation (workflow friction, access issues, confidentiality concerns, capacity)

**Primary delivery:** 59 Projects LLC (facilitation, meeting design, follow-up). Rebecca (Lakeraven) may support relationship-building and outreach to providers; Shannon may support provider conversations about participation and barriers when engaged within budget.

**Deliverables:**
- First case conferencing meeting facilitated within [30 days of contract start]
- Meeting structure and recurring agenda template
- Meeting notes and action item summaries for each session
- Quarterly report on coordination outcomes (cases discussed, services connected, active providers, trends)
- End-of-contract participation summary and recommendations for sustaining the work

**Milestone:** At least [X] organizations are attending and actively participating in case conferencing meetings by [Month 3].

---

## 4. What success looks like

This contract succeeds when:

- Providers log into Airtable and update records without being reminded
- Case conferencing meetings happen on schedule and providers show up
- The by-name list reflects current, real data -- not last month's data
- The City has a reliable, aggregate view of street homelessness in Santa Fe
- Providers trust the system enough to share sensitive information within it
- The coordination rhythm continues beyond this contract

---

## 5. Timeline and milestones

| Milestone | Target |
|-----------|--------|
| Contract executed; kickoff meeting held | Week 1 |
| API keys received from City Airtable Admin; migration underway | Week 2 |
| Airtable base migrated; Interfaces rebuilt; Next.js app reconnected | Week 3-4 |
| Rollout roadmap and training schedule shared with City | Week 3 |
| First case conferencing meeting facilitated | Day 30 |
| Training sessions 1-2 completed; provider champions onboarded | Day 45 |
| Live Airtable base confirmed functional; initial by-name list populated | Day 45 |
| Training sessions 3-4 completed | Day 60 |
| All guides and governance document delivered | Day 60 |
| First monthly aggregate report delivered | End of Month 2 |
| At least [X] providers actively participating in case conferencing | End of Month 3 |
| Quarterly coordination outcomes report | Month 4 |
| Mid-contract check-in and scope review with City | Month [X] |
| End-of-contract summary and recommendations | Final month |

Specific dates to be confirmed after contract execution.

---

## 6. Budget

Platform and licensing costs (Airtable Enterprise, hosting) are covered under a separate City agreement and are not included here.

| Item | Amount |
|------|--------|
| Workstream 1a: Migration and technical setup (base migration, Interface rebuilds, app reconnection, IT coordination) | $[X,XXX] |
| Workstream 1b: Rollout planning (roadmap, champion identification, scheduling) | $[X,XXX] |
| Workstream 1c: Training and documentation (guides, training sessions) | $[X,XXX] |
| Workstream 1d: Governance update (review, refit, provider sign-off) | $[X,XXX] |
| Workstream 2: By-Name List stewardship ([X] months) | $[X,XXX] |
| Workstream 3: Case conferencing facilitation ([X] meetings + reporting) | $[X,XXX] |
| **Total** | **$[XX,XXX]** |

Payment terms: [e.g., monthly in arrears upon invoice and accepted deliverables].

**Payment flow:** The City pays 59 Projects LLC. 59 Projects LLC pays Lakeraven (and any other subcontractors, e.g., Shannon) under separate agreements. The City has no privity of contract with Lakeraven or other subcontractors.

---

## 7. Roles

| Party | Role |
|-------|------|
| **City of Santa Fe** | Contracting authority; funding (pays 59 Projects LLC); Airtable account owner and data custodian; City core user accounts |
| **Lia Salaverry** (Director, Community Health and Safety) | City project lead; approvals and decisions; provider introductions; core user account management |
| **59 Projects LLC** | Prime vendor (paid by City; pays Lakeraven and other subcontractors); one of 10 core users; program and provider coordination; case conferencing facilitation; BNL stewardship; City liaison; invoicing |
| **Rebecca Refoy (Lakeraven)** | Project shaping; business development; relationship building with City and providers in Santa Fe and Albuquerque; support to scope and deliverables as agreed |
| **Lakeraven (technical)** | Where explicitly scoped and funded: Airtable migration, Interface rebuilds, Next.js reconnection, documentation and training design. Not assumed at full scale if budget is constrained. |
| **Shannon** | User researcher (Albuquerque-based); provider conversations and adoption research; supports training and rollout design when engaged within budget |
| **Participating providers** | Portal users (up to 25); data entry via Interfaces; case conferencing participation; feedback on system and process |

---

## 8. Assumptions

- The City of Santa Fe Airtable Enterprise account is in procurement (E-Review submitted; $12,900/year: 10 core licenses + 25 portal licenses). Account setup is expected within [X weeks] of E-Review approval. 59 Projects LLC will be added as a core user and given administrator access to configure and manage the base.
- The City's Airtable administrator (Lia Salaverry or designated contact) will add 59 Projects LLC as a core user and provide API credentials within [5 business days] of account activation. Delays in account setup or credential access will shift the migration timeline accordingly.
- A working prototype Airtable base, a set of prototype Airtable Interfaces, and a Next.js companion app exist and will serve as the basis for the migration. All prototype assets will be accessible to the delivery team from day one.
- At least [X] provider organizations are willing to participate in the by-name list and case conferencing at contract start; the City will make introductions and support scheduling.
- 59 Projects LLC will register as a vendor in the City of Santa Fe vendor system prior to contract execution.
- Given limited budget and time, the split of work between 59 Projects LLC, Lakeraven (Rebecca and any technical capacity), and Shannon will be confirmed after the contract amount is set. Rebecca's role (project shaping, relationships) is assumed; technical Lakeraven deliverables and Shannon's provider research are included only to the extent the agreed budget allows.

---

## 9. How this differs from previous contracts

The April 2025 and October 2025 contracts with EAD Design Corp (Jeremy Zilar) were broader: they included discovery, strategy, technology audit, platform development, and governance design. That foundational work has been done.

Since those contracts, a full working prototype has been built: a by-name list Airtable base with real data fields, Airtable Interfaces for day-to-day coordination, and a Next.js companion app. The approach is established, the tools are designed, and the data structure is tested.

This contract picks up where that work left off. It assumes the prototype is ready and the task now is: move it into the City's environment, get it working with real users and real data, and build the coordination habit that makes it stick.

The vendor is now **59 Projects LLC** (not EAD Design Corp), with **Lakeraven** as a named delivery partner for technical and design work. There is no fiscal sponsor in the contracting chain.

---

## 10. Next steps

- [ ] City reviews and provides feedback on this SOW
- [ ] Fee and timeline confirmed; contract drafted and executed
- [ ] 59 Projects LLC completes City vendor registration
- [ ] 59 Projects LLC confirms with Lakeraven (Rebecca) and Shannon the scope that fits the agreed budget (who does what, how much)
- [ ] Kickoff meeting scheduled with City and key providers

---

**Prepared by:** Jeremy Zilar, 59 Projects LLC  
**For:** City of Santa Fe  
**With delivery partner:** Lakeraven -- Rebecca Refoy, info@lakeraven.com
