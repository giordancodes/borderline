'use strict';

var app = {};

$(function () {

	app.inputOne = function () {

		console.log('eyyyy');

		app.one = $('#one').text();
		console.log(app.one);
	};
});

$(document).ready(function () {
	app.inputOne();
});