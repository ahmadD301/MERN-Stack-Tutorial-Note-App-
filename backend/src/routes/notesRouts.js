import express from 'express';
import { getNotes, createNote, updateNote, deleteNote ,getNoteViaId  } from '../controllers/notesControllers.js';
import { Router } from 'express';
const router = Router();


// GET /api/notes
router.get('/', getNotes);
router.get('/:id', getNoteViaId);
// POST /api/notes
router.post('/', createNote); 
// PUT /api/notes/:id
router.put('/:id',updateNote); 
// DELETE /api/notes/:id
router.delete('/:id',deleteNote); 

// module.exports = router;
export default router;
