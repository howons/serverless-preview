import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { portfolio } from '../../components/portfolio/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(portfolio));
});

export default router;
