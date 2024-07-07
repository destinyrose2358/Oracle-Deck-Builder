import { useMemo } from "react";
import { RectangleCard, RectangleCardKeyConst, RectangleCardProps, TypedRectangleCardProps } from "./RectangleCard";
import { BasicColor, Color } from "../../utils/colors";
import { SquareCard, SquareCardKeyConst, SquareCardProps, TypedSquareCardProps } from "./SquareCard";
import { TwoFoldCard, TwoFoldCardKeyConst, TwoFoldCardProps, TypedTwoFoldCardProps } from "./TwoFoldCard";

export type CardColors = {
    base: Color;
}

export type IntrinsicCardProps = {
    zIndex?: number;
    colors: CardColors;
}

export type CardProps = TypedRectangleCardProps |
    TypedSquareCardProps |
    TypedTwoFoldCardProps;

export function Card(
    {
        type,
        ...other
    }: CardProps
) {
    const renderedCard = useMemo(() => {
        switch (type) {
            case RectangleCardKeyConst:
                return <RectangleCard
                    {...other as RectangleCardProps}
                />
            case SquareCardKeyConst:
                return <SquareCard
                    {...other as SquareCardProps}
                />
            case TwoFoldCardKeyConst:
                return <TwoFoldCard
                    {...other as TwoFoldCardProps}
                />
        }
    }, [
        type,
        other
    ]);

    return renderedCard;
}
