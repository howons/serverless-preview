import { Router } from "express";

import pages from "./pages.route";

const router = Router();

router.use("/pages", pages);

export default router;
