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
        name: '관련 포스팅: SSR',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-ssr',
      },
      {
        name: '깃헙 코드: 메인 스위칭',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/server/components/main/Main.js',
      },
    ],
    description: [
      '빌드 이후 페이지 데이터가 거의 변하지 않는 포트폴리오 사이트 특성에 맞춰 <b>서버 사이드 렌더링(SSR)</b> 방식으로 페이지를 구현했습니다. \
      백엔드 서버에서 Express로 API를 구성하고 HTML 데이터를 반환하도록 설정했습니다. 이로 인해 브라우저에서 JS가 로딩 중에도 레이아웃을 볼 수 있습니다.',
      '첫 로딩이 완료된 후 페이지 이동할 때는 main tag 내부 <b>HTML을 스위칭</b>하도록 구현하여 JS를 다시 로딩할 필요는 없도록 클라이언트 렌더링 방식을 조합했습니다. \
      스타일 시트도 페이지마다 분리하고 페이지 이동마다 스타일 태그를 document head에 추가하여 <b>분할 로딩</b>을 구현했습니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][3],
    title: '서버리스',
    imageUrl: IMAGE_URL.PORTFOLIO_SETTING,
    links: [
      {
        name: '관련 포스팅: 프로젝트 세팅',
        link: 'https://velog.io/@shinhw371/js-serverless-ssr-setting',
      },
      {
        name: '깃헙 코드: 웹팩 설정',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/webpack.config.js',
      },
    ],
    description: [
      '자주 요청이 들어오지 않는 포트폴리오 사이트 특성에 맞춰 서버 운영 부담을 줄일 수 있는 <b>서버리스</b> 방식으로 배포했습니다. \
      Express와 Aws Lambda의 연계를 위해 <b>Serverless Framework</b>를 활용하여 서버리스 함수를 배포하고 관리했습니다.',
      '서버리스 함수는 용량이 제한적이므로 <b>Webpack</b>을 통해 JS 및 CSS 파일을 번들링했습니다. 그리고 웹팩과 Serverless Framework의 연결을 위해 "serverless-webpack" 플러그인을 사용했습니다. \
      서버용 코드와 브라우저용 코드의 실행 환경이 다르므로 웹팩 설정을 달리해야 합니다. 때문에 각 설정을 따로 작성한 후 배열로 export하여 번들링 과정을 분리했습니다.',
      '또한, 이미지 파일의 경우 서버리스 함수에 포함해서 올리면 용량 부담이 높아지므로 Aws S3에 따로 업로드 후 URL을 코드에서 사용했습니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][4],
    title: '사이드바',
    imageUrl: IMAGE_URL.PORTFOLIO_SIDE,
    links: [
      {
        name: '관련 포스팅: scroll-snap',
        link: 'https://velog.io/@shinhw371/CSS-scroll-snap-bug',
      },
      {
        name: '깃헙 코드: 사이드바',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/server/components/sidebar/Sidebar.js',
      },
      {
        name: '깃헙 코드: 사이드바 스타일',
        link: 'https://github.com/howons/serverless-preview/blob/blog-deploy/server/src/style.scss#L31',
      },
    ],
    description: [
      '현재 페이지 제목과 자연스럽게 이어지는 <b>사이드 메뉴 바</b>를 만들어 디자인 요소로 사용했습니다.',
      '메뉴가 제목과 자연스럽게 스크롤되어 이어지게 만들면서 <b>메인 페이지의 스크롤이 막히는 문제</b>가 있었습니다. \
      사이드바가 제목 길이만큼의 너비를 가지고 스크롤되는 방식인데 페이지보다 위에 보여야하는 특성을 가지고 있어 차지하는 공간 만큼 스크롤 이벤트를 가로채는 상황이었습니다. \
      이는 z-index를 조정하는 것으로 해결되지 않았는데 사이드바에 지정한 <b>"position: fixed"</b> 속성이 새로운 <b>쌓임 맥락</b>을 생성했기 때문이었습니다.',
      '때문에 사이드바의 "fixed"를 제거하고 width를 0으로 설정하여 차지하는 영역을 제거했습니다. \
      스크롤 컨테이너는 자식 요소로 이전하고 "overflow: visible"로 viewport 안에 위치하도록 수정했습니다. \
      이 때 사이드바의 아이템은 <b>transform</b> 속성을 가지고 있어 새로운 쌓임 맥락을 생성하므로 아이템만 앞으로 나와 스크롤을 막는 구역을 최소화할 수 있었습니다. \
      즉, main과 sidebar는 공통 부모인 app의 쌓임 맥락 안에서 계층을 이루고 sidebar-item만 별개의 쌓임 맥락에서 나타나 사이드바 배경이 main 뒤에 올 수 있습니다.',
      ' ',
      '사이드 메뉴 아이템의 스크롤 위치를 맞추기 위해 CSS 속성중 <b>scroll-snap</b>을 활용했습니다. \
      이는 기존 자바스크립트 기반 위치 정렬 대비 성능상 이점을 가지고 설정이 간편합니다. \
      하지만 사용하면서 transform 속성의 존재 유무 및 방향과 <b>충돌</b>이 일어나는 것을 찾아내었고, 블로그에 해당 문제를 <b>공유</b>했습니다.',
    ].join('<br>'),
  },
];

export const portfolio = project('portfolio', snapshots);
