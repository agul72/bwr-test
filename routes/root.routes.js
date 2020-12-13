const {Router} = require('express')

const router = Router()


router.get('/', (req, res) => {
res.send('<h4>BWR-test REST API server</h4>')
});

module.exports = router;
