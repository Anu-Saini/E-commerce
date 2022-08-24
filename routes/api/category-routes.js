const router = require("express").Router();
const { Category, Product } = require("../../models");

// the category root end point
router.get("/",async (req, res) => {
    const data = await Category.findAll();
 res.status(200).json(data);
});

// the category by id endpoint
router.get("/:id", async (req, res) => {
const data = await Category.findByPk(req.params.id);
res.status(200).json(data);
});


router.post("/", async (req, res) => {
  /* req.body should look like this...
  {
    "category_name": "Antiques Pens"
  }   */

  const newCatData = Category.create({
  category_name: req.body.category_name});
        res.status(200).json(newCatData);
    } ); 
  

// updating category by its `id` value
/* { "category_name": "Antiques_Furniture" }  */

router.put("/:id",async (req, res) => {
  const newCatData = Category.update({
    category_name: req.body.category_name,
  },
  { where: {
      id: req.params.id,
    },
   });
  res.status(200).json(newCatData);
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  const catData = await Category.destroy({
 where:{
  id:req.params.id,
 },   
  });
  res.status(200).json(catData);
});

module.exports = router;
