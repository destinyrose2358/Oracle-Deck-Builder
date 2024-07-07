import { BasicColor, colorToStyle } from "../../utils/colors";
import { WithType } from "../../utils/utilityTypes";
import { IntrinsicCardProps } from "./Card";

export const RectangleCardKeyConst = "rectangle";
export type RectangleCardKey = typeof RectangleCardKeyConst;

export type RectangleCardProps = {
    width?: number;
    height?: number;
} & IntrinsicCardProps;
export type TypedRectangleCardProps = WithType<RectangleCardProps, RectangleCardKey>;

export function RectangleCard(
    {
        width = 100,
        height = 200,
        zIndex = 0,
        colors: {
            base: baseColor
        }
    }: RectangleCardProps
) {
    return <div
        style={{
            width,
            height,
            zIndex,
            ...colorToStyle(baseColor)
        }}
    >

    </div>
}
