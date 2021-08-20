const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const salonController = require("../controllers/salon");
const locationController = require("../controllers/location");
const ordersController = require("../controllers/Orders");
router.post('/login',usersController.logIn)
router.post('/signUp',usersController.signUp)
router.get('/getAllSalons',salonController.getAllSalon);
router.get('/getAllSalonByGender/:gender',salonController.getAllSalonByGender);
// router.get('/getAllSalonByMainService/:mainservice',salonController.getAllSalonByMainService);
router.get('/getAllSalonByCityId/:cityId',salonController.getAllSalonByCity);
router.get('/getAllSalonById/:id',salonController.getAllSalonById);
router.get('/getAllSalonByLocationId/:locationId',salonController.getSalonByLocationId)
router.get('/getAllLocations',locationController.getAllLocations);
router.get('/getAllSalonByMainService/:mainService',salonController.getAllSalonByMainService);
router.post('/filterSalons',salonController.filterSalons);
router.get('/getAllCity',locationController.getAllCityes);
router.get('/serviceFilter/:service',salonController.serviseFilter);
router.get('/serviceList/:service/:id',salonController.serviceListFatch);
router.post('/placeOrder',ordersController.saveOrder);
router.get('/getOrders/:userId',ordersController.getOrder);
router.post('/filterSalonsByGender&location',salonController.filterSalonsByGender);

module.exports = router;
