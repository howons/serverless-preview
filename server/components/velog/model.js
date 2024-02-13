import { IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.VELOG][0],
    title: '소개',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: '설명',
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
