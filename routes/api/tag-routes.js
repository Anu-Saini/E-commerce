const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint for all tags
router.get("/", async (req, res) => {
  const data = await Tag.findAll({
    include: [{ model: Product }],
  });
  res.status(200).json(data);
});

router.get("/:id", async (req, res) => {
  // finding a single tag by its `id`
  const data = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  res.status(200).json(data);
});

// create a new tag
router.post("/", async (req, res) => {
  /* req.body should look like this...
{ "tag_name": "Antiques", }  */
  const newTagData = await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.status(200).json(newTagData);
});

router.put("/:id", async (req, res) => {
  /* req.body should look like this...
{ "tag_name": "Antiques", }  */
  const newTagData = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).json(newTagData);
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  const TagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(TagData);
});

module.exports = router;
