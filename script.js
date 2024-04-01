//complete this code
class Rectangle {
	let _width, _height;
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	get height (){
		return _height;
	}

	get width(){
		return _width;
	}

	set height(height){
		this._height = height;
	}

	set width(width){
		this._width = width;
	}

	getArea(){
		return _height*_width;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
	}

	getPerimeter(){
		return 4* _height;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
