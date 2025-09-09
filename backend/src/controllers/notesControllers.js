export const getNotes = (req, res) => {
    res.status(200).send('response 1 from backend');
}

export const createNote = (req, res) => {
    res.status(201).json({ message: 'Post request to backend' });
}

export const updateNote = (req, res) => {
    res.status(200).send(`Update note with ID ${req.params.id}`);
}   

export const deleteNote = (req, res) => {
    res.status(200).send(`Delete note with ID ${req.params.id}`);
}   