export const project = (name, snapshots) => ({
  id: `/${name}`,
  content: `
    <div id="${name}" class="project">
      <nav class="project__slide-bar">
        <div class="project__link-wrapper">
          ${snapshots
            .map(({ id, title }) => {
              return `<a id="${name}-${id}__link" class="project__link">${title}</a>`;
            })
            .join('')}
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
    </div>
  `,
});
