import { ICON_URL, IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const skills = [
  { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT },
  { name: 'React', icon: ICON_URL.REACT },
  { name: 'Next.js', icon: ICON_URL.NEXTJS },
  { name: 'Tailwind CSS', icon: ICON_URL.TAILWIND },
  { name: 'Vercel', icon: ICON_URL.VERCEL },
];

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][0],
    title: '소개',
    imageUrl: IMAGE_URL.HERO,
    links: [
      {
        name: '목업 사이트',
        link: 'https://vercel.live/link/one-day-hero-git-mockup-preview-howon-shin.vercel.app?via=deployment-domains-list-branch',
      },
      {
        name: '깃허브',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE',
      },
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
        '알바나 심부름을 대신 해줄 사람과 매칭해주는 웹 서비스 개발 프로젝트입니다.',
        '데브코스 2차 팀 프로젝트로, 백엔드 3명과 프론트엔드 3명으로 진행했으며 2023년 10월 9일부터 2023년 12월 10일까지 개발했습니다.',
        ' ',
        '프론트엔드 기여도: 50%',
        '주 역할: 프론트엔드 팀 리딩, 프로젝트 세팅 및 개발.',
      ].join('<br>')}
    `,
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][1],
    title: 'Next.js',
    imageUrl: IMAGE_URL.HERO_NEXT,
    links: [
      {
        name: '관련 회고',
        link: 'https://velog.io/@shinhw371/FEDC-OneDayHero',
      },
    ],
    description: [
      '급한 사람들이 대상인 서버스의 특성으로 고려해 HTML이 미리 노출되는 SSR의 이점을 얻기위해 Next.js 채택.',
      '프론트 팀원 모두 첫 사용인 점을 고려해 프로젝트가 시작하기 1주 전부터 Next.js Playground 깃헙 레포를 공유하며 학습.',
      '당시 stable이 되고 Page router 보다 학습 장벽이 낮은 App router를 선택.',
      '목적대로 SSR의 이점을 이용하려면 서버컴포넌트를 최대한 활용해야 하므로 원칙을 세움.',
      '처음엔 모두 서버컴포넌트로 만들고 사용자 인터렉션이나 브라우저 기능이 필요할 경우 최소 범위를 클라이언트 컴포넌트로 수정.',
      '특히 레이아웃이나 데이터 패칭을 담당하는 컴포넌트는 서버 컴포넌트를 남겨둠.',
      '예시로 채팅 기록은 페이지 로드 시점에 패칭할 수 있으므로 서버 컴포넌트로 설정.',
      '헤더도 클릭이 필요한 케밥 메뉴만 클라이언트 컴포넌트로 변환.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][2],
    title: 'Mock',
    imageUrl: IMAGE_URL.HERO_MSW,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/blob/develop/one-day-hero/src/app/api/v1/mock/mission-proposals/route.ts',
      },
      {
        name: '관련 포스팅',
        link: 'https://velog.io/@shinhw371/Nextjs-13-MSW-Failure-Record',
      },
    ],
    description: [
      '백엔드 팀과의 병렬적 개발을 위해 API Mocking을 활용하기로 결정.',
      '대표적 Mocking 라이브러리인 MSW를 사용하기로 했으나 Next.js App router와 호환이 되지 않는 것을 알게 됨.',
      'MSW처럼 REST API의 메서드를 정의하고 Request, Response 객체를 조작할 수 있는 방안을 모색중 Next.js의 Route Handler 발견.',
      'API 스펙에 맞게 정적 데이터를 반환하는 API를 Route Handler에 구현하고 환경변수에 따라 API url을 분기 처리하여 Mocking 구현.',
      '링크된 목업 사이트도 해당 방식으로 설정해둔 상태.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][3],
    title: 'Fetch',
    imageUrl: IMAGE_URL.HERO_FETCH,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/prgrms-fe-devcourse/FEDC4_MUSSEUK_LETTER_Donggeun/blob/main/packages/web/src/pages/Post/index.tsx',
      },
      {
        name: '깃헙 위키',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/wiki/fetch-API-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85-%EA%B0%80%EC%9D%B4%EB%93%9C',
      },
      {
        name: '관련 포스팅',
        link: 'https://velog.io/@shinhw371/JS-patially-applied-currying-record',
      },
    ],
    description: [
      'Next.js에서 기본 제공하는 Fetch API의 캐시 기능을 활용.',
      '오류 처리를 추상화하기 위해 "safeFetch" 함수 구현.',
      'POST, PATCH 같은 요청의 경우 필요한 일부 데이터가 사용 시점에 접근 가능한 경우가 많아 사용 시점에도 인수를 전달할 수 있도록 "bind"를 이용한 "useMutationalFetch" 구현.',
      '추상화 후 타입 단언을 이용해 타입스크립트의 인텔리센스가 들어갈 인수를 추론할 수 있도록 함.',
      'Pagenation 방식으로 응답하는 API의 관리를 위해 "useInfiniteFetch" 구현.',
      'intersection observer를 사용해 페이지를 이어서 로딩하는 기능 구현.',
      '데이터 목록에서 찜 버튼을 누르는 경우처럼 페이지 데이터를 업데이트하며 화면 모습은 유지하는 기능이 필요, 스크롤 위치를 기억하고 업데이트 시 복구하는 기능 추가.',
      '컴포넌트 언마운트 시 스크롤 위치를 로컬스토리지에 저장하여 페이지 이동 시에도 상태를 기억하는 기능도 구현.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][4],
    title: '채팅',
    imageUrl: IMAGE_URL.HERO_CHAT,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/blob/develop/one-day-hero/src/hooks/useChatting.ts',
      },
    ],
    description: [
      '매칭이 주요 수단인 서비스 특성상 1:1 채팅 기능이 필요.',
      'StompJS를 사용해서 서버 웹소켓과 연결.',
      '채팅 로직은 모두 커스텀 훅으로 정리하여 사용.',
    ].join('<br>'),
  },
];

export const oneDayHero = project('one-day-hero', snapshots);
