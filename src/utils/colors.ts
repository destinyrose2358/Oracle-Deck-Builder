import { CSSProperties, HTMLAttributes } from "react";

export type RGBColor = {
    type: "rgb";
    r: number;
    g: number;
    b: number;
}

export type BasicColor = RGBColor;

export type GradientColor = {
    type: "gradient";
    start: BasicColor;
    end: BasicColor;
}

export type AdvancedColor = GradientColor;

export type Color = BasicColor | AdvancedColor;

export function colorToStyle(color: Color): CSSProperties {
    switch (color.type) {
        case "rgb":
            return {
                backgroundColor: `rgb(${color.r},${color.g},${color.b})`
            }
        case "gradient":
            return {
                backgroundImage: `linear-gradient(${colorToStyle(color.start).backgroundColor}, ${colorToStyle(color.end).backgroundColor})`
            }
    }
}
