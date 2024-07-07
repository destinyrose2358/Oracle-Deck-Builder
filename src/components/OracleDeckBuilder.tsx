import { useCallback, useMemo, useState } from "react";
import { Card } from "./Card";
import { FaPaintBrush, FaEye } from "react-icons/fa";
import { EditorView } from "./viewers/editor/EditorView";
import { InteractiveView } from "./viewers/interactive/InteractiveView";
import { ViewerModes, useViewer, useViewerEngines } from "./viewers/useViewer";

export function OracleDeckBuilder() {

    const {
        viewer,
        toggler
    } = useViewer();

    return <div
        style={{
            backgroundColor: "blue",
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateRows: "75px 1fr",
        }}
    >
        <div
            style={{
                backgroundColor: "green",
                display: "flex",
                justifyContent: "end"
            }}
        >
            { toggler }
        </div>
        { viewer }
    </div>
}
