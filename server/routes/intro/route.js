import { Router } from 'express';
import { generateHTML } from '../../components/base';
import { intro } from '../../components/intro';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(generateHTML('신호원 포트폴리오', intro));
});

export default router;
