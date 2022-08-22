const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then((tags) => {
    res.send(tags);
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // finding a single tag by its `id`
Tag.findByPk(req.params.id).then ((tags) => {
res.send(tags);
});
  // be sure to include its associated Product data
});
 
// create a new tag
router.post('/', (req, res) => {
/* req.body should look like this...
{
  "tag_name": "Antiques",
}  */
Tag.create(req.body)
.then((Tag) => {
  res.status(201).json(Tag);
})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value

   await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
   
  res.status(200);
});


module.exports = router;
