import { ICON_URL, IMAGE_URL } from '../../utils/images';

const skills = [
  { name: 'JavaScript', icon: ICON_URL.JAVASCRIPT, score: '4' },
  { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT, score: '3' },
  { name: 'SASS', icon: ICON_URL.SASS, score: '4' },
  { name: 'Tailwind CSS', icon: ICON_URL.TAILWIND, score: '4' },
  { name: 'React', icon: ICON_URL.REACT, score: '4' },
  { name: 'Next.js', icon: ICON_URL.NEXTJS, score: '3' },
  // { name: 'Vue.js', icon: ICON_URL.VUE, score: '2' },
  { name: 'React Hook Form', icon: ICON_URL.HOOK, score: '3' },
  { name: 'Tanstack Query', icon: ICON_URL.TANSTACK, score: '3' },
  // { name: 'Zod', icon: ICON_URL.ZOD, score: '2' },
  // { name: 'Jest', icon: ICON_URL.JEST, score: '2' },
  { name: 'MSW', icon: ICON_URL.MSW, score: '2' },
  { name: 'Webpack', icon: ICON_URL.WEBPACK, score: '3' },
  { name: 'Express', icon: ICON_URL.EXPRESS, score: '2' },
  { name: 'Serverless', icon: ICON_URL.SERVERLESS, score: '3' },
  { name: 'Aws', icon: ICON_URL.AMAZON_S3, score: '2' },
  // { name: 'Django', icon: ICON_URL.DJANGO, score: '1' },
];

export const profile = {
  id: '/profile',
  content: `
    <div id="profile" class="profile">
      <section class="profile__intro">
        <img src="${
          IMAGE_URL.HERO
        }" alt="프로필 이미지" class="profile__image loading" />
        <p class="profile__intro-text">
          토끼조아
          <br>
          <br>
          프로필
        </p>
      </section>
      <section class="profile__additional">
        <p class="profile__edu profile__edu--first">
          교육
        </p>
      </section>
      <section class="profile__additional"> 
        ${skills
          .map(
            ({ name, icon }, index) => `
            <div class="profile__skill profile__skill${
              index <= 0 ? '--first' : ''
            }">
              <img src="${icon}" alt="${name}" class="profile__skill-icon loading" />
            </div>
          `,
          )
          .join('')}
      </section>
    </div>
  `,
};
