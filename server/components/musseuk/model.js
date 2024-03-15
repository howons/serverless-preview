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
      ${['사이트'].join('<br>')}
    `,
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][1],
    title: '피그마',
    imageUrl: IMAGE_URL.MUSSEUK_FIGMA,
    description: ['피그마'].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][2],
    title: '차크라',
    imageUrl: IMAGE_URL.MUSSEUK_CHAKRA,

    description: ['차크라'].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][3],
    title: '탠스택',
    imageUrl: IMAGE_URL.MUSSEUK_TANSTACK,
    links: [
      {
        name: '관련 포스팅: Suspense 원리',
        link: 'https://velog.io/@shinhw371/React-suspense-throw',
      },
    ],
    description: ['탠스택'].join('<br>'),
  },
];

export const musseuk = project('musseuk-letter', snapshots);
