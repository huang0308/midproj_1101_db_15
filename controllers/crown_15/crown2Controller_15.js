const serviceCrown2Controller_15 = require('./serviceCrown2Controller_15');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_xx.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_15/crown2_15', {
      data: results,
      title: 'Crown2_15',
      name: 'Tzuchia Huang',
      id: `209410215`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};
