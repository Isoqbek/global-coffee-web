// src/app/(main)/coyote-business-automation/page.tsx
import { Heading } from '@/components/ui/heading'

export default function CoyoteBusinessAutomationPage() {
	return (
		<div className='container py-20'>
			<Heading as='h1' variant='h1' className='text-center mb-8'>
				Coyote Business Automation
			</Heading>
			<div className='text-center'>
				<p className='text-lg text-brand-gray-light mb-4'>
					Bu sahifa hali ishlab chiqilmoqda.
				</p>
				<p className='text-brand-gray-medium'>
					Biznes avtomatlashtirish tizimlari haqida ma&apos;lumot tez orada
					qo&apos;shiladi.
				</p>
			</div>
		</div>
	)
}
