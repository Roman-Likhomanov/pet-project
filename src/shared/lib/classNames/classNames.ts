type Mode = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Mode = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([cls, value]) => value)
            .map(([cls, value]) => cls),
    ]
        .join(' ');
}
