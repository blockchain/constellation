export const createExportDocumentText = (body: string) => {
    return [
        "// This is a genered file",
        "// DO NOT EDIT",
        "",
        "// To generate this file run 'yarn build:icons-export'",
        "",
        body,
        ""
    ].join("\n")
}