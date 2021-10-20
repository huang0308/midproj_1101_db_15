const serviceCrown2Controller_xx = require('./serviceCrown2Controller_xx');

exports.getCategories = async (req, res) => {
    try{
       const data = await serviceCrown2Controller_xx.getCategories();
       return res.json(data);
      
    }catch(err){
        console.log('crow2Controller getCategories', err);
    }
}