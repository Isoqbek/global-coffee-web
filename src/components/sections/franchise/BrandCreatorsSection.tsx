// src/components/sections/franchise/BrandCreatorsSection.tsx
import { Heading } from "@/components/ui/heading";
import Image from 'next/image';

const creators = [
    { name: "John Doe", title: "Asoschi & CEO", bio: "20 yillik tajribaga ega tadbirkor, muvaffaqiyatli qahvaxona madaniyatini yaratishga intiladi.", image: "https://placehold.co/400x400/1E2025/FFFFFF?text=John" },
    { name: "Jane Smith", title: "Operatsion Direktor", bio: "Global ta'minot zanjiri va sifat nazoratini yo'lga qo'yish bo'yicha mutaxassis.", image: "https://placehold.co/400x400/E73544/FFFFFF?text=Jane" },
];

export default function BrandCreatorsSection() {
    return (
        <section className="bg-brand-dark py-20">
            <div className="container text-center">
                <Heading as="h2" variant="h2" className="mb-12">Brend Asoschilari</Heading>
                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {creators.map(creator => (
                        <div key={creator.name}>
                            <Image src={creator.image} alt={creator.name} width={250} height={250} className="rounded-full mx-auto mb-6" />
                            <h3 className="text-2xl font-serif text-brand-light">{creator.name}</h3>
                            <p className="text-brand-yellow font-semibold">{creator.title}</p>
                            <p className="mt-2 text-brand-gray-light">{creator.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}