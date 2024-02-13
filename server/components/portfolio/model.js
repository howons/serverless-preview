import { IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][0],
    title: '소개',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: '설명',
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][1],
    title: '서버리스',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '두번째',
  },
  {
    id: ROUTE_HASHES[ROUTE.PORTFOLIO][2],
    title: '웹팩',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const portfolio = project('portfolio', snapshots);
