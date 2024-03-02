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
    links: [
      { name: '목업 사이트', link: 'https://velog-cloning.vercel.app/' },
      { name: '깃허브', link: 'https://github.com/wafflestudio20-5/team7-web' },
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
        '개발자들을 위한 블로그 서비스인 "Velog"를 클로닝한 프로젝트입니다.',
        '서울대학교 웹개발 동아리, 와플스튜디오의 입부 팀 프로젝트로 백엔드 4명, 프론트엔드 3명으로 진행했으며 2022년 12월 11일부터 2023년 2월 5일까지 개발했습니다.',
        ' ',
        '프론트엔드 기여도: 50%',
        '주 역할: 텍스트 에디터 개발 및 배포 관리.',
      ].join('<br>')}
    `,
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][1],
    title: '에디터',
    imageUrl: IMAGE_URL.VELOG_EDIT,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/howons/velog-cloning/blob/main/src/pages/Write/index.tsx',
      },
    ],
    description: [
      'Velog와 동일하게 글 작성이 가능하도록 마크다운 형식의 텍스트 에디터를 구현.',
      '마크다운 텍스트의 parsing을 위해 remark를 사용.',
      '마크다운 프리셋 버튼 구현을 위해 텍스트 커서 위치 및 범위 조작 기능이 필요했고, CodeMirror를 활용.',
      '이미지 업로드 후 비동기 콜백을 이용해 마크다운 이미지 링크에 url 삽입하여 미리보기 기능 구현.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][2],
    title: '포스트',
    imageUrl: IMAGE_URL.VELOG_POST,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/howons/velog-cloning/blob/main/src/pages/PersonalPost/index.tsx',
      },
    ],
    description: [
      '작성한 포스트 내용을 볼 수 있는 포스트 페이지 구현.',
      '마찬가지로 마크다운 텍스트의 parsing을 위해 remark를 사용.',
      '본문에서 heading 요소만 추출해서 TOC 구현.',
      '좋아요 버튼 및 공유 버튼에 CSS 애니메이션 적용.',
      '미디어 쿼리를 이용해 반응형 디자인 구현.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][3],
    title: '배포',
    imageUrl: IMAGE_URL.VELOG_DEPLOY,
    links: [
      {
        name: '깃헙 코드',
        link: 'https://github.com/howons/velog-cloning/blob/main/.github/workflows/main.yml',
      },
    ],
    description: [
      'React 앱 정적 호스팅 관리.',
      'Aws S3 및 Cloudfront 사용.',
      'Github Actions에 workflow를 등록해 main 브랜치로의 PR이 merge될 때 자동배포 등록.',
    ].join('<br>'),
  },
];

export const velog = project('velog', snapshots);
