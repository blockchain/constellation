import { writeFile } from "fs"

export const writeFileAsync = async (path: string, body: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        writeFile(path, body, (err) => {
            if (err) return reject(err)

            resolve();
        })
    });
}