const { Note, Category, Notescat } = require('../db');

const postNote = async (req, res) => {
    const { title, content, categories, id } = req.body;
    
    if (!title || !content) {
        return res.status(400).send({ error: "Title and content are needed" })
    }
    try {
        const newNote = await Note.create({ title, content, userId: id });
        categories?.map(async (c) => {
            newNote.addCategory(c);
        });
        res.send(newNote);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const getAllNotes = async (req, res) => {
    const { id } = req.params;
    try {
        const notes = await Note.findAll({ where: { userId: id }, include: { model: Category, attributes: ['category'], through: { attributes: [] } } });
        res.send(notes)
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
};
const getNoteById = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Note.findByPk(id, { include: { model: Category, attributes: ['category'], through: { attributes: [] } } });
        if (note) {
            res.send(note);
        } else {
            res.status(404).send({ error: "The request file doesn't exist in the database" });
        }

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};
const updateNote = async (req, res) => {
    const { title, content, categories } = req.body;
    const { id } = req.params;
    try {
        const noteBeUpdated = await Note.findByPk(id);

        if (noteBeUpdated) {
            if (title) noteBeUpdated.update({ title, updateAt : new Date() });
            if (content) noteBeUpdated.update({ content, updateAt : new Date() });
            if (categories) {
                await Notescat.destroy({
                    where: {
                        noteId: id
                    }
                });
                categories.map(async (c) => {
                    noteBeUpdated.addCategory(c);
                });
            };
            const noteUpdated = await Note.findByPk(id, { include: { model: Category, attributes: ['category'], through: { attributes: [] } } });
            res.send(noteUpdated);
        } else {
            res.status(404).send({ error: "The request file doesn't exist in the database" });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

}
const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const noteBeDeleted = await Note.findByPk(id, { include: { model: Category, attributes: ['category'], through: { attributes: [] } } });
        if (noteBeDeleted) {
            await Note.destroy({
                where: {
                    id
                }
            });
            await Notescat.destroy({
                where: {
                    noteId: id
                }
            });
        } else {
            res.status(404).send({ error: "The request file doesn't exist in the database" });
        }

        res.send(noteBeDeleted);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}
module.exports = {
    postNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
}