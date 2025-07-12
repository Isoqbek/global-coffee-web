// src/components/sections/franchise/FaqSection.tsx
'use client'; // Bu client komponent, chunki interaktivlik bor

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heading } from '@/components/ui/heading';

const faqData = [
    {
        question: "Franshiza uchun boshlang'ich sarmoya qancha?",
        answer: "Boshlang'ich sarmoya tanlangan nuqta formatiga bog'liq. 'Orolcha' formati uchun taxminan $15,000, to'liq formatdagi qahvaxona uchun esa $40,000 dan boshlanadi. Bu summaga ta'mir, jihozlar va dastlabki marketing xarajatlari kiradi."
    },
    {
        question: "O'zini oqlash muddati qancha?",
        answer: "O'rtacha o'zini oqlash muddati (ROI) 12 oydan 24 oygacha. Bu sizning joylashuvingiz, trafikingiz va operatsion boshqaruvingiz samaradorligiga bog'liq. Bizning ROI kalkulyatorimiz sizga taxminiy hisob-kitoblarni qilishga yordam beradi."
    },
    // ...bu yerga boshqa savol-javoblarni qo'shing
];

export default function FaqSection() {
    return (
        <section className="bg-brand-dark py-20">
            <div className="container mx-auto">
                <Heading variant="h2" as="h2" className="text-center mb-12">
                    Tez-tez So&apos;raladigan Savollar
                </Heading>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <AccordionItem value={`item-${index + 1}`} key={index}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}