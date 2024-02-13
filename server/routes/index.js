import { Router } from 'express';

import intro from './intro/route';
import profile from './profile/route';
import projectList from './project-list/route';
import portfolio from './portfolio/route';
import oneDayHero from './one-day-hero/route';
import musseuk from './musseuk-letter/route';
import velog from './7elog/route';

const router = Router();

router.use('/intro', intro);
router.use('/profile', profile);
router.use('/project-list', projectList);
router.use('/portfolio', portfolio);
router.use('/one-day-hero', oneDayHero);
router.use('/musseuk-letter', musseuk);
router.use('/7elog', velog);

export default router;
