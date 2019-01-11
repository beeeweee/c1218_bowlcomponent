

$(document).ready( initApp );

var container = null;

function initApp(){
	container = new Bowl('yellow', 10);
	var bowlDom = container.render();
	$("body").append(bowlDom);
}

function unitTestBowl(){
	if( container.getAmount() !== 10){
		console.error('getAmount failed');
	}
	if( container.remove(2) !== 2){
		console.error('remove failed with doable amount');
	}
	if( container.getAmount() !== 8){
		console.error('remove failed to update amount properly');
	}
	if( container.remove(20) !== 8){
		console.error('remove failed to return 8 when removing too much');
	}
	if( container.getAmount() !== 0){
		console.error('remove failed to update amount properly');
	}
	if( container.add(4) !== 4){
		console.error('add failed, should have returned 4')
	}
	if( container.getAmount() !== 4){
		console.error('add failed to update amount properly');
	}
}