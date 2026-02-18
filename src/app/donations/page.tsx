import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { DocumentPage } from "@/components/DocumentPage";
import { PageLayout } from "@/components/PageLayout";
import { DonationsList } from "@/components/DonationsList";

export default async function DonationsPage() {
  // Read the markdown file from the docs folder
  const filePath = path.join(process.cwd(), "docs", "donations.md");
  const fileContents = await fs.readFile(filePath, "utf8");

  // Parse front matter
  const { data: frontMatter, content } = matter(fileContents);

  return (
    <PageLayout>
      <DocumentPage frontMatter={frontMatter} content={content} />

      <section className="flex flex-col max-w-desktop-lg mx-auto px-4">
        <div className="grid grid-cols-4 tablet-lg:grid-cols-12 gap-3">
          <div className="col-span-4 tablet-lg:col-span-10 tablet-lg:col-start-2">
            <DonationsList />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
