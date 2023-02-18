const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, file) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(file));
    }
  });
};
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    fs.readFile(p, (err, file) => {
      getProductsFromFile((products) => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log("ERR", err);
        });
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
