export const createExportDocumentText = (body: string) => {
    return [
        "// This is a genered file",
        "// DO NOT EDIT",
        "",
        "// To generate this file run 'yarn build:icons' or 'yarn workspace @blockchain-com/constellation build:icons'",
        "",
        `import React from 'react'`,
        `import { createIconFromSvg } from './utils'`,
        body,
        ""
    ].join("\n")
}