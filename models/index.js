// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
}); 

// Categories have many Products
Category.hasMany(Product,  {foreignKey: "category_id",
});

//Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
 through: {
  model: ProductTag, 
  foreignkey: "product_id",
 },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model : ProductTag, 
    foreignkey: "tag_id",
  },
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};