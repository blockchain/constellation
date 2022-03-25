const fs = require('fs');

export const readFileAsync = (path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8' , (err: Error, data: string) => {
            if (err) {
                reject(err);

              return;
            }

            resolve(data);
          })
    })
}