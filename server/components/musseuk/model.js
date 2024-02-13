import { IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][0],
    title: '소개',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: '설명',
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][1],
    title: '피그마',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '두번째',
  },
  {
    id: ROUTE_HASHES[ROUTE.MUSSEUK][2],
    title: '차크라',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const musseuk = project('musseuk', snapshots);
