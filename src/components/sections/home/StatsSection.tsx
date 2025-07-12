// src/components/sections/home/StatsSection.tsx
import { Heading } from "@/components/ui/heading"

const stats = [
    { value: '50+', label: 'Muvaffaqiyatli qahvaxonalar' },
    { value: '3', label: 'Mamlakatda faoliyat' },
    { value: '95%', label: 'Ijobiy fikrlar' },
    { value: '1.5M+', label: 'Sotilgan stakan qahva' },
];

export default function StatsSection() {
    return (
        <section className="bg-brand-gray-dark py-20">
            <div className="container mx-auto">
                <Heading variant="h2" as="h2" className="text-center mb-12">
                    Biz Raqamlarda
                </Heading>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-5xl font-bold font-serif text-brand-yellow">{stat.value}</p>
                            <p className="text-lg text-brand-gray-light mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}