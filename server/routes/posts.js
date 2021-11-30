import express from 'express';

import { getPosts, craetePost } from '../controllers/posts'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router