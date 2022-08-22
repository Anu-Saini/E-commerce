// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

Tag.belongsToMany(Product, { through: 'ProductTag'}, {onDelete: 'cascade' }   );

// Tags belongToMany Products (through ProductTag)

// router.use('/readers', readerRoutes);
// router.use('/cards', libraryCardRoutes)

Product.belongsTo(Category);
Category.hasMany(Product,  {foreignKey: 'category_id'});




module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
