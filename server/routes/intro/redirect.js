import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/intro');
});

export default router;
