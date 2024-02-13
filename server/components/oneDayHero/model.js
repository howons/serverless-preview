import { IMAGE_URL } from '../../utils/images';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import { project } from '../project/model';

const snapshots = [
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][0],
    title: '소개',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: '설명',
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][1],
    title: 'Next.js',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '두번째',
  },
  {
    id: ROUTE_HASHES[ROUTE.ONE_DAY_HERO][2],
    title: '채팅',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const oneDayHero = project('one-day-hero', snapshots);
