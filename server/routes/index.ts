import { Router } from "express";

import home from "./home/route";

const router = Router();

router.use("/home", home);

export default router;
