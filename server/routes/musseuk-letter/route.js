import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { musseuk } from '../../components/musseuk/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(musseuk));
});

export default router;
