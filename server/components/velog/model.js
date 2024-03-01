import { IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.VELOG][0],
    title: '소개',
    imageUrl: IMAGE_URL.VELOG_INTRO,
    description: [
      '개발자들을 위한 블로그 서비스인 "Velog"를 클로닝한 프로젝트.',
      '서울대학교 웹개발 동아리, 와플스튜디오의 입부 팀 프로젝트로 백엔드 3명, 프론트엔드 3명으로 진행.',
      'CRA로 생성하고 TypeScript와 Sass 및 CSS Module을 사용',
    ].join('<br>'),
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][1],
    title: '마크다운',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '두번째',
  },
  {
    id: ROUTE_HASHES[ROUTE.VELOG][2],
    title: 'Aws',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const velog = project('velog', snapshots);
