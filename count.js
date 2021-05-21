let a = 0
let b = 0

function init(){
        a = Number($('#firstnumber').val())
        b = Number($('#secondnumber').val())
}

function add(){
    init()
    $('#result').text(a+b)
}

function sub(){
    init()
    $('#result').text(a-b)
}

function mul(){
    init()
    $('#result').text(a*b)
}

function div(){
    init()
    $('#result').text(a%b)
}