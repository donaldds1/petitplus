import { CommunityHeader } from "@/components/community-header"
import { SearchSection } from "@/components/search-section"
import { CategoryTabs } from "@/components/category-tabs"
import { HelpRequestGrid } from "@/components/help-request-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommunityHeader />
        <SearchSection />
        <CategoryTabs />
        <HelpRequestGrid />
      </div>
    </main>
  )
}
