import { readFileAsync } from "./readFileAsync";

export const createExportTextFromSvgPath = async (path: string, iconName: string): Promise<string> => {
    const fileContent = await readFileAsync(path);

    return [
        `export const ${iconName} = createIconFromSvg(${fileContent})`
    ].join("\n");
}