import { WithType } from "../../utils/utilityTypes";
import { RectangleCard } from "./RectangleCard";
import { IntrinsicCardProps } from "./Card";

export const SquareCardKeyConst = "square";
export type SquareCardKey = typeof SquareCardKeyConst;

export type SquareCardProps = {
    size?: number;
} & IntrinsicCardProps;
export type TypedSquareCardProps = WithType<SquareCardProps, SquareCardKey>;

export function SquareCard(
    {
        size = 200,
        ...others
    }: SquareCardProps
) {
    return <RectangleCard
        width={size}
        height={size}
        {...others}
    />
}
