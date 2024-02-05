import { IMAGE_URL } from '../../utils/images';

const snapshots = [
  {
    id: 'introduction',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: '설명',
  },
  {
    id: 'serverless',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '두번째',
  },
];

export const portfolio = {
  id: '/portfolio',
  content: `
    <div id="portfolio" class="portfolio">
      <section class="portfolio__snapshot-list">
      ${snapshots
        .map(({ id, imageUrl }) => {
          return `<img src="${imageUrl}" alt="${id} 스냅샷" id="portfolio__${id}" class="portfolio__snapshot" />`;
        })
        .join('')}
      </section>
      <section class="portfolio__description-list">
      ${snapshots
        .map(({ id, description }) => {
          return `<p class="portfolio__description">
            ${description}
          </p>`;
        })
        .join('')}
      </section>
    </div>
  `,
};
