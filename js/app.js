'use strict';

var app = {};

$(function () {

	app.inputOne = function () {

		$('oneInput').on('click'), function () {
			app.one = $('#one').text();
			console.log(app.one);
		};
	};
});

$(document).ready(function () {
	app.inputOne();
});