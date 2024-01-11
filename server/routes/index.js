import { Router } from 'express';

import intro from './intro/route';

const router = Router();

router.use('/intro', intro);

export default router;
