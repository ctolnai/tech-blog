const router = require('express').Router();
const model1Routes = require('./model1-routes');
const model2Routes = require('./model2-routes');


router.use('/model1', model1Routes);
router.use('/model2', model2Routess);


module.exports = router;
