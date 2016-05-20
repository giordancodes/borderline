'use strict';

var app = {};

$(function () {

	app.inputOne = function () {
		app.one = $('#one').val();
		//		check if text input is empty, set 'Hello' as default, reset input after submit
		app.one.replace(/\s+/g, '') === '' ? app.one = 'Hello' : console.log(app.one);

		$('#one').val(' ');

		$('.headings h1').text(app.one);
	};

	//	prevent submit from reloading page
	$('#oneForm').on('submit', function (e) {
		e.preventDefault();
	});
});

$(document).ready(function () {
	$('#oneButton').on('click', app.inputOne);
});