const router = require("express").Router();
const { Category, Product } = require("../../models");


router.get("/",async (req, res) => {
  const data = await Product.findAll({include: [{model: Category}]});
  res.send(data);
});


router.get("/:id", async (req, res) => {
const data = await Product.findByPk(req.params.id, {include: [{model:Category}]});
res.send(data);
});


router.post("/", (req, res) => {
  /* req.body should look like this...
  {
    "category_name": "cosmetics"
  }
  */
  Category.create(req.body)
    .then((Category) => {
      res.status(200).json(Category);
        });
});

// updating category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((Category) => {
    return C;
  });
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  await Category.destroy({
 where:{
  id:req.params.id,
 },   
  });
  res.status(200)
});

module.exports = router;
