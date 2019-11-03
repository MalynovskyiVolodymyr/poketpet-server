
const homeController = require('../controllers/home'),
      userController = require('../controllers/users'),
      familyController = require('../controllers/families'),
      petController = require('../controllers/pets');

function initRoutrer(app){

    app.route('/users').post(userController.userCreate)
        .put(userController.userUpdate)
        .get(userController.userGetById)
        .delete(userController.userDelete);

    app.route('/users/device')
        .get(userController.userGetByDeviceId);

    app.route('/families').post(familyController.familyCreate)
        .put(familyController.familyUpdate)
        .get(familyController.familyGetById)
        .delete(familyController.familyDelete);

    app.route('/pets').post(petController.petCreate)
        .put(petController.petUpdate)
        .get(petController.petGetById)
        .delete(petController.petDelete);

    app.route('/').get(homeController.default);
    app.route('*').get(homeController.redirectTo);

}

exports.initRoutrer = initRoutrer;