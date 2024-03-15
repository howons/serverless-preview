import { ICON_URL, IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const skills = [
  { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT },
  { name: 'React', icon: ICON_URL.REACT },
  { name: 'Sass', icon: ICON_URL.SASS },
  { name: 'CSS Modules', icon: ICON_URL.CSS_MODULES },
  { name: 'Axios', icon: ICON_URL.AXIOS },
  { name: 'CodeMirror', icon: ICON_URL.CODEMIRROR },
  { name: 'Amazon S3', icon: ICON_URL.AMAZON_S3 },
];

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.VELOG][0],
    title: '소개',
    imageUrl: IMAGE_URL.VELOG_INTRO,
    links: [{ name: '목업 사이트', link: 'https://velog-cloning.vercel.app/' }],
    description: `
      <div class="project__skill-list">
      ${skills
        .map(({ name, icon }) => {
          return `<img src="${icon}" alt="${name}" class="project__skill-icon loading" />`;
        })
        .join('')}
      </div>
      <br>
      ${['짭로그'].join('<br>')}
    `,
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][1],
    title: '에디터',
    imageUrl: IMAGE_URL.VELOG_EDIT,

    description: ['에디터'].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][2],
    title: '포스트',
    imageUrl: IMAGE_URL.VELOG_POST,

    description: ['포스트'].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][3],
    title: '배포',
    imageUrl: IMAGE_URL.VELOG_DEPLOY,

    description: ['배포'].join('<br>'),
  },
];

export const velog = project('velog', snapshots);
