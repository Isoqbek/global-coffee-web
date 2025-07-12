// src/components/sections/franchise/FranchiseApplicationForm.tsx
'use client'; // Bu forma, shuning uchun 'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FranchiseApplicationForm() {
    // 3-bosqichda react-hook-form shu yerda ishlatiladi
    
    return (
        <section id="apply" className="py-20 bg-brand-gray-dark">
            <div className="container">
                <Card className="max-w-2xl mx-auto bg-brand-dark border-brand-gray-dark">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-serif">Hamkorlik uchun Ariza</CardTitle>
                        <CardDescription className="text-brand-gray-light pt-2">Ma&apos;lumotlaringizni qoldiring va bizning menejerimiz siz bilan 24 soat ichida bog&apos;lanadi.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">To&apos;liq Ismingiz</Label>
                                <Input id="name" placeholder="Masalan, Alisher Usmonov" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="phone">Telefon Raqamingiz</Label>
                                <Input id="phone" placeholder="+998 XX XXX XX XX" type="tel"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Manzilingiz</Label>
                                <Input id="email" placeholder="example@email.com" type="email"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="city">Sarmoya kiritmoqchi bo&apos;lgan shahringiz</Label>
                                <Input id="city" placeholder="Masalan, Toshkent" />
                            </div>
                            <Button type="submit" size="lg" className="w-full">Arizani Yuborish</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}