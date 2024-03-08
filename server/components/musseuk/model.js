import { ICON_URL, IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const skills = [
  { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT },
  { name: 'React', icon: ICON_URL.REACT },
  { name: 'Chakra UI', icon: ICON_URL.CHAKRA },
  { name: 'Tanstack Query', icon: ICON_URL.TANSTACK },
  { name: 'Vite', icon: ICON_URL.VITE },
  { name: 'Express', icon: ICON_URL.EXPRESS },
];

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][0],
    title: '소개',
    imageUrl: IMAGE_URL.MUSSEUK,
    links: [
      {
        name: '목업 사이트',
        link: 'https://fedc-4-musseuk-letter-donggeun-web-git-mockup-ce9744-howon-shin.vercel.app/',
      },
      {
        name: '깃허브',
        link: 'https://github.com/prgrms-fe-devcourse/FEDC4_MUSSEUK_LETTER_Donggeun',
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
        '데브코스 수강생을 위한 익명 피드백 서비스입니다.',
        '데브코스 1차 팀 프로젝트로, 제공된 Open API를 사용해 프론트엔드 5명 만으로 진행했으며 2023년 9월 3일부터 2023년 10월 1일까지 개발했습니다.',
        ' ',
        '프론트엔드 기여도: 25%',
        '주 역할: 피드백 작성 및 조회 페이지 구현, 사이트 디자인.',
      ].join('<br>')}
    `,
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][1],
    title: '피그마',
    imageUrl: IMAGE_URL.MUSSEUK_FIGMA,
    description: [
      '팀원이 모두 와이어프레임 및 페이지 디자인에 참여해 사이트를 구상.',
      '와이어프레임 작성엔 excalidraw, 페이지 디자인엔 Figma 사용.',
      'Chakra UI의 피그마 UI kit을 가져와서 활용.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][2],
    title: '차크라',
    imageUrl: IMAGE_URL.MUSSEUK_CHAKRA,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/prgrms-fe-devcourse/FEDC4_MUSSEUK_LETTER_Donggeun/blob/main/packages/web/src/pages/Post/components/CommentWriteModal/index.tsx',
      },
    ],
    description: [
      '1달로 정해진 프로젝트 기간을 고려해 빠르게 컴포넌트 구조를 사용할 수 있는 Chakra UI 사용.',
      'Swiper, react-hook-form 등 타 라이브러리와의 조합. Chakar UI의 useRadioGroup, react-hook-form의 register 등의 유틸 함수를 활용.',
      'breakpoint별 스타일을 지정해 반응형 디자인 구성',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][3],
    title: '탠스택',
    imageUrl: IMAGE_URL.MUSSEUK_TANSTACK,
    links: [
      {
        name: '관련 포스팅',
        link: 'https://velog.io/@shinhw371/React-suspense-throw',
      },
      {
        name: '깃헙 코드',
        link: 'https://github.com/prgrms-fe-devcourse/FEDC4_MUSSEUK_LETTER_Donggeun/blob/main/packages/web/src/pages/Post/index.tsx',
      },
    ],
    description: [
      '서버 상태관리 및 Suspense 활용을 위해 Tanstack Query 사용.',
      'Query Key를 배열로 지정하여 API 사이 캐시 관리.',
      '컴포넌트 간에는 데이터의 ID만 전달하고, Query를 사용해 세부 데이터에 접근. 컴포넌트에 전달하는 속성을 깔끔하게 유지해 개발 용이성을 높임.',
      'Suspense와 Error Boundary 사용으로 서버 상태에 따른 컴포넌트 구조를 선언적으로 관리.',
      'Skeleton UI를 Suspense에 fallback으로 설정하여 사용자 경험 증진.',
    ].join('<br>'),
  },
];

export const musseuk = project('musseuk-letter', snapshots);
