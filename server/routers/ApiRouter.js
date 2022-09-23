const express = require('express');
const router = express.Router();

const {apiSalesOz,
    apiOrderOz,
    apiRefOz,
    apiLogOz,
    apiSalesRefWb,
    apiOrderWb,
    apiRefWb,
    apiLogWb,
    BigDataWb } = require('../controllers/apiOzWb.js');

router.post('/ozsal', apiSalesOz);
router.post('/ozord', apiOrderOz);
router.post('/ozref', apiRefOz);
router.post('/ozlog', apiLogOz);

router.post('/wbsal', apiSalesRefWb);
router.post('/wbord', apiOrderWb);
router.post('/wbref', apiRefWb);
router.post('/wblog', apiLogWb);
router.post('/bgwb', BigDataWb)


module.exports = router;