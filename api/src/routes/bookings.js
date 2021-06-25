const router = require('express').Router();
const express = require('express');

const allBookings = require('../controllers/bookings/allBookingsControllers'); // import the controllers
const bookingsById = require('../controllers/bookings/bookingsByIdControllers'); // import the controllers
const putBooking = require('../controllers/bookings/putBookingControllers'); // import the controllers
const bookingsByAmenity = require('../controllers/bookings/bookingsByAmenitysControllers'); // import the controllers
const addBooking = require('../controllers/bookings/createBooking');
const deleteBooking = require('../controllers/bookings/deleteBookingControllers');

router.use(express.json());

router.get('/', allBookings);                                   //      get -> localhost3001/bookings
router.get('/:id', bookingsById);                               //      get -> localhost3001/bookings/:id
router.get('/byAmenity/:idAmenity', bookingsByAmenity);         //      get -> localhost3001/bookings/byAmenity/:idAmenity
router.put('/:id', putBooking);                                 //      get -> localhost3001/bookings/:id
router.post('/', addBooking);                                   //      post -> localhost3001/bookings

module.exports = router;

