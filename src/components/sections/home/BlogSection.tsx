// src/components/sections/home/BlogSection.tsx
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import Image from 'next/image'
import Link from 'next/link'

// Hozircha statik ma'lumot, 3-bosqichda CMS'dan olinadi
const posts = [
	{
		title: "Qahva donini qanday to'g'ri tanlash kerak?",
		excerpt:
			"Arabika va Robustaning farqlari, qovurish darajalari va sizning didingiz uchun mukammal donni topish bo'yicha maslahatlar...",
		image: 'https://placehold.co/600x400/1E2025/FFFFFF?text=Post-1',
		href: '/blog/post-1',
	},
	{
		title: 'Muvaffaqiyatli qahvaxona ochishning 5 siri',
		excerpt:
			"Biznes-reja, to'g'ri joylashuv, marketing strategiyalari va franshizamizning sizga beradigan afzalliklari haqida...",
		image: 'https://placehold.co/600x400/E73544/FFFFFF?text=Post-2',
		href: '/blog/post-2',
	},
	{
		title: "Barista kasbi: san'atmi yoki hunar?",
		excerpt:
			"Bizning barista maktabimizda professional bo'lishni o'rganing. Latte-artdan tortib, muqobil damlash usullarigacha...",
		image: 'https://placehold.co/600x400/F2CB02/FFFFFF?text=Post-3',
		href: '/blog/post-3',
	},
]

export default function BlogSection() {
	return (
		<section className='py-20 bg-brand-dark'>
			<div className='container'>
				<Heading as='h2' variant='h2' className='text-center mb-12'>
					Yangiliklar va Blog
				</Heading>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{posts.map(post => (
						<Card
							key={post.title}
							className='bg-brand-gray-dark border-brand-gray-dark flex flex-col'
						>
							<div className='relative w-full h-56'>
								<Image
									src={post.image}
									alt={post.title}
									fill
									className='object-cover rounded-t-lg'
								/>
							</div>
							<CardHeader>
								<CardTitle className='font-serif leading-tight'>
									{post.title}
								</CardTitle>
							</CardHeader>
							<CardContent className='flex-grow'>
								<p className='text-brand-gray-light text-sm'>{post.excerpt}</p>
							</CardContent>
							<CardFooter>
								<Link href={post.href}>
									<Button variant='link' className='p-0 text-brand-yellow'>
										Batafsil o&apos;qish →
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
