import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { intro } from '../../components/intro/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(intro));
});

export default router;
