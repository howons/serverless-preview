import { sidebar } from './sidebar';

export const generateHTML = (title, main) => `
  <!DOCTYPE html>
  <html lang="kr">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="stylesheet" href="./src/style.css"/>
    </head>
    <body>
      <div id="app">
        ${sidebar}
        ${main}
      </div>
      <script src="./src/main.js" type="module"></script>
    </body>
  </html>
`;
