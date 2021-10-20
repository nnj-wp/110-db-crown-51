const serviceCrown2Controller_51 = require('./serviceCrown2Controller_51');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_51.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown2_51', {
      data: results,
      title: 'Crown2_51',
      name: '邵恩傑',
      id: '209410751',
    });
  } catch (err) {
    console.log('crow2Controller getCategories');
  }
};
