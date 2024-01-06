import { Request, Response, Router } from 'express';
import { generateHTML } from '../../components/base';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send(generateHTML('신호원 포트폴리오', ''));
});

export default router;
