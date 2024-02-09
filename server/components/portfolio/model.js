import { IMAGE_URL } from '../../utils/images';
import { project } from '../project/model';

const snapshots = [
  {
    id: 'intro',
    title: '소개',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: '설명',
  },
  {
    id: 'serverless',
    title: '서버리스',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '두번째',
  },
  {
    id: 'webpack',
    title: '웹팩',
    imageUrl: IMAGE_URL.VELOG,
    description: '세번째',
  },
];

export const portfolio = project('portfolio', snapshots);
