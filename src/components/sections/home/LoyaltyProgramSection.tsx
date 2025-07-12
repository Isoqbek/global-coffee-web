// src/components/sections/home/LoyaltyProgramSection.tsx
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import Image from "next/image";

export default function LoyaltyProgramSection() {
    return (
        <section className="bg-brand-gray-dark py-20">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Heading as="h2" variant="h2" className="mb-4">
                            Sodiqlik Dasturimizga Qo&apos;shiling!
                        </Heading>
                        <p className="text-6xl font-serif text-brand-yellow mb-4">5 + 1 = Sovg&apos;a</p>
                        <p className="text-brand-gray-light mb-8 max-w-lg">
                            Har beshta qahva xaridingiz uchun oltinchisini bizdan sovg&apos;aga oling! Shunchaki mobil ilovamizni yuklab oling va bonuslarni yig&apos;ishni boshlang.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg">Ilovani Yuklab Olish</Button>
                            <Link href="/coyote-business-automation">
                                <Button size="lg" variant="secondary">Biznes uchun</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src="https://placehold.co/400x500/1E2025/FFFFFF?text=Mobile+App" alt="Global Coffee App" width={400} height={500} className="rounded-lg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}