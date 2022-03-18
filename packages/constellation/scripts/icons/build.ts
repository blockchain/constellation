import { resolve } from "path"

import { createExportDocumentText } from "./utils/createExportDocumentText";
import { createIconExportText } from "./utils/createIconExportText";
import { readIconsFiles } from "./utils/readIconsFiles";
import { writeFileAsync } from "./utils/writeFileAsync";

const srcDirectory = resolve(__dirname, './../../src');

const iconsDirectory = resolve(srcDirectory, './icons/svgs');
const exportFilePath = resolve(srcDirectory, './icons/index.g.ts');

export const buildIconsExport = async () => {
    const iconFiles = await readIconsFiles(iconsDirectory);

    const documentText = createExportDocumentText(
        iconFiles.map((iconFile: string) => createIconExportText(iconFile)).join("\n")
    );

    await writeFileAsync(exportFilePath, documentText)
}

buildIconsExport();
