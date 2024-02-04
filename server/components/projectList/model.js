import { ICON_URL, IMAGE_URL } from '../../utils/images';

export const projects = [
  {
    id: 'portfolio',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: 'Vanilla JS와 Serverless로 만든 SSR 방식의 포트폴리오 사이트',
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
  {
    id: 'one-day-hero',
    imageUrl: IMAGE_URL.HERO,
    description: '알바/심부름 대타 매칭 중개 플랫폼',
    skills: [
      { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT },
      { name: 'React', icon: ICON_URL.REACT },
      { name: 'Next.js', icon: ICON_URL.NEXTJS },
      { name: 'Tailwind CSS', icon: ICON_URL.TAILWIND },
      { name: 'Vercel', icon: ICON_URL.VERCEL },
    ],
  },
  {
    id: 'musseuk-letter',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '데브코스 수강생을 위한 익명 피드백 서비스',
    skills: [
      { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT },
      { name: 'React', icon: ICON_URL.REACT },
      { name: 'Chakra UI', icon: ICON_URL.CHAKRA },
      { name: 'Tanstack Query', icon: ICON_URL.TANSTACK },
      { name: 'Vite', icon: ICON_URL.VITE },
      { name: 'Express', icon: ICON_URL.EXPRESS },
    ],
  },
  {
    id: '7elog',
    imageUrl: IMAGE_URL.VELOG,
    description: '개발자를 위한 블로그 서비스, velog 클로닝 프로젝트',
    skills: [
      { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT },
      { name: 'React', icon: ICON_URL.REACT },
      { name: 'Sass', icon: ICON_URL.SASS },
      { name: 'Axios', icon: ICON_URL.AXIOS },
      { name: 'Amazon S3', icon: ICON_URL.AMAZON_S3 },
    ],
  },
];

export const projectList = {
  id: '/project-list',
  content: `
    <div id="project-list" class="project-list">
      <section class="project-list__album">
        ${projects
          .map(
            ({ id, imageUrl }, index) => `
          <img src="${imageUrl}" alt="${id} 썸네일" id="project-list__${id}" class="project-list__thumbnail" />
        `,
          )
          .join('')}
      </section>
      <section class="project-list__introduction">
        ${projects
          .map(
            ({ id, description, skills }, index) => `
          <div class="project-list__skill-list ${
            index <= 0 ? 'active' : ''
          }">${skills
            .map(
              ({ name, icon }) => `
            <img src="${icon}" alt="${name}" class="project-list__skill-icon" />
          `,
            )
            .join('')}</div>
          <p class="project-list__description ${
            index <= 0 ? 'active' : ''
          }">${description}</p>
        `,
          )
          .join('')}
      </section>
    </div>
  `,
};
