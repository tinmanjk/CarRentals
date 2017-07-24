const { Router } = require('express');
const passport = require('passport');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/register', (req, res) => {
            return controller.getRegisterForm(req, res);
        })
        .get('/login', (req, res) => {
            return controller.getLogInForm(req, res);
        })
        .get('/profile', (req, res) => {
            return controller.getProfileForm(req, res);
        })
        .get('/addcar', (req, res) => {
            return controller.getAddCarForm(req, res);
        })
        .get('/editcar', (req, res) => {
            return controller.getEditCarForm(req, res);
        })
        .get('/viewbookings', (req, res) => {
            return controller.getViewBookings(req, res);
        })
        .get('/viewcars', (req, res) => {
            return controller.getViewCars(req, res);
        })
        .get('/viewusers', (req, res) => {
            return controller.getViewUsers(req, res);
        })
        .get('/viewdeals', (req, res) => {
            return controller.getViewDeals(req, res);
        })
        .get('/logout', (req, res) => {
            return controller.logOut(req, res);
        })
        .post('/register', (req, res) => {
            return controller.register(req, res);
        })
        .post('/login', passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/auth/login',
            failureFlash: true,
        }));

    app.use('/auth', router);
};

module.exports = { attachTo };
