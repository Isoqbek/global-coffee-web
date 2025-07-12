// src/components/sections/home/FormatsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import Image from 'next/image'

const formats = [
	{
		title: 'Katta Format (Flagman)',
		area: '50-100 m²',
		investment: '$40,000 dan',
		description:
			"To'liq menyu, ko'p o'rindiqlar. Savdo markazlari va markaziy ko'chalar uchun ideal.",
		image: '/images/format-large.jpg',
	},
	{
		title: 'Orolcha Format',
		area: '10-20 m²',
		investment: '$15,000 dan',
		description:
			"Tez xizmat ko'rsatish, 'coffee-to-go'. Biznes markazlari, vokzallar uchun.",
		image: '/images/format-island.jpg',
	},
	{
		title: 'Kichik Format',
		area: '25-45 m²',
		investment: '$25,000 dan',
		description:
			"Cheklangan o'rindiqlar soni, qulay muhit. Universitetlar va ofislar yaqinida.",
		image: '/images/format-small.jpg',
	},
]

export default function FormatsSection() {
	return (
		<section id='formats' className='bg-brand-dark py-20'>
			<div className='container mx-auto'>
				<Heading variant='h2' as='h2' className='text-center mb-12'>
					Biznes Formatlari
				</Heading>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{formats.map(format => (
						<Card
							key={format.title}
							className='bg-brand-gray-dark border-brand-gray-dark overflow-hidden flex flex-col'
						>
							<div className='relative w-full h-56'>
								<Image
									src={format.image}
									alt={format.title}
									fill
									className='object-cover'
								/>
							</div>
							<CardHeader>
								<CardTitle className='font-serif'>{format.title}</CardTitle>
							</CardHeader>
							<CardContent className='flex-grow'>
								<ul className='space-y-2 text-brand-gray-light'>
									<li>
										<strong>Maydon:</strong> {format.area}
									</li>
									<li>
										<strong>Sarmoya:</strong> {format.investment}
									</li>
								</ul>
								<p className='mt-4 text-brand-gray-medium'>
									{format.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
