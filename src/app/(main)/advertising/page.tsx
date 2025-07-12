// src/app/(main)/advertising/page.tsx
import { Heading } from '@/components/ui/heading';

export default function AdvertisingPage() {
    return (
        <div className="container py-20">
            <Heading variant="h1" as="h1" className="text-center mb-8">Reklama Imkoniyatlari</Heading>
            <p className="text-center text-brand-gray-light">Ushbu bo&apos;lim ishlab chiqilmoqda.</p>
        </div>
    )
}