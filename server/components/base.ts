export const generateHTML = (title: string, app: string) => `
    <!DOCTYPE html>
    <html lang="kr">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
    </head>
    <body>
        <div id="app">
            ${app}
        </div>
    </body>
    </html>
`;
