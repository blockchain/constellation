export const createExportDocumentText = (body: string) => {
    return [
        "// This is a genered file",
        "// DO NOT EDIT",
        "",
        "// To generate this file run 'yarn build:icons' or 'yarn workspace @blockchain-com/constellation build:icons'",
        "",
        body,
        ""
    ].join("\n")
}