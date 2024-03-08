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
        '프론트엔드는 Vanilla JS로 컴포넌트 시스템을 구현했습니다.',
        '백엔드는 Express와 Serverless를 사용해 API를 구성했습니다.',
        '모든 코드는 웹팩을 통해 번들링했습니다.',
      ].join('<br>')}
    `,
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][1],
    title: '컴포넌트',
    imageUrl: IMAGE_URL.MUSSEUK,
    links: [
      {
        name: '관련 포스팅1',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-component-basic',
      },
      {
        name: '관련 포스팅2',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-component-deepen',
      },
      {
        name: '깃헙 코드',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/server/components/core.js',
      },
    ],
    description: [
      'Vanilla JS에서의 상태 기반 렌더링 관리를 위해 컴포넌트 시스템 구현.',
      '클래스형 컴포넌트로 구현하여 컴포넌트의 공통 기능 및 규칙을 상속으로 쉽게 강제할 수 있도록 함.',
      '"hydrate", "render", "mounted" 등 생애 주기 메서드를 구현하고 역할에 맞게 코드를 분리.',
      '리렌더링, 인수 전달, 언마운트, 이벤트 위임, 배칭 등의 추가 기능도 구현.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][2],
    title: '서버리스',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const portfolio = project('portfolio', snapshots);
