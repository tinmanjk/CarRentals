/* globals __dirname */

const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');

const applyTo = (app) => {
    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const libsPath = path.join(__dirname, '../../node_modules/');
    app.use('/libs', express.static(libsPath));

    const staticsPath = path.join(__dirname, '../../static');
    app.use('/static', express.static(staticsPath));

    app.use('/css', express.static(path.join(__dirname, '../../static/css/')));
    app.use('/js', express.static(path.join(__dirname, '../../static/js/')));
    app.use('/images', express.static(path.join(__dirname, '../../static/images/')));

    app.use(cookieParser('keyboard cat'));
};

module.exports = { applyTo };
