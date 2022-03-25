import { readdir } from "fs"

export const readFilesInDirectory = (path: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        readdir(path, (err, files: string[]) => {
            if (err) {
                return reject(err);
            }

            resolve(files);
        });
    })
}