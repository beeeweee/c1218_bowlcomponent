
class Bowl{
	constructor(color, cubeCount){
		this.baseColor = color;
		this.cubes = 0;
		this.bowlDom = null;
		this.textDom = null;	

		this.clickHandler = this.clickHandler.bind( this );

		this.add(cubeCount);

	}
	add( cubeAdd ){
		this.cubes += cubeAdd;
		this.changeText();
		return this.cubes;
	}
	/* regular */
	getColor(){
		return this.baseColor;
	}
	setColor( newColor ){
		var acceptableColors = ['yellow','red','green','brown'];
		if( acceptableColors.indexOf( newColor ) === -1 ){
			console.error('must be either yellow, or red, or green or brown');
			return false;
		}
		this.baseColor = newColor;
		this.changeColor();
	}

	/* saucy */
	get color(){
		console.log('get color');
		return this.baseColor;
	}
	set color( newColor ){
		var acceptableColors = ['yellow','red','green','brown'];
		if( acceptableColors.indexOf( newColor ) === -1 ){
			console.error('must be either yellow, or red, or green or brown');
			return false;
		}
		this.baseColor = newColor;
		this.changeColor();
	}

	remove( cubeRemove ){
		var amountToRemove = cubeRemove
		if( cubeRemove > this.cubes ){
			amountToRemove = this.cubes;
		}
		this.cubes -= amountToRemove;
		this.changeText();
		return amountToRemove;
	}
	getAmount(){
		return this.cubes;
	}
	changeText(){
		if(this.textDom!==null){
			this.textDom.text( this.cubes );
		}
	}
	clickHandler(){
		console.log('click', this);
		this.remove( 1 );
	}
	changeColor(){
		this.bowlDom.css('background-color', this.baseColor )
	}
	render(){
		this.bowlDom = $("<div>")
			.addClass('bowl')
			.css('background-color', this.baseColor )
			.click( this.clickHandler )

		this.textDom = $("<div>")
			.addClass('bowlText')
			.text( this.cubes );
		this.bowlDom.append( this.textDom );

		return this.bowlDom;
	}
}

























