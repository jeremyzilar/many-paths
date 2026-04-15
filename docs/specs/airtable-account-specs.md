# Airtable Enterprise Account Specification

## City of Santa Fe Partnership

**Document Date**: November 26, 2025  
**Version**: 1.2  
**Status**: Final Pricing Confirmed - Ready for E-Review Submission

---

## 1. Account Overview & Key Contacts

### City of Santa Fe

- **Point Person**: Henri Hammond Paul
- **Organization**: City of Santa Fe
- **Account Type**: Enterprise Scale (required for HIPAA compliance)

### Airtable

- **Account Representative**: Jason Accomando
- **Support**: Enterprise-level support included

---

## 2. Pricing Structure

### Core Enterprise Scale Users

- **Quantity**: 10 users
- **Rate**: $70/user/month
- **Monthly Cost**: $700/month
- **Annual Cost**: $8,400/year

### Portal Add-on (External Provider Access)

- **Quantity**: 25 portal seats
- **Rate**: $15/user/month
- **Monthly Cost**: $375/month
- **Annual Cost**: $4,500/year

### Total Investment

- **Year 1 Total**: $12,900 annually
  - Core users: $8,400
  - Portal seats: $4,500
- **Monthly Equivalent**: $1,075/month
- **Billing Method**: Annual invoice (credit card not accepted for Enterprise Scale)
- **Payment Terms**: Due upon invoice receipt

> **Note**: Government entities do not qualify for non-profit pricing. The $70/user rate is standard Enterprise Scale pricing without discounts.

> **Important**: Portal users MUST have external email domains (e.g., @providername.org, not @santafenm.gov) or they will be billed as full Enterprise Scale users at $70/month each.

### Additional Costs to Consider

- Portal seat packs available in: 15, 25, 50, 100, 200 seats
- Volume discounts available for larger portal seat quantities
- Additional core users can be added at $70/user/month

---

## 3. Technical Requirements & Features

### HIPAA Compliance

- Business Associate Agreement (BAA) will be sent for signature after Order Form is executed
- BAA signature enables HIPAA compliance features
- Required for handling protected health information (PHI)

### Enterprise Scale Features

- Advanced permissions and access controls
- Enterprise-grade security features
- Admin panel with user management
- Custom branding capabilities
- SSO options (if needed in future)
- Priority support
- Enhanced audit logs

### Portal Configuration

- Interface Designer for creating external user views
- Custom sign-in pages with City branding
- Granular permission controls per interface
- Automatic user isolation (external users cannot see each other)

---

## 4. User Access Strategy

### Full Enterprise Scale Users (10 seats)

**Primary Users**: City of Santa Fe staff and core coalition members

**Access Level**: Full access including:

- All bases within the workspace
- Data layer access (tables, views, records)
- Interface creation and management
- User and permission management
- Configuration and settings

**Typical Roles**:

- System administrators (City IT/data staff)
- By-Name List coordinators
- Coalition leadership
- Data analysts

### Portal Users (25 seats starting)

**Primary Users**: External service providers and partner organizations

⚠️ **Critical Requirement**: Portal users MUST use email addresses with external domains (e.g., @providername.org, @shelterorg.com). Any user with a City of Santa Fe email domain (@santafenm.gov) will automatically be billed as a full Enterprise Scale user ($70/month), not a portal user.

**Access Level**: Limited, interface-only access:

- Access to specific interfaces shared with them
- Cannot access underlying data layer
- Cannot see or invite other users
- Cannot navigate to Airtable home
- Permission levels: Editor, Commenter, or Read-only

**Use Cases**:

- Service providers updating By-Name List records
- Partner organizations viewing assigned client data
- External case managers with edit access to specific records

**Billing Rules**:

- Portal users with Editor or Commenter permissions count as billable seats
- Portal users with Read-only permissions are FREE (unlimited)
- Portal users can ONLY edit data in the Interface layer, NOT the underlying Data layer
- Example: 25 paid portal seats + unlimited read-only users = same monthly cost

**Email Domain Requirements**:

