import Note from "../models/note.js";

export const getNotes = async (_, res) => {
    try{
       const notes = await Note.find().sort({createdAt: -1}); // Sort by creation date descending
       res.status(200).json(notes);
    }   
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

export const createNote = async (req, res) => {
    try{
        const {title, content} = req.body;
        const note = new Note({ title:title, content:content });
        const newSave =  await note.save();
        res.status(201).json(newSave);
    }catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

export const updateNote = async (req, res) => {
    try{
        const {title , content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content});
        if(!updatedNote){
            return res.status(404).json({message: 'Note not found'});
        }
        res.status(200).json({message: 'Note updated successfully' , updatedNote});
    }catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}   

export const deleteNote = async (req, res) => {
    try{
       const deletedNote =  await Note.findByIdAndDelete(req.params.id);
       if(!deletedNote){
        return res.status(404).json({message: 'Note not found'});
         }
         res.status(200).json({message: 'Note deleted successfully' , deletedNote});
    }catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}   

export const getNoteViaId = async (req, res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message: 'Note not found'});
        }
        res.status(200).json(note);
    }catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}