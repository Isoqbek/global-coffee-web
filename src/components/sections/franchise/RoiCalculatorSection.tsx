// src/components/sections/franchise/RoiCalculatorSection.tsx
'use client'

// Keraksiz `useState` importini olib tashladik
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Label } from '@/components/ui/label' // TO'G'RI IMPORT
import { useRoiCalculator } from '@/hooks/useRoiCalculator'

export default function RoiCalculatorSection() {
	const { input, setInput, output } = useRoiCalculator({
		format: 'small',
		cityTraffic: 'medium',
	})

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
		}).format(amount)
	}

	return (
		<section className='py-20 bg-brand-gray-dark'>
			<div className='container'>
				<Heading as='h2' variant='h2' className='text-center mb-4'>
					Sarmoyangiz Qaytimini Hisoblang
				</Heading>
				<p className='text-center text-brand-gray-medium max-w-2xl mx-auto mb-12'>
					Qahvaxona formati va joylashuvingizdagi trafikni tanlang va taxminiy
					daromadingiz hamda o&apos;zini oqlash muddatini ko&apos;ring.
				</p>

				<Card className='max-w-4xl mx-auto bg-brand-dark border-brand-gray-dark'>
					<CardContent className='p-8 grid md:grid-cols-2 gap-12'>
						{/* Sozlamalar qismi */}
						<div className='space-y-8'>
							<div>
								{/* <label> o'rniga endi import qilingan <Label> komponentini ishlatamiz */}
								<Label className='text-lg font-semibold mb-3 block'>
									1. Qahvaxona formatini tanlang
								</Label>
								<div className='flex flex-col sm:flex-row gap-2'>
									<Button
										onClick={() => setInput({ ...input, format: 'island' })}
										variant={
											input.format === 'island' ? 'default' : 'secondary'
										}
										className='w-full'
									>
										Orolcha
									</Button>
									<Button
										onClick={() => setInput({ ...input, format: 'small' })}
										variant={input.format === 'small' ? 'default' : 'secondary'}
										className='w-full'
									>
										Kichik
									</Button>
									<Button
										onClick={() => setInput({ ...input, format: 'large' })}
										variant={input.format === 'large' ? 'default' : 'secondary'}
										className='w-full'
									>
										Katta
									</Button>
								</div>
							</div>
							<div>
								<Label className='text-lg font-semibold mb-3 block'>
									2. Shahar trafigini tanlang
								</Label>
								<div className='flex flex-col sm:flex-row gap-2'>
									<Button
										onClick={() => setInput({ ...input, cityTraffic: 'low' })}
										variant={
											input.cityTraffic === 'low' ? 'default' : 'secondary'
										}
										className='w-full'
									>
										Past
									</Button>
									<Button
										onClick={() =>
											setInput({ ...input, cityTraffic: 'medium' })
										}
										variant={
											input.cityTraffic === 'medium' ? 'default' : 'secondary'
										}
										className='w-full'
									>
										O&apos;rta
									</Button>
									<Button
										onClick={() => setInput({ ...input, cityTraffic: 'high' })}
										variant={
											input.cityTraffic === 'high' ? 'default' : 'secondary'
										}
										className='w-full'
									>
										Yuqori
									</Button>
								</div>
							</div>
						</div>

						{/* Natijalar qismi (avval bo'sh edi, endi to'ldirildi) */}
						<div className='bg-brand-gray-dark p-6 rounded-lg text-center flex flex-col justify-center'>
							<h3 className='text-lg font-semibold mb-4 text-brand-gray-light'>
								Taxminiy Natijalar:
							</h3>
							<div className='space-y-6'>
								<div>
									<p className='text-sm text-brand-yellow uppercase'>
										Boshlang&apos;ich Sarmoya
									</p>
									<p className='text-4xl font-bold font-serif'>
										{formatCurrency(output.initialInvestment)}
									</p>
								</div>
								<div>
									<p className='text-sm text-brand-yellow uppercase'>
										Oylik Foyda
									</p>
									<p className='text-4xl font-bold font-serif'>
										{formatCurrency(output.monthlyProfit)}
									</p>
								</div>
								<div>
									<p className='text-sm text-brand-yellow uppercase'>
										O&apos;zini Oqlash Muddati
									</p>
									<p className='text-4xl font-bold font-serif'>
										~{output.paybackPeriodMonths} oy
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
