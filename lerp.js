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
var target   = 30;
var current = original;

//function
var lerp = {
    fast : function(x,y) {
        if(x <= y) return x = Math.ceil((x + y)/2);
        if(x => y) return x = Math.floor((x + y)/2);
    },
    exp: function (x,y,a) {
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
    // },
    // rio: function (p1, p2) {     
    //     if (p1 <= p2) {
    //         var d = Math.abs(p1-p2);
    //         var ratio = (p1/p2)*0.2;
    //         return Math.ceil(p1+d*ratio);
    //     }
    //     if (p1 >= p2) {
    //         var d = Math.abs(p1-p2);
    //         var ratio = (p1/p2)/20;
    //         return Math.floor(p1-d*ratio);
    //     }
    // }
}
var rio = function (p1, p2) {     
    if (p1 <= p2) {
        var d = Math.abs(p1-p2);
        var ratio = (p1/p2)*0.2;
        return Math.ceil(p1+d*ratio);
    }
    if (p1 >= p2) {
        var d = Math.abs(p2-p1);
        var ratio = (p1/p2)/20;
        return Math.floor(p1-d*ratio);
    }
}
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
function calculate() {
	// current = lerp.fast(current, target);
	// current = lerp.exp(current, target, 1.15);
	current = rio(current, target);
	text1.innerHTML = "Original Value: " + original;
	text2.innerHTML = "Target Value: " + target;
	text3.innerHTML = "Current Value: " + current + " " + counter;
    dummy.style.width = current;
    dummy.style.background = "rgb(" + Math.round(current*1) + 
    ",0," + Math.round(current*0.7) + ")";
}

setInterval(calculate, 1000/60);