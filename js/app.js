'use strict';

var app = {};

$(function () {

	app.inputOne = function () {
		app.one = $('#one').val();
		//		check if text input is empty, reset after click
		app.one.replace(/\s+/g, '') === '' ? app.one = 'Hello' : console.log(app.one);
		$('#one').val(' ');
		console.log(app.one);
	};
});

$(document).ready(function () {
	$('#oneButton').on('click', app.inputOne);
});