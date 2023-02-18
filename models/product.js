const path = require("path");
const fs = require("fs");
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, file) => {
      let products = [];
      if (!err) {
        products = JSON.parse(file);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("ERR", err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, file) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(file));
      }
    });
  }
};
