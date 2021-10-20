const db = require('../utils/database');

const Category_xx = class Category_xx {
  constructor(id, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }

  // get all categories
  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from category_xx`);
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
module.exports = Category_xx;
