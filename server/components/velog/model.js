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
        '서울대학교 웹개발 동아리인 와플스튜디오의 입부 팀 프로젝트로, 백엔드 4명과 프론트엔드 3명으로 진행했으며 2022년 12월 11일부터 2023년 2월 5일까지 개발했습니다.',
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
        name: '깃헙 코드: 글 작성 페이지',
        link: 'https://github.com/howons/velog-cloning/blob/main/src/pages/Write/index.tsx',
      },
    ],
    description: [
      'Velog와 동일하게 글 작성이 가능하도록 <b>마크다운 형식의 텍스트 에디터</b>를 구현했습니다.',
      '마크다운 텍스트의 parsing을 위해 <b>remark</b>를 사용했습니다.',
      '에디터 커서 위치에 마크다운 형식을 추가해주는 마크다운 프리셋 버튼 구현을 위해 텍스트 커서 위치 및 범위 조작 기능이 필요했고, <b>CodeMirror</b>를 활용했습니다.',
      '이미지 업로드 후 비동기 콜백을 이용해 마크다운 이미지 링크에 url을 삽입하여 미리보기 기능을 구현했습니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][2],
    title: '포스트',
    imageUrl: IMAGE_URL.VELOG_POST,
    links: [
      {
        name: '깃헙 코드: 포스트 페이지',
        link: 'https://github.com/howons/velog-cloning/blob/main/src/pages/PersonalPost/index.tsx',
      },
    ],
    description: [
      '작성한 포스트 내용을 볼 수 있는 포스트 페이지를 구현했습니다.',
      '에디터와 마찬가지로 마크다운 텍스트의 parsing을 위해 remark를 사용했습니다.',
      '본문에서 heading 요소만 추출한 뒤, URL에 hash를 추가하고 스크롤 이동할 수 있는 <b>TOC</b>를 구현했습니다.',
      '좋아요 버튼 및 공유 버튼에 클릭 피드백 및 겹친 버튼 등장을 위한 스타일 애니메이션을 적용했습니다.',
      '미디어 쿼리를 이용해 페이지의 너비마다 컴포넌트의 표시 여부를 다르게하여 <b>반응형 디자인</b>을 구현했습니다.',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][3],
    title: '배포',
    imageUrl: IMAGE_URL.VELOG_DEPLOY,
    links: [
      {
        name: '깃헙 코드: 워크플로우',
        link: 'https://github.com/howons/velog-cloning/blob/main/.github/workflows/main.yml',
      },
    ],
    description: [
      'React 앱의 정적 호스팅을 관리했습니다.',
      '<b>Aws S3 및 Cloudfront</b> 사용해 배포를 수행했습니다.',
      'Github Actions에 workflow를 등록하여 main 브랜치로의 PR이 merge될 때 <b>자동 배포</b>가 수행되도록 등록했습니다.',
    ].join('<br>'),
  },
];

export const velog = project('velog', snapshots);
