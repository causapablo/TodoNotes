const { Category } = require('../db');
const categories = [
    'Deep work',
    'Shallow work',
    'Chores',
    'Learning',
    'Mind care',
    'Body care',
    'People',
    'Next week'
]

const postCategory = () => {

    try {
        categories.map(async (c) => {
            await Category.create({category : c})
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

}

const getCategories = async (req, res) => {
    try {
        const cat = await Category.findAll();
        res.send(cat); 
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

module.exports = {
    postCategory,
    getCategories
}