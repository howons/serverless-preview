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
    imageUrl: IMAGE_URL.PORTFOLIO_COMPO,
    links: [
      {
        name: '관련 포스팅: 컴포넌트 기초',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-component-basic',
      },
      {
        name: '관련 포스팅: 컴포넌트 심화',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-component-deepen',
      },
      {
        name: '깃헙 코드: 공용 컴포넌트',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/server/components/core.js',
      },
    ],
    description: [
      'Vanilla JS에서의 상태 기반 DOM 렌더링 관리를 위해 <b>컴포넌트 시스템</b>을 구성했습니다.',
      '컴포넌트의 공통 기능 및 규칙을 상속으로 쉽게 강제할 수 있도록 <b>클래스형 컴포넌트</b>로 구현했습니다. \
      그리고 모든 컴포넌트가 상속하는 공통 컴포넌트 내부에 "hydrate", "render", "mounted" 등 <b>생애주기</b> 메서드를 연결하고 역할에 맞게 코드를 분리했습니다.',
      '비대한 컴포넌트를 관심사에 따라 분리하기 위해 인수 전달 및 리렌더링 로직을 <b>싱글톤</b>을 활용하여 구현했습니다. \
      또한, 렌더링 흐름이 상하 컴포넌트 간에 꼬이는 것을 방지하기 위해 requestAnimationFrame으로 프레임간 렌더링을 <b>디바운싱</b>하고 <b>배칭</b>으로 효율을 높였습니다. \
      이 외에 언마운트, 이벤트 위임, Skeleton UI 등 추가 기능도 구현했습니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][2],
    title: 'SSR',
    imageUrl: IMAGE_URL.PORTFOLIO_SERVER,
    links: [
      {
        name: '관련 포스팅',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-ssr',
      },
      {
        name: '깃헙 코드',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/server/components/core.js',
      },
    ],
    description: [
      '페이지 데이터가 변하지 않는 포트폴리오 사이트 특성에 맞춰 SSR로 구현.',
      'Express로 API를 구성하고 HTML 데이터를 반환하도록 해서 JS가 로딩 중에도 레이아웃을 볼 수 있도록 함.',
      '첫 로딩이 완료된 후 페이지 이동 때는 main tag 내부 HTML을 스위칭하도록 구현하여 JS를 다시 로딩할 필요는 없도록 구현.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][3],
    title: '서버리스',
    imageUrl: IMAGE_URL.PORTFOLIO_SETTING,
    links: [
      {
        name: '관련 포스팅',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-setting',
      },
      {
        name: '깃헙 코드',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/webpack.config.js',
      },
    ],
    description: [
      '자주 요청이 들어오지 않을 포트폴리오 사이트 특성에 맞춰 서버리스 방식으로 배포.',
      '"Serverless Framework"로 서버리스 함수의 배포 및 관리.',
      '서버리스 함수는 용량이 제한적이므로 웹팩을 통해 파일을 번들링, Serverless 와의 연결을 위해 "serverless-webpack" 플러그인을 사용.',
      '이미지 파일의 경우 Aws S3에 업로드 후 URL을 사용.',
      '서버용 코드와 브라우저용 코드의 웹팩 설정을 달리하기 위해 분리 후 배열로 export.',
    ].join('<br>'),
  },
];

export const portfolio = project('portfolio', snapshots);
