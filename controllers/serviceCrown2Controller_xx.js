const Category_xx = require('../models/Category_xx');

exports.getCategories = async (req, res) => {
    try {
        return await Category_xx.fetchAll();
    } catch (err){
        console.log('getCategories', err);
    }
}