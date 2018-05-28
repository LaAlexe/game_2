document.addEventListener('DOMContentLoaded', function(event) {
var circle = document.querySelectorAll('.item');
var bg = document.getElementById('wrapper');
var hat = document.getElementById('hat');
var points = document.getElementById('points');
var myHeight = 550;
var pos = 0;
    
    for (i=0; i < circle.length; i++) {
        setInterval( function (circleFall){
            if (pos == myHeight) {
    circle[i].style.display="none";
        } else {
            pos++; 
            circle[i].style.top = pos + 'px'; 
            
        }
            
        }, 10, circle[i])
    }
    
    
    
});