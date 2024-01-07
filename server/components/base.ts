import { sidebar } from './sidebar';

export const generateHTML = (title: string, main: string) => `
  <!DOCTYPE html>
  <html lang="kr">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body>
      <div id="app">
        ${sidebar}
        ${main}
      </div>
    </body>
  </html>
`;