- Portal users must use email addresses from domains EXTERNAL to City of Santa Fe
- Users with @santafenm.gov emails will be billed as full Enterprise Scale users ($70/month each)
- Service providers should use their organization's email domain (e.g., @stelizabethshelter.org)

### Important Billing Thresholds

⚠️ **When Portal Users Become Full Billable Users**:

1. If a portal user is given editor access to **multiple bases** within the workspace, they become a full Enterprise Scale user ($70/month)
2. If a portal user is invited to the underlying **data layer** (not just interfaces), they become a full Enterprise Scale user
3. If a portal user is invited as a workspace collaborator, they become a full Enterprise Scale user

**Best Practice**: Keep external providers limited to interface-only access within a single base to maintain portal pricing.

---

## 5. Setup Requirements Checklist

To complete the Airtable Order Form, the following information is required:

### Organizational Details

- [ ] Legal name of organization: **City of Santa Fe**
- [ ] Billing address
- [ ] Shipping address (if different from billing)

### Key Contacts

- [ ] Name and email of person signing the Order Form
- [ ] Name and email of billing contact at organization
- [ ] Name(s) and email(s) of person(s) to serve as main Airtable Administrator(s)

### Technical Configuration

- [ ] Email domain(s) to register as part of Enterprise Account (e.g., @santafenm.gov)
- [ ] Confirmation of any additional domains needed

### Procurement

- [ ] Purchase Order (PO) required? Yes/No
- [ ] If yes, PO process and timeline details
- [ ] Final confirmed user count (10 core + 15 portal to start)

---

## 6. Key Terms & Conditions

### Contract Terms

- **Commitment Period**: Annual contract
- **Billing Cycle**: Annual invoice, paid upfront
- **Payment Method**: Invoice (ACH, wire, or check)
- **Renewal**: Annual renewal with 30-day notice

### Portal Billing Rules Summary

1. **Portal seats are workspace/organization-level**, not per-base
2. **Single portal per base**: Enabling portal access creates one portal per base, but you can share multiple interfaces within that base
3. **Read-only users are free**: Only Editor and Commenter permissions count toward portal seat limit
4. **Cross-base promotion**: Portal users with editor access on multiple bases are automatically billed as full users
5. **Data layer access**: Any data layer access (even read-only) combined with portal editor permissions makes them a portal user, not full user
6. **Domain isolation**: Portal users from different email domains cannot see each other (security feature)

### Account Management

- Workspace owners can add/remove users
- Portal access managed per-interface via Share dialog
- Admin panel provides visibility into all user types and access levels
- Email domain restrictions can be configured for portal invites

---

## 7. Implementation Timeline & Next Steps

### Immediate Actions Required

#### For Henri (City of Santa Fe)

1. **Review this specification document** - Confirm alignment with City needs and budget
2. **Gather Order Form information** - Complete checklist in Section 5
3. **Confirm procurement process** - PO requirements and approval timeline
4. **Identify Airtable Administrators** - Select 1-2 City staff members for admin role
5. **Confirm signature authority** - Identify person authorized to sign contract

#### For Jason (Airtable)

1. **Formal written quote received** - Confirmed pricing:
   - 10 Enterprise Scale licenses at $70/user/month = $8,400/year
   - 25 Enterprise Scale portal licenses at $15/user/month = $4,500/year
   - Total annual cost: $12,900/year
2. **Confirm any available discounts**:
   - Early signature incentives (if deadline available)
   - Government/public sector pricing (if applicable)
   - Volume discounts on portal seats
3. **Provide draft Order Form** - For City legal review
4. **Confirm implementation timeline**:
   - Account setup timeframe after signature
   - BAA signature process
   - Onboarding and training availability

#### For Jeremy (Project Lead)

1. **Send specification to Henri** - Get City approval and information gathering started
2. **Follow up with Jason** - Request formal quote matching these specifications
3. **Coordinate between parties** - Facilitate information exchange and timeline alignment
4. **Plan workspace structure** - Design base and interface architecture for portal use

### Estimated Timeline

- **Week 1**: Specification review and information gathering
- **Week 2**: Order Form completion and legal review
- **Week 3**: Signature and BAA execution
- **Week 4**: Account setup and administrator onboarding
- **Week 5+**: Base configuration and portal deployment

