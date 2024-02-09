export const project = (name, snapshots) => ({
  id: `/${name}`,
  content: `
    <div id="${name}" class="project">
      <section class="project__snapshot-list">
      ${snapshots
        .map(({ id, imageUrl }) => {
          return `<img src="${imageUrl}" alt="${id} 스냅샷" id="${name}__${id}" class="project__snapshot" />`;
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
