import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { outro } from '../../components/outro/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(outro));
});

export default router;
