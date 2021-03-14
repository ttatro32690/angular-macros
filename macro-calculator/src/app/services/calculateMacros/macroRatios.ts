import { calculateRatioValue, formatNumber } from './utilities';

const PROTEIN_KCAL_TO_GRAMS = 4;
const FAT_KCAL_TO_GRAMS = 9;
const CARBS_KCAL_TO_GRAMS = 4;

interface MacroGramKCal {
    grams: number;
    calories: number;
}

export interface AllMacroValues {
    protein: MacroGramKCal;
    fat: MacroGramKCal;
    carb: MacroGramKCal;
}

interface CalculateMacroRatiosArgs {
    weight: number;
    ratios: {
        protein: number;
        fat: number;
    };
    basalMetabolicRate: number;
    activityLevel: number;
}

type CalculateMacroRatios = (args: CalculateMacroRatiosArgs) => AllMacroValues;

export const calculateMacroRatios: CalculateMacroRatios = ({
    basalMetabolicRate,
    activityLevel,
    weight,
    ratios,
}) => {
    const proteinGrams = calculateRatioValue({
        value: weight,
        conversion: ratios.protein,
    });
    const fatGrams = calculateRatioValue({
        value: weight,
        conversion: ratios.fat,
    });

    const subCalories = fatGrams * 9 + proteinGrams * 4;
    const carbKCal = basalMetabolicRate * activityLevel - subCalories;

    return {
        protein: {
            grams: formatNumber(proteinGrams),
            calories: formatNumber(proteinGrams * PROTEIN_KCAL_TO_GRAMS),
        },
        fat: {
            grams: formatNumber(fatGrams),
            calories: formatNumber(fatGrams * FAT_KCAL_TO_GRAMS),
        },
        carb: {
            grams: formatNumber(carbKCal / CARBS_KCAL_TO_GRAMS),
            calories: formatNumber(carbKCal),
        },
    };
};