---

## 8. Questions to Confirm with Jason

Before finalizing the contract, confirm the following:

### Pricing Confirmation

- [ ] Confirm $70/user/month is the standard Enterprise Scale rate without discounts
- [ ] Are there any government/public sector discounts available?
- [ ] Is there an early signature discount if we commit by a specific date?
- [ ] What are the volume discount tiers for portal seats (25, 50, 100+)?

### Technical Details

- [ ] What is the process for adding more portal seats mid-contract if needed?
- [ ] Can we adjust core user count mid-contract, and what is the prorated pricing?
- [ ] What training and onboarding support is included?
- [ ] What is the SLA for Enterprise Scale support?

### Contract Terms

- [ ] What is the cancellation policy?
- [ ] What happens at renewal - is there a price lock guarantee?
- [ ] Are there any implementation fees or one-time setup costs?
- [ ] What is the typical timeline from signature to full HIPAA compliance (BAA executed)?

---

## 9. Strategic Recommendations

### Portal Seat Planning

Starting with 25 portal seats provides room for growth:

- Identify 15-20 priority service providers for initial rollout
- Reserve remaining slots for expansion as adoption grows
- 25-seat tier provides better per-seat pricing than 15-seat tier
- Next tier up is 50 seats if additional capacity is needed

### User Role Assignment

**Core Users (Full Access)** - Reserve for:

- City homelessness coordinator(s)
- Coalition coordinator
- Data manager/administrator
- Essential City staff who need full system access

**Portal Users (Interface Only)** - Use for:

- Service provider case managers
- Shelter operators updating bed counts
- Partner organization staff
- Any external collaborator with editing needs

**Read-Only Portal Users (Free)** - Use liberally for:

- Stakeholders who need visibility only
- Reporting recipients
- Coalition members who don't need edit access

### Cost Optimization

- Keep external users limited to single-base interface access to avoid portal→full user upgrade charges
- Use read-only permissions wherever possible (unlimited free users)
- Design interfaces carefully to give portal users exactly what they need, nothing more

---

## 10. Resources & Documentation

### Airtable Official Documentation

- [Enterprise Plans Overview](https://airtable.com/pricing)
- [Portals Documentation](https://support.airtable.com/docs/using-airtable-portals-for-external-collaborators)
- [HIPAA Compliance Information](https://www.airtable.com/security)
- [Nonprofit and Educational Plans FAQs](https://support.airtable.com/docs/nonprofit-and-educational-plans-faqs)

### Related Project Documents

- By-Name List documentation: `/docs/by-name-list.md`
- Fiscal sponsorship details: `/docs/fiscal-sponsorship/`
- Provider data sharing agreements: `/docs/fiscal-sponsorship/provider-data-sharing-agreement-template.md`

---

## Document History

| Date         | Version | Changes                                                                           | Author |
| ------------ | ------- | --------------------------------------------------------------------------------- | ------ |
| Nov 26, 2025 | 1.2     | Final pricing confirmed from Airtable: $12,900/year total                         | Jeremy |
| Nov 24, 2025 | 1.1     | Updated to 25 portal seats; added external email domain requirement clarification | Jeremy |
| Nov 21, 2025 | 1.0     | Initial specification document created                                            | Jeremy |

---

## Approval Signatures

**City of Santa Fe**  
Name: \***\*\*\*\*\*\*\***\_\_\_\***\*\*\*\*\*\*\***  
Title: \***\*\*\*\*\*\*\***\_\_\_\***\*\*\*\*\*\*\***  
Signature: \***\*\*\*\*\*\*\***\_\_\_\***\*\*\*\*\*\*\***  
Date: \***\*\*\*\*\*\*\***\_\_\_\***\*\*\*\*\*\*\***

**Project Lead**  
Name: Jeremy  
Signature: \***\*\*\*\*\*\*\***\_\_\_\***\*\*\*\*\*\*\***  
Date: \***\*\*\*\*\*\*\***\_\_\_\***\*\*\*\*\*\*\***
