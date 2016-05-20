let app = {};

$( ()=>	{
	
	app.inputOne = ()=>{
		
		$( 'oneInput' ).on('click'), ()=>{
			app.one = $( '#one' ).text();
			console.log(app.one);
			
		}
	}
	
	
});









$(document).ready(function() {
	app.inputOne(); 
});