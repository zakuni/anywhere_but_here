void setup() {  
    size(320, 360);  
    background(102);  
}  

void draw() {  
    stroke(255);  
    if(mousePressed) {  
	line(mouseX, mouseY, pmouseX, pmouseY);  
    }  
}  
