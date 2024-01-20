import { Router } from 'express';

import intro from './intro/route';
import profile from './profile/route';

const router = Router();

router.use('/intro', intro);
router.use('/profile', profile);

export default router;
