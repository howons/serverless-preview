import { ICON_URL, IMAGE_URL } from '../../utils/images';

const projects = [
  {
    id: 'portfolio',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description:
      'Vanilla JS와 Serverless로 만든 SSR 방식의 포트폴리오 사이트입니다.',
    skills: [
      { name: 'JavaScript', icon: ICON_URL.JAVASCRIPT },
      { name: 'Serverless Framework', icon: ICON_URL.SERVERLESS },
      { name: 'Express', icon: ICON_URL.EXPRESS },
      { name: 'Webpack', icon: ICON_URL.WEBPACK },
      { name: 'Sass', icon: ICON_URL.SASS },
      { name: 'Aws Lambda', icon: ICON_URL.AWS_LAMBDA },
      { name: 'Amazon S3', icon: ICON_URL.AMAZON_S3 },
    ],
  },
];

export const projectList = {
  id: '/project-list',
  content: `
    <div id="project-list" class="project-list">
      <section class="project-list__album">
        ${projects.map(
          ({ id, imageUrl }) => `
          <img src="${imageUrl}" alt="${id} 썸네일" id="project-list__${id}" class="project-list__thumbnail" />
        `,
        )}
      </section>
      <section class="project-list__introduction">
        ${projects.map(
          ({ id, description, skills }) => `
          <div class="project-list__skill-list">${skills.map(
            ({ name, icon }) => `
            <img src="${icon}" alt="${name}" class="project-list__skill-icon" />
          `,
          )}</div>
          <p class="project-list__description">${description}</p>
        `,
        )}
      </section>
    </div>
  `,
};
