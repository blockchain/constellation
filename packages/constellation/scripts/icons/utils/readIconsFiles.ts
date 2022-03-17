import { readdir } from "fs"

export const readIconsFiles = (iconsPath: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        readdir(iconsPath, (err, files: string[]) => {
            if (err) {
                return reject(err);
            }

            const svgFiles = files.filter((file) => file.endsWith(".svg"));

            resolve(svgFiles);
        });
    })
}