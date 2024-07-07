import { useMemo, useState } from "react";

export type EditorViewState = {

}

export type EditorViewMethods = {

}

export type TypedEditorViewEngine = {
    type: "editor";
    state: EditorViewState;
    methods: EditorViewMethods;
}
export type EditorViewEngine = Omit<TypedEditorViewEngine, "type">;

export function useEditorViewEngine(): EditorViewEngine {
    const [state, setState] = useState<EditorViewState>({
        
    });
    const methods = useMemo<EditorViewMethods>(() => {
        return {

        }
    }, [

    ]);

    const finalEditorEngine = useMemo(() => {
        return {
            state,
            methods
        }
    }, [
        state,
        methods
    ]);

    return finalEditorEngine;
}
