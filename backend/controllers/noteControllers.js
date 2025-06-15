import Note from '../models/notes.js'

export const createNote = async(req,res) =>{
    try{
        const {title,content} = req.body;
        const user_id= req.user._id;
        const newNote= new Note({title,content,user_id})
        await newNote.save();
        res.status(201).json(newNote);
    }catch(err) {
        res.status(500).json({error:'Failed to create the note'});
    }
}
export const getAllnotes = async(req,res) =>{
    try{
        const note = await Note.findOne({
            _id:req.parms._id,
            user_id:req.user.id
        })
        if(!note) return res.status(404).json({error:'Note not found'})
        res.json(note);
    }catch(err) {
        res.status(500).json({error:'Failed to fetch notes'})
    }
}
export const getNoteById = async (req, res) => {
    try {
      const note = await Note.findOne({ _id: req.params.id, user_id: req.user._id });
  
      if (!note) return res.status(404).json({ error: 'Note not found' });
      res.json(note);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch note' });
    }
  };

export const updateNote = async (req, res) => {
    try {
      const { title, content } = req.body;
  
      const updatedNote = await Note.findOneAndUpdate(
        { _id: req.params.id, user_id: req.user._id },
        { title, content, updated_at: Date.now() },
        { new: true }
      );
  
      if (!updatedNote) return res.status(404).json({ error: 'Note not found' });
      res.json(updatedNote);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update note' });
    }
  };

  export const deleteNote = async (req, res) => {
    try {
      const deletedNote = await Note.findOneAndDelete({ _id: req.params.id, user_id: req.user._id });
  
      if (!deletedNote) return res.status(404).json({ error: 'Note not found' });
      res.json({ message: 'Note deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete note' });
    }
  };
  