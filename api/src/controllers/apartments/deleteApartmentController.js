const {Apartment} = require('../../db.js');

module.exports = async (req, res, next) => {
	//await jane.destroy();

	apartment = await Apartment.destroy({where: req.params});

	return res.json(apartment).status(200);
};