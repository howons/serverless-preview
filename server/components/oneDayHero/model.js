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
        name: '관련 회고: 서버 컴포넌트',
        link: 'https://velog.io/@shinhw371/FEDC-OneDayHero#%EC%84%9C%EB%B2%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8',
      },
    ],
    description: [
      '급한 사람들이 대상인 서버스의 특성을 고려했을 때 <b>체감 로딩 속도</b>를 낮추는 게 이점이 될 수 있으리라 생각했습니다 \
      따라서 JS가 로딩중알 때 HTML이 미리 노출되는 <b>서버 사이드 렌더링(SSR)</b>을 사용하기 위해 <b>Next.js</b>를 채택했습니다.',
      '프론트 팀원 모두 첫 사용인 점을 고려해 프로젝트가 시작하기 1주 전에 Next.js Playground 깃헙 레포를 생성하고 자신이 학습한 걸 공유하는 시간을 가졌습니다.',
      ' ',
      '당시 stable이 되고 Page router 보다 초기 학습 장벽이 낮은 <b>App router</b>를 선택했습니다. \
      목적대로 SSR의 이점을 이용하려면 <b>서버컴포넌트</b>를 최대한 활용해야 하는데 생소한 개념이었기에 원칙을 세웠습니다. \
      모두 서버컴포넌트로 시작한 뒤, 사용자 인터렉션이나 브라우저 기능이 필요할 경우 최소 범위를 클라이언트 컴포넌트로 수정해나갔습니다. \
      특히 레이아웃이나 데이터 패칭을 담당하는 컴포넌트는 서버 컴포넌트 부분을 조금이라도 남겨두었습니다. \
      예시로 채팅 기록은 페이지 로드 시점에 패칭할 수 있으므로 일반 채팅 메세지와는 다르게 서버 컴포넌트로 설정하였습니다. \
      헤더도 레이아웃을 담당하는 서버 컴포넌트지만 클릭이 필요한 케밥 메뉴만 클라이언트 컴포넌트로 변경했습니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][2],
    title: 'Mock',
    imageUrl: IMAGE_URL.HERO_MSW,
    links: [
      {
        name: '관련 포스팅: MSW',
        link: 'https://velog.io/@shinhw371/Nextjs-13-MSW-Failure-Record',
      },
      {
        name: '깃헙 코드: Mock API',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/blob/develop/one-day-hero/src/app/api/v1/mock/mission-proposals/route.ts',
      },
    ],
    description: [
      '백엔드 팀과의 병렬적 개발을 위해 API <b>Mocking</b>을 활용하기로 결정했습니다. \
      처음에는 대표적 Mocking 라이브러리인 <b>MSW</b>를 사용하기로 했으나 Next.js의 App router와 <b>호환 문제</b>가 있는 것을 확인했습니다. \
      대체 방안을 모색중 Next.js의 <b>Route Handler</b>가 적합해보였습니다. MSW의 핸들러처럼 REST API의 메서드를 정의하고 Request, Response 객체를 조작할 수 있습니다. \
      API 스펙에 맞게 데이터를 반환하는 API를 Route Handler로 구현하고 환경변수에 따라 API url을 Backend/Frontend로 <b>분기 처리</b>하여 Mocking을 구현했습니다.',
      '소개 페이지에 링크된 목업 사이트가 해당 방식으로 Mocking된 상태입니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][3],
    title: 'Fetch',
    imageUrl: IMAGE_URL.HERO_FETCH,
    links: [
      {
        name: '관련 포스팅: 부분적용함수',
        link: 'https://velog.io/@shinhw371/JS-patially-applied-currying-record',
      },
      {
        name: '깃헙 위키: Fetch 함수 사용법',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/wiki/fetch-API-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85-%EA%B0%80%EC%9D%B4%EB%93%9C',
      },
      {
        name: '깃헙 코드: safeFetch',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/blob/develop/one-day-hero/src/services/base.ts',
      },
      {
        name: '깃헙 코드: useMutationalFetch',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/blob/develop/one-day-hero/src/hooks/useMutationalFetch.ts',
      },
      {
        name: '깃헙 코드: useInfiniteFetch',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/blob/develop/one-day-hero/src/hooks/useInfiniteFetch.ts',
      },
    ],
    description: [
      'MSW 적용 실패로 라이브러리보다 Next.js의 기본 기능을 먼저 시도해보기로 합의가 이루어졌습니다. \
      따라서 서버 상태 관리는 Next.js에서 기본 제공하는 <b>fetch API</b>의 캐시 기능을 활용했습니다.',
      '',
      'fetch를 편하게 사용하기 위해 <b>오류 처리</b>를 추상화한 "safeFetch" 함수를 작성했습니다.',
      '',
      'POST, PATCH 같은 요청의 경우 필요한 일부 데이터가 훅이나 핸들러 내부에서 접근 가능한 경우가 많습니다. \
      선언 시 접근 가능한 값은 미리 추상화하고 사용 시점에 나머지 인수를 전달 가능하도록 <b>부분적용함수</b>를 활용해 "useMutationalFetch"을 작성했습니다. \
      함수의 리턴 값은 타입 단언을 이용해 들어갈 인수 순서를 인텔리센스가 <b>추론</b>할 수 있도록 했습니다.',
      '',
      '<b>Pagenation</b> 방식으로 응답하는 API의 관리 로직을 추상화하기 위해 "useInfiniteFetch" 작성했습니다. \
      무한 스크롤 용 intersection observer나 더보기 버튼 클릭으로 데이터를 이어서 로딩하는 기능을 구현했습니다. \
      목록에서 찜 버튼을 누르는 경우처럼 페이지 데이터를 업데이트한 뒤 화면 모습은 유지하는 기능이 필요했습니다. \
      따라서 목록 데이터를 새로고침하고 저장된 상태에 맞춰 <b>스크롤을 이동</b> 시키는 로직을 구현했습니다. \
      비슷한 결로 페이지 이동 간에 상태를 기억하는 기능도 로컬스토리지를 사용하여 추가했습니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][4],
    title: '채팅',
    imageUrl: IMAGE_URL.HERO_CHAT,
    links: [
      {
        name: '깃헙 코드: 채팅 훅',
        link: 'https://github.com/prgrms-web-devcourse/Team-6Heroes-OneDayHero-FE/blob/develop/one-day-hero/src/hooks/useChatting.ts',
      },
    ],
    description: [
      '매칭이 주요 수단인 서비스 특성상 1:1 <b>채팅</b> 기능이 필요했습니다. \
      <b>StompJS</b>를 사용해서 서버 웹소켓과 연결해 채팅을 구현했습니다. \
      채팅 로직은 모두 커스텀 훅으로 정리해서 컴포넌트와 관심사를 분리했습니다.',
    ].join('<br>'),
  },
];

export const oneDayHero = project('one-day-hero', snapshots);
