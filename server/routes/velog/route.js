import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { velog } from '../../components/velog/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(velog));
});

export default router;
