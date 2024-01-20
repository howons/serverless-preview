import { Router } from 'express';
import { generateHTML } from '../../components/baseModel';
import { profile } from '../../components/profile/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(generateHTML('프로필', profile));
});

export default router;
