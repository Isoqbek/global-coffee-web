// src/hooks/useRoiCalculator.ts
'use client'

import { useState, useMemo } from 'react';

// Ma'lumot turlari
type FormatType = 'large' | 'small' | 'island';
export interface CalculatorInput {
    format: FormatType;
    cityTraffic: 'high' | 'medium' | 'low';
}

export interface CalculatorOutput {
    initialInvestment: number;
    monthlyProfit: number;
    paybackPeriodMonths: number;
}

// Baza qiymatlar
const BASE_COSTS = {
    large: 40000,
    small: 25000,
    island: 15000,
};

const PROFIT_MULTIPLIERS = {
    high: 1.5,
    medium: 1,
    low: 0.7,
};

export const useRoiCalculator = (initialInput: CalculatorInput) => {
    const [input, setInput] = useState<CalculatorInput>(initialInput);

    const output = useMemo((): CalculatorOutput => {
        const initialInvestment = BASE_COSTS[input.format];

        const baseMonthlyProfit = initialInvestment / 18; // O'rtacha 18 oyda qoplanadi
        
        const adjustedProfit = baseMonthlyProfit * PROFIT_MULTIPLIERS[input.cityTraffic];
        
        const paybackPeriodMonths = Math.round(initialInvestment / adjustedProfit);

        return {
            initialInvestment,
            monthlyProfit: Math.round(adjustedProfit),
            paybackPeriodMonths,
        };
    }, [input]);

    return { input, setInput, output };
};