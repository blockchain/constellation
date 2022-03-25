import { resolve } from "path"

import { createExportDocumentText } from "./utils/createExportDocumentText";
import { createExportTextFromSvgPath } from "./utils/createExportTextFromSvgPath";
import { createIconNameFromSvgFileName } from "./utils/createIconNameFromSvgFileName";
import { readFilesInDirectory } from "./utils/readFilesInDirectory";
import { writeFileAsync } from "./utils/writeFileAsync";

const srcDirectory = resolve(__dirname, './../../src');

const iconsDirectory = resolve(srcDirectory, './icons/svgs');
const exportFilePath = resolve(srcDirectory, './icons/index.g.tsx');

export const buildIconsExport = async () => {
    const allFilesInIconsDirectory = await readFilesInDirectory(iconsDirectory);

    const svgFiles = allFilesInIconsDirectory.filter((file) => file.endsWith(".svg"));

    const iconsExportedText = (
        await Promise.all(
            svgFiles.map(
                (svgFileName) => {
                    const iconFilePath = resolve(iconsDirectory, svgFileName);

                    return  createExportTextFromSvgPath(
                        iconFilePath,
                        createIconNameFromSvgFileName(svgFileName)
                    )
                }
            )
        )
    ).join("\n")

    const documentText = createExportDocumentText(iconsExportedText);

    await writeFileAsync(exportFilePath, documentText)
}

buildIconsExport();
