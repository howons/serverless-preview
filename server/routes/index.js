import { Router } from 'express';

import intro from './intro/route';
import profile from './profile/route';
import projectList from './project-list/route';

const router = Router();

router.use('/intro', intro);
router.use('/profile', profile);
router.use('/project-list', projectList);

export default router;
