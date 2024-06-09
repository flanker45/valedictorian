import express from 'express'
import { testApi } from '../controllers/client';

const router = express.Router();

router.get('/testapi', testApi);

export default router;