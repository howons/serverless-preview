import { scrollIndicator } from './scrollIndicator/model';
import { sidebar } from './sidebar/model';

export const generateHTML = (title, main) => `
  <!DOCTYPE html>
  <html lang="kr">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="stylesheet" href="./src/style.css"/>
    </head>
    <body>
      <div id="app" class="app">
        ${sidebar}
        ${main}<div id="main-divider"></div>
        ${scrollIndicator}
      </div>
      <script src="./src/main.js" type="module"></script>
    </body>
  </html>
`;
