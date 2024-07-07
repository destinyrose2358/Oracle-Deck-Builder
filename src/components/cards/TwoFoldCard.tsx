import { colorToStyle } from "../../utils/colors";
import { OmitFromUnion, WithType } from "../../utils/utilityTypes";
import { Card, CardProps, IntrinsicCardProps } from "./Card";

export const TwoFoldCardKeyConst = "two-fold";
export type TwoFoldCardKey = typeof TwoFoldCardKeyConst;

export type TwoFoldCardProps = {
    cardProps: OmitFromUnion<CardProps, keyof IntrinsicCardProps>;
} & IntrinsicCardProps;
export type TypedTwoFoldCardProps = WithType<TwoFoldCardProps, TwoFoldCardKey>;

export function TwoFoldCard(
    {
        cardProps,
        zIndex = 0,
        colors
    }: TwoFoldCardProps
) {
    return <div
        style={{
            zIndex
        }}
    >
        <Card
            colors={colors}
            zIndex={zIndex}
            {...cardProps}
        />
        <div
            style={{
                transform: "rotate(180deg)"
            }}
        >
            <Card
                colors={colors}
                zIndex={zIndex}
                {...cardProps}
            />
        </div>
    </div>
}
