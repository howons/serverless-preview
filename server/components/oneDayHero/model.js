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
      ${['원데히'].join('<br>')}
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
    description: ['넥스트'].join('<br>'),
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
    ],
    description: ['목서워'].join('<br>'),
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
    ],
    description: ['패치'].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][4],
    title: '채팅',
    imageUrl: IMAGE_URL.HERO_CHAT,

    description: ['채팅'].join('<br>'),
  },
];

export const oneDayHero = project('one-day-hero', snapshots);
