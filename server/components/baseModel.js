import { ROUTE_TITLE } from '../utils/routes';
import { getStyleTag } from '../utils/styles';
import { scrollIndicator } from './scrollIndicator/model';
import { sidebar } from './sidebar/model';

export const baseModel = (component) => `
  <!DOCTYPE html>
  <html lang="kr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width" />
      <title>${ROUTE_TITLE[component.id]}</title>
      <link rel="icon" type="image/png" href="./src/favicon-16x16.png" sizes="16x16">
      <link rel="icon" type="image/png" href="./src/favicon-32x32.png" sizes="32x32">
      <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
      <link rel="stylesheet" href="./src/normalize.css"/>
      <link rel="stylesheet" href="./src/style.css"/>
      ${getStyleTag(component.id)}
    </head>
    <body>
      <div id="app" class="app">
        ${sidebar}
        <main id="main" class="main">
          ${component.content}
        </main>
        ${scrollIndicator}
      </div>
      <script src="./src/main.js" type="module"></script>
    </body>
  </html>
`;
