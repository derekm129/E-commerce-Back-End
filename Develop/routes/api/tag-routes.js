const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      inclue: [{model: Product}, {model: ProductTag}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

// CREATE a new tag
router.post('/', (req, res) => {
  // create a new tag
});

// UPDATE a tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// DELETE a tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
