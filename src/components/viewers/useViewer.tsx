import { useCallback, useMemo, useState } from "react";
import { EditorViewEngine, TypedEditorViewEngine, useEditorViewEngine } from "./editor/useEditorViewEngine";
import { InteractiveViewEngine, TypedInteractiveViewEngine, useInteractiveViewEngine} from "./interactive/useInteractiveViewEngine";
import { EditorView, EditorViewIcon } from "./editor/EditorView";
import { InteractiveView, InteractiveViewIcon } from "./interactive/InteractiveView";
import { ViewModeToggle } from "./ViewModeToggle";

export type TypedViewerEngine = TypedEditorViewEngine | TypedInteractiveViewEngine;

export type ViewerEngines = {
    [p in TypedViewerEngine["type"]]: Omit<Extract<TypedViewerEngine, {type: p}>, "type">;
}
export type ViewerModes = keyof ViewerEngines;

export function useViewerEngines(): ViewerEngines {
    const editor = useEditorViewEngine();
    const interact = useInteractiveViewEngine();

    return {
        editor,
        interact
    }
}

export type ViewElements = {
    viewer: JSX.Element;
    toggler: JSX.Element;
}

export function useViewer(): ViewElements {
    const [viewerMode, setViewerMode] = useState<ViewerModes>("interact");
    const toggleMode = useCallback(() => {
        setViewerMode(prevMode => prevMode === "editor" ? "interact" : "editor");
    }, [

    ]);
    const viewerEngines = useViewerEngines();
    const selectedViewerEngine = useMemo(() => viewerEngines[viewerMode], [
        viewerEngines,
        viewerMode
    ]);

    const viewer = useMemo(() => {
        switch (viewerMode) {
            case "editor":
                return <EditorView
                    engine={selectedViewerEngine as EditorViewEngine}
                />;
            case "interact":
                return <InteractiveView
                    engine={selectedViewerEngine as InteractiveViewEngine}
                />;
        }
    }, [
        viewerMode,
        selectedViewerEngine
    ]);

    const toggler = useMemo(() => {
        let finalIcon = <></>;
        switch (viewerMode) {
            case "editor":
                finalIcon = <EditorViewIcon/>;
                break;
            case "interact":
                finalIcon = <InteractiveViewIcon />;
                break;
        }

        return <ViewModeToggle
            toggleViewMode={toggleMode}
            icon={finalIcon}
        />;
    }, [
        viewerMode,
        toggleMode
    ]);

    const finalViewElements = useMemo<ViewElements>(() => ({
        viewer,
        toggler
    }), [
        viewer,
        toggler
    ]);

    return finalViewElements;
}
