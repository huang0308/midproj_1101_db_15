const serviceCrown2Controller_15 = require('./crown_15/serviceCrown2Controller_15');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_15.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req,res) => {
  try{
    const data = await serviceCrown2Controller_15.getShop();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
}