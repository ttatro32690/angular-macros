interface CalculateRatioValueArgs {
    value: number;
    conversion: number;
}

type CalculateRatioValue = (args: CalculateRatioValueArgs) => number;

export const calculateRatioValue: CalculateRatioValue = ({
    value,
    conversion,
}) => {
    return formatNumber(value * conversion);
};

export const formatNumber = (value: number) => {
    return (Number(value.toFixed(2)));
};
