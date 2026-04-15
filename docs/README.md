# Documentation Folder

This folder contains markdown files used by the Many Paths application and project team.

## Folder Structure

```
docs/
  README.md                # This file
  pages/                   # App-rendered markdown (9 files served by Next.js pages)
  reference/               # Language, competitive landscape, case studies, resources
  strategy/                # Product vision, presentation outlines
  contracting/             # Partnership docs and statements of work
  outreach/                # Key contacts, meeting notes, relationship tracking
  specs/                   # Technical and account specifications
  fiscal-sponsorship/      # Fiscal sponsorship implementation materials
  communications/          # Outreach and communications templates
```

## How to Add a New App-Rendered Document

1. **Create a markdown file** in `docs/pages/`
   - Example: `docs/pages/about.md`

2. **Create a new page** in `src/app/[document-name]/page.tsx`

   Example for creating an "about" page at `/about`:

   ```tsx
   import { promises as fs } from "fs";
   import path from "path";
   import { MarkdownDocument } from "@/components/MarkdownDocument";

   export default async function AboutPage() {
     const filePath = path.join(process.cwd(), "docs", "pages", "about.md");
     const fileContents = await fs.readFile(filePath, "utf8");

     return (
       <div className="max-w-4xl mx-auto">
         <MarkdownDocument content={fileContents} />
       </div>
     );
   }
   ```

3. **Add a link** to the document on the homepage (`src/app/page.tsx`)

## Markdown Support

The application uses `react-markdown` with GitHub Flavored Markdown (GFM) support, which includes:

- Headers
- Lists (ordered and unordered)
- Links
- Images
- Tables
- Code blocks
- Strikethrough text
- Task lists
- And more!

## Linking to PDFs

You can link to PDF files stored in `/public/pdfs/` from your markdown documents:

```markdown
[Download Guidelines PDF](/pdfs/guidelines.pdf)
```

The PDFs will open in a new browser tab when clicked.

## Documents by Folder

### pages/ (app-rendered)

- `about.md` - About the Many Paths Project
- `by-name-list.md` - What the by-name list is and how it works
- `donations.md` - Current donation needs
- `manual.md` - By-Name List Operations Manual
- `mission.md` - Mission statement and values
- `organizational-structure.md` - Governance and mutual aid framework
- `pilot.md` - By-name list pilot overview (for providers)
- `providers.md` - Provider network overview
- `who-we-are.md` - Team and stakeholders

### reference/

- `language-guide.md` - Terminology for homelessness and housing (person-first, audiences, HUD)
- `competitive-landscape.md` - Software and platforms in homelessness services, with focus on outreach teams
- `community-solutions-case-studies.md` - Curated list of Built for Zero / Community Solutions case studies by location
- `homelessness-resources.md` - Santa Fe homelessness resources directory
- `code-blue.md` - CODE BLUE emergency cold weather response protocol
- `services.md` - CONNECT resource directory

### strategy/

- `product-vision.md` - Complete platform overview, feature catalog, and roadmap
- `presentation-outline.md` - Community talk outline using pyramid principle

### contracting/

- `lakeraven-partnership.md` - Lakeraven delivery partner context and contacts
- `santa-fe-statement-of-work-2026.md` - Draft SOW for Santa Fe (59 Projects LLC + Lakeraven)

### specs/

- `airtable-account-specs.md` - Airtable Enterprise account specification for City of Santa Fe

### fiscal-sponsorship/

Complete implementation package for establishing fiscal sponsorship structure.

### communications/

Outreach and communications templates (unchanged).
