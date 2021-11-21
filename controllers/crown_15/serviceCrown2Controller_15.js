const Category_15 = require('../../models/crown_15/Category_15');
const Shop_15 = require('../../models/crown_15/shop_15');

exports.getCategories = async (req, res) => {
  try {
    return await Category_15.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getCategories = async (req, res) => {
  try {
    return await Shop_15.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req , res) => {

}