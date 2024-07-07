
export type ViewModeToggleProps = {
    icon: JSX.Element;
    toggleViewMode: () => void;
}

export function ViewModeToggle(
    {
        icon,
        toggleViewMode
    }: ViewModeToggleProps
) {
    return <p
        onClick={toggleViewMode}
    >
        {
            icon
        }
    </p>
}
