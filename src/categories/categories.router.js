const router = require('express').Router()

const categoryServices = require('./categories.services')

router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory)

router.get('/:id', categoryServices.getCategoriesById)

module.exports = router