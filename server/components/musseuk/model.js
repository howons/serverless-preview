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
    id: ROUTE_HASHES[ROUTE.MUSSEUK][2],
    title: '웹팩',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const musseuk = project('musseuk-letter', snapshots);
