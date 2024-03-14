import { Router } from 'express';

import intro from './intro/route';
import introRedirct from './intro/redirect';
import profile from './profile/route';
import projectList from './project-list/route';
import portfolio from './portfolio/route';
import oneDayHero from './one-day-hero/route';
import musseuk from './musseuk-letter/route';
import velog from './velog/route';
import outro from './outro/route';

const router = Router();

router.use('/', introRedirct);
router.use('/intro', intro);
router.use('/profile', profile);
router.use('/project-list', projectList);
router.use('/portfolio', portfolio);
router.use('/one-day-hero', oneDayHero);
router.use('/musseuk-letter', musseuk);
router.use('/velog', velog);
router.use('/outro', outro);

export default router;
