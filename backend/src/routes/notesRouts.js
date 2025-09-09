const express = require('express');
const { getNotes, createNote, updateNote , deleteNote} = require('../controllers/notesControllers');
const router = express.Router();

// GET /api/notes
router.get('/', getNotes);

// POST /api/notes
router.post('/', createNote); 
// PUT /api/notes/:id
router.put('/:id',updateNote); 
// DELETE /api/notes/:id
router.delete('/:id',deleteNote); 

module.exports = router;
