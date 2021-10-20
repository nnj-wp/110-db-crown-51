const Category_51 = require('../models/Category_51');

exports.getCategories = async (req, res) => {
    try {
        return await Category_51.fetchAll();
    } catch (err){
        console.log('getCategories', err);
    }
}