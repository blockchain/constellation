export const createIconNameFromSvgFileName = (svgName: string): string => "Icon" + svgName.charAt(0).toUpperCase() + svgName.slice(1, svgName.indexOf(".svg"))
