import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { profile } from '../../components/profile/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(profile));
});

export default router;
