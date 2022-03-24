const createIconComponentName = (svgName: string): string => "Icon" + svgName.charAt(0).toUpperCase() + svgName.substring(1)

export const createIconExportText = (svgPath: string): string => {
    const [svgName] = svgPath.split(".")

    const iconComponentName = createIconComponentName(svgName);

    return [
        `export { default as ${iconComponentName} } from './svgs/${svgPath}'`,
    ].join("\n")
}