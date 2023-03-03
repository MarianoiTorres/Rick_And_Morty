const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const getFav = require('../controllers/getFav')
const { Router } = require('express')

const router = Router()

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id', getCharDetail)

router.get('/fav', getFav)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)




module.exports = router