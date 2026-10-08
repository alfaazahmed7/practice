import express from 'express'
import { getMobiles } from '../controllers/mobile.controller.js';

const router = express.Router();

router.get('/mobiles', getMobiles)

export default router;