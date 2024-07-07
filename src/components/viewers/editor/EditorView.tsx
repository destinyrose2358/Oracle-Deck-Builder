import { FaPaintBrush } from "react-icons/fa"
import { EditorViewEngine } from "./useEditorViewEngine";

export type EditorViewProps = {
    engine: EditorViewEngine;
}

export function EditorView(
    {
        engine
    }: EditorViewProps
) {
    return <div
        style={{
            backgroundColor: "purple"
        }}
    >

    </div>
}

export const EditorViewIcon = FaPaintBrush;
