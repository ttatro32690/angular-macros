import { calculateRatioValue, formatNumber } from './utilities';
import {Gender} from '../../__types__';

interface CalculateBmrArgs {
    age: number;
    weight: number;
    height: number;
    gender: Gender;
}

type CalculateBmr = (args: CalculateBmrArgs) => number;

const POUNDS_TO_KG = 0.45;
const INCHES_TO_CM = 2.54;

const AGE_MODIFIER = 5;
const WEIGHT_MODIFIER = 10;
const HEIGHT_MODIFIER = 6.25;
const MALE_MODIFIER = 5;
const FEMALE_MODIFIER = -161;

const MALE = 'male';

export const calculateBmr: CalculateBmr = ({ age, weight, height, gender }) => {
    const adjustedWeight = calculateRatioValue({
        value: weight,
        conversion: POUNDS_TO_KG,
    });
    const adjustedHeight = calculateRatioValue({
        value: height,
        conversion: INCHES_TO_CM,
    });

    const adjustedGender = gender === Gender.MALE ? MALE_MODIFIER : FEMALE_MODIFIER;

    return formatNumber(
        adjustedHeight * HEIGHT_MODIFIER +
            adjustedWeight * WEIGHT_MODIFIER -
            age * AGE_MODIFIER +
            adjustedGender
    );
};
