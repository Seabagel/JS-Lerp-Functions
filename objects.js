//GetId
var text1 = document.getElementById("paragraph1");
var text2 = document.getElementById("paragraph2");
var text3 = document.getElementById("paragraph3");
var dummy = document.getElementById("dummy");

//styling
text1.style.color = "Blue";
text2.style.color = "Red";
text3.style.color = "Green";
dummy.style.background = "rgb(255,0,0)";
dummy.style.width = "300px";
dummy.style.height = "64px";

//variables
var original = 300;
var target   = 100;
var current = original;

//function
function lerpFast(x,y) {
    if(x <= y) return x = Math.ceil((x + y)/2);
    if(x => y) return x = Math.floor((x + y)/2);
}
function lerpExp (x,y,a) {
    if (x <= y) {
        x *= a;
        if (x < y){
            return Math.round(x);
        } else if (x >= y) {
            x = y;
            return x;
        }
    }
    if (x >= y) {
        x /= a;
        if (x > y){
            return Math.round(x);
        } else if (x <= y) {
            x = y;
            return x;
        }
    }
}
function lerpRio(p1, p2){
    var d = Math.abs(p1-p2);
    if (p1 <= p2) {
        var ratio = (p1/p2)*0.2;
        return Math.ceil(p1+d*ratio);
    }
    if (p1 >= p2) { 
        var ratio = (p1/p2)/20;
        return Math.floor(p1-d*ratio);
    }
}
// function lerpAcc (x,y,v) {
//     return x/=v;
// }
function contain(x,min,max){
    if (x > max){
        x = max;
        return max;
    }
    if (x < min){
        x = min;
        return min;
    }
}
var counter = 0;
function calculate() {
	// current = lerpFast(current, target);
	// current = lerpAcc(current, vel, acc);
    // current += vel += acc
	current = lerpRio(current, target);
	text1.innerHTML = "Original Value: " + original;
	text2.innerHTML = "Target Value: " + target;
	text3.innerHTML = "Current Value: " + current + " " + counter;
    dummy.style.width = current;
    dummy.style.background = "rgb(" + Math.round(current*1) + 
    ",0," + Math.round(current*0.7) + ")";
    
    if (current <= target -1 ) counter++;
}

setInterval(calculate, 1000/50);

/* easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
},
function lerpEase(x,y,z){
    return x += Math.pow(1.05, z);
}
var theThing = document.querySelector("#thing");
var currentPos = 0;
 
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function animate() {
    this.something.style.opacity = opacityValue;
 
    if (opacityValue > 0) {
        opacityValue -= .05;
    } else {
        opacityValue = 1;
    }
 
    // Let's assume magicalLoop will allow the screen to update
    // before continuing
    animate();
}
*/
