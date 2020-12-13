const {Router} = require('express')

const router = Router();

const {vehicleService} = require('../services/vehicle.service');

router.get('/all', async (req, res) => {
        const vehicles = vehicleService.getVehicles();
        res.json(vehicles);
    }
);

router.get('/id/:id', async (req, res) => {
    console.log(req.params.id);
});

module.exports = router;
