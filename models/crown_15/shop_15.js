const db = require('../../utils/database');

const Shop_15 = class Shop_15 {
  constructor(id, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  // get all categories
  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from shop_15`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }
};

// const test = async () => {
//   let results = await Category_xx.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = Shop_15;