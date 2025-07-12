// src/app/(main)/page.tsx
import HeroSection from '@/components/sections/home/HeroSection'
// Kelajakda bu yerga boshqa sectionlar import qilinadi:
import FormatsSection from '@/components/sections/home/FormatsSection'
import StatsSection from '@/components/sections/home/StatsSection'
import LoyaltyProgramSection from '@/components/sections/home/LoyaltyProgramSection'
import BlogSection from '@/components/sections/home/BlogSection'

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<StatsSection />
			<FormatsSection />
			<LoyaltyProgramSection />
			<BlogSection />

			{/* Hali yaratilmagan section'lar uchun vaqtinchalik joy */}
			<div className='container py-20 text-center'>
				<h2 className='text-3xl font-bold'>
					Loyalty Program, News, Map and etc.
				</h2>
			</div>
		</>
	)
}
