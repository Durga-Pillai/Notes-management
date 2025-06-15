import express from 'express';
import {createNote,getAllnotes,getNoteById,updateNote,deleteNote} from '../controllers/noteControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createNote);
router.get('/',getAllnotes);
router.get('/:id',getNoteById);
router.put('/:id',updateNote);
router.delete('/:id',deleteNote);


export default router;
