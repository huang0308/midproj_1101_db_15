const serviceCrown2Controller_xx = require('./serviceCrown2Controller_xx');

exports.getCategories = async (req, res) => {
    try{
       let results = await serviceCrown2Controller_xx.getCategories();
       console.log('results', JSON.stringify(results));
       res.render('crown2_xx', {
           data: results,
           title: 'Crown2_xx', 
           name: 'Hsingtai Chung', 
           id: `123456789` 
        });
    }catch(err){
        console.log('crow2Controller getCategories', err);
    }
}