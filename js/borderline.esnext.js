let app = {};

$( ()=>	{
	
	app.inputOne = ()=>{
		
		console.log('eyyyy');
		
		app.one = $('#one').text();
		console.log(app.one);
	}
	
	
});









$(document).ready(function() {
	app.inputOne(); 
});