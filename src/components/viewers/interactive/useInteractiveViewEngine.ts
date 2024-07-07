import { useMemo, useState } from "react";

export type InteractiveViewState = {
    
}

export type InteractiveViewMethods = {

}

export type TypedInteractiveViewEngine = {
    type: "interact";
    state: InteractiveViewState;
    methods: InteractiveViewMethods;
}
export type InteractiveViewEngine = Omit<TypedInteractiveViewEngine, "type">;

export function useInteractiveViewEngine(): InteractiveViewEngine {
    const [state, setState] = useState<InteractiveViewState>({
        
    });
    const methods = useMemo<InteractiveViewMethods>(() => {
        return {

        }
    }, [

    ]);

    const finalInteractiveEngine = useMemo(() => {
        return {
            state,
            methods
        }
    }, [
        state,
        methods
    ]);

    return finalInteractiveEngine;
}
