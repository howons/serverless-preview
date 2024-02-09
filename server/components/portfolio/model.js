import { IMAGE_URL } from '../../utils/images';
import { project } from '../project/model';

const snapshots = [
  {
    id: 'intro',
    imageUrl: IMAGE_URL.PORTFOLIO,
    description: '설명',
  },
  {
    id: 'serverless',
    imageUrl: IMAGE_URL.MUSSEUK,
    description: '두번째',
  },
];

export const portfolio = project('portfolio', snapshots);
