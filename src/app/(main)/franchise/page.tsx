// src/app/(main)/franchise/page.tsx
import { Heading } from "@/components/ui/heading";
import BrandCreatorsSection from "@/components/sections/franchise/BrandCreatorsSection";
import FaqSection from "@/components/sections/franchise/FaqSection";
import FranchiseApplicationForm from "@/components/sections/franchise/FranchiseApplicationForm";
import RoiCalculatorSection from "@/components/sections/franchise/RoiCalculatorSection";

export default function FranchisePage() {
    return (
        <>
            <section className="pt-32 pb-20 text-center bg-brand-gray-dark">
                <div className="container">
                    <Heading variant="h1" as="h1" className="mb-4 text-brand-light">
                        Global Coffee Bilan Muvaffaqiyatga Erishing
                    </Heading>
                    <p className="max-w-3xl mx-auto text-lg text-brand-gray-light">
                        Biz sizga tayyor biznes-model, kuchli brend va toʻliq operatsion yordam taklif qilamiz.
                    </p>
                </div>
            </section>
            
            <RoiCalculatorSection />
            <BrandCreatorsSection />
            {/* Bu yerga "Launch Steps" va "Certificates" section'lari ham qo'shiladi */}
            <FaqSection />
            <FranchiseApplicationForm />
        </>
    );
}