const {vehicles} = require('./mock-vehicles');

exports.vehicleService = {
    getVehicles: function() {
        return vehicles;
    }
}




