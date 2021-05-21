
function add(x,y){
    if(x && y)
        $('#result').text("Result is : "+(x+y))
    else
        alert('please enter both values')
}

function sub(x,y){
    if(x && y)
        $('#result').text("Result is : "+(x-y))
    else
        alert('please enter both values')
    
}

function mul(x,y){
    if(x && y)
        $('#result').text("Result is : "+(x*y))
    else
        alert('please enter both values')
    
}

function div(x,y){
    if(x && y)
        $('#result').text("Result is : "+(x/y))
    else
        alert('please enter both values')
    
}