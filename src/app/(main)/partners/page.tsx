// src/app/(main)/partners/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea"; // Textarea komponenti kerak
import { useState } from "react";

// Tezda Textarea komponentini yaratib olamiz
// Aslida: src/components/ui/textarea.tsx
const TextareaComponent = ({...props}) => <textarea {...props} className="flex min-h-[80px] w-full rounded-md border border-brand-gray-dark bg-transparent px-3 py-2 text-sm placeholder:text-brand-gray-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow" />;
// --


function LandlordForm() {
    return (
        <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                 <div className="space-y-1.5"><Label htmlFor="landlord-name">Ismingiz</Label><Input id="landlord-name" /></div>
                 <div className="space-y-1.5"><Label htmlFor="landlord-phone">Telefoningiz</Label><Input id="landlord-phone" /></div>
            </div>
            <div className="space-y-1.5"><Label htmlFor="landlord-address">Bino/Joy manzili</Label><Input id="landlord-address" /></div>
            <div className="space-y-1.5"><Label htmlFor="landlord-area">Maydoni (m²)</Label><Input id="landlord-area" type="number" /></div>
            <div className="space-y-1.5"><Label htmlFor="landlord-message">Qo&apos;shimcha ma&apos;lumot</Label><TextareaComponent id="landlord-message" /></div>
            <Button type="submit" className="w-full">Yuborish</Button>
        </form>
    );
}

function SupplierForm() {
    return (
        <form className="space-y-4">
             <div className="grid sm:grid-cols-2 gap-4">
                 <div className="space-y-1.5"><Label htmlFor="supplier-company">Kompaniya nomi</Label><Input id="supplier-company" /></div>
                 <div className="space-y-1.5"><Label htmlFor="supplier-person">Bog&apos;lanish uchun shaxs</Label><Input id="supplier-person" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label htmlFor="supplier-email">Email</Label><Input id="supplier-email" type="email" /></div>
                 <div className="space-y-1.5"><Label htmlFor="supplier-phone">Telefon</Label><Input id="supplier-phone" /></div>
            </div>
             <div className="space-y-1.5"><Label htmlFor="supplier-file">Tijoriy taklif fayli (PDF)</Label><Input id="supplier-file" type="file" className="file:text-brand-gray-light"/></div>
            <Button type="submit" className="w-full">Yuborish</Button>
        </form>
    );
}

export default function PartnersPage() {
    const [activeTab, setActiveTab] = useState<'landlord' | 'supplier'>('landlord');
    
    return (
        <div className="container py-20">
            <Heading variant="h1" as="h1" className="text-center mb-12">Hamkorlar Uchun</Heading>
            
            <Card className="max-w-3xl mx-auto bg-brand-dark border-brand-gray-dark">
                <CardHeader>
                    <div className="flex w-full bg-brand-gray-dark p-1 rounded-lg">
                        <Button onClick={() => setActiveTab('landlord')} variant={activeTab === 'landlord' ? 'secondary' : 'ghost'} className="w-1/2">Joy Ijaraga Beruvchilar</Button>
                        <Button onClick={() => setActiveTab('supplier')} variant={activeTab === 'supplier' ? 'secondary' : 'ghost'} className="w-1/2">Ta&apos;minotchilar</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {activeTab === 'landlord' ? <LandlordForm /> : <SupplierForm />}
                </CardContent>
            </Card>

            {/* Kontaktlar bloki */}
            <div className="mt-20">
                <Heading variant="h2" as="h2" className="text-center mb-12">Bo&apos;limlar Bilan Aloqa</Heading>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {['Franshiza', 'Marketing', 'Buxgalteriya', 'Xarid va Logistika', 'IT Bo\'limi', 'Yuristlar'].map(dep => (
                        <div key={dep} className="bg-brand-gray-dark p-6 rounded-lg">
                            <h3 className="font-semibold text-lg">{dep}</h3>
                            <a href={`mailto:${dep.toLowerCase().replace(' ', '')}@globalcoffee.com`} className="text-brand-blue hover:underline">
                                {dep.toLowerCase().replace(' ', '')}@globalcoffee.com
                            </a>
                        </div>
    ))}
                </div>
            </div>
        </div>
    )
}