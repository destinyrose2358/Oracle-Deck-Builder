import { FaEye } from "react-icons/fa";
import { InteractiveViewEngine } from "./useInteractiveViewEngine";

export type InteractiveViewProps = {
    engine: InteractiveViewEngine;
}

export function InteractiveView(
    {
        engine
    }: InteractiveViewProps
) {
    return <div
        style={{
            backgroundColor: "yellow"
        }}
    >

    </div>
}

export const InteractiveViewIcon = FaEye;
