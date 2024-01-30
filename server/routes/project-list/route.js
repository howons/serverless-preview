import { Router } from 'express';
import { baseModel } from '../../components/baseModel';
import { projectList } from '../../components/projectList/model';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(baseModel(projectList));
});

export default router;
