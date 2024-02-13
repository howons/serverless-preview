import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { oneDayHero } from '../../components/oneDayHero/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(oneDayHero));
});

export default router;
