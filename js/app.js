'use strict';

var app = {};

$(function () {

	app.inputOne = function () {
		app.one = $('#one').val();

		//		check if text input is empty, set 'Hello' as default, set input as app.one, reset input after submit
		app.one.replace(/\s+/g, '') === '' ? app.one = 'Hello' : $('.oneHead').text(app.one);;

		$('#one').val(' ');
	};

	//	prevent submit from reloading page
	$('#oneForm').on('submit', function (e) {
		e.preventDefault();
	});
});

$(document).ready(function () {
	$('#oneButton').on('click', app.inputOne);
});