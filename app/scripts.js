
// preferences section ===================================

document.getElementById('get-my-location-button').addEventListener('click', function() {
	this.style.display = 'none';
	document.getElementById('address').value = '';
	document.getElementById('address').style.display = 'none';
	document.getElementById('reset-location').style.display = 'block';
});

document.getElementById('reset-location').addEventListener('click', function() {
	this.style.display = 'none';
	document.getElementById('address').style.display = 'block';
	document.getElementById('get-my-location-button').style.display = 'block';
});

document.getElementById('address').addEventListener('blur', function() {
	document.getElementById('location-type').innerHTML = 'Address';
});
function locationTypeChanged() {
	console.log(this);
	console.log('breaksomethign')
}
// document.getElementById('location-type').addEventListener('change', function(e) {
// 	console.log(this);
// 	console.log(e);
// });
