import { ICON_URL, IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const skills = [
  { name: 'JavaScript', icon: ICON_URL.JAVASCRIPT },
  { name: 'Serverless Framework', icon: ICON_URL.SERVERLESS },
  { name: 'Express', icon: ICON_URL.EXPRESS },
  { name: 'Webpack', icon: ICON_URL.WEBPACK },
  { name: 'Sass', icon: ICON_URL.SASS },
  { name: 'Aws Lambda', icon: ICON_URL.AWS_LAMBDA },
  { name: 'Amazon S3', icon: ICON_URL.AMAZON_S3 },
];

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][0],
    title: '소개',
    imageUrl: IMAGE_URL.PORTFOLIO_INTRO,
    links: [
      { name: '깃허브', link: 'https://github.com/howons/serverless-preview' },
    ],
    description: `
      <div class="project__skill-list">
      ${skills
        .map(({ name, icon }) => {
          return `<img src="${icon}" alt="${name}" class="project__skill-icon loading" />`;
        })
        .join('')}
      </div>
      <br>
      ${[
        '개인 포트폴리오 사이트를 만드는 1인 프로젝트입니다.',
        '프론트엔드는 툴을 사용하지 않고 Vanilla JS로 컴포넌트 시스템을 구현했습니다.',
        '백엔드는 Express와 Serverless를 사용해 API를 구성했습니다.',
      ].join('<br>')}
    `,
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][1],
    title: '서버리스',
    imageUrl: IMAGE_URL.MUSSEUK,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/howons/velog-cloning/blob/main/src/pages/Write/index.tsx',
      },
    ],
    description: '두번째',
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][2],
    title: '웹팩',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const portfolio = project('portfolio', snapshots);
