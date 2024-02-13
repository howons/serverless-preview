export const project = (name, snapshots) => ({
  id: `/${name}`,
  content: `
    <div id="${name}" class="project">
      <nav id="slide-bar" class="project__slide-bar">
        <div id="project__link-wrapper" class="project__link-wrapper">
          <div class="project__scroll-helper"></div>
          ${snapshots
            .map(() => {
              return `<div class="project__scroll-helper"></div>`;
            })
            .join('')}
          ${snapshots
            .map(({ id, title }) => {
              return `<a id="${name}-${id}__link" class="project__link">${title}</a>`;
            })
            .join('')}
          <div class="project__scroll-helper"></div>
        </div>
      </nav>
      <section class="project__snapshot-list">
      ${snapshots
        .map(({ id, imageUrl }) => {
          return `<img src="${imageUrl}" alt="${id} 스냅샷" class="project__snapshot" />`;
        })
        .join('')}
      </section>
      <section class="project__description-list">
      ${snapshots
        .map(({ id, description }) => {
          return `<p class="project__description">
            ${description}
          </p>`;
        })
        .join('')}
      </section>
        <div class="scroll-container__horizon">
        <div id="scroll-indicator__horizon" class="scroll-indicator inactive">
          <div class="indicator indicator__prev"></div>
          <div class="indicator indicator__next"></div>
        </div>
        <div class="scroll-indicator__static">
          <div class="indicator indicator__prev"></div>
          <div class="indicator indicator__next"></div>
        </div>
      </div>
    </div>
  `,
});
