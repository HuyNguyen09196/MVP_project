$body=$('body');
var $main=$("<div id='main' ></div>");
var $maincar=$("<div id='maincar' ></div>");
var $card=$("<div class='result'></div>")
var $cardcar=$("<div class='resultcar'></div>")
$body.append($main);
$body.append($maincar)
var $result=$("#main");
var $resultcar=$("#maincar");

fetch(`http://localhost:4321/`,)
.then(res => res.json())
.then(data => {
    for (var i=0;i<data.length;i++){
       brand(data[i]);
    }
console.log(data)
function brand(data){
    var $div=$("<div class='card' style='width: 18rem;'></div>");
    var $img=$("<img class='card-img-top' height='280px'></img>");
    $img.attr("src",data.img);
    var $h=$("<h4 id='text' class='card-title'></h4>");
    var $p=$("<p id='text' class='card-text'></p>");
    var $a=$("<a id='abc' class='btn btn-primary'>More...</a>");
    $h.text(data.name);
    $p.text(data.country);
    var $div2=$("<div id='bd' class='card-body'></div>");
    $result.append($div);
    $div.append($img);
    $div.append($div2);
    $div2.append($h);
    $div2.append($p);
    $div2.append($a);

    $a.on('click',function(){
        $main.hide();
    //    $('#carouselExampleIndicators').hide()
            fetch(`http://localhost:4321/brand/${data.id}`,)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        for (var j=0;j<data.length;j++){
            car(data[j]);
         }
         function car(data){
            var $div=$("<div class='card' style='width: 20rem;'></div>");
            var $img=$("<img class='card-img-top' height='280px'></img>");
            $img.attr("src",data.img);
            var $h=$("<h4 id='text' class='card-title'></h4>");
            var $p=$("<p id='text' class='card-text'></p>");
            var $p1=$("<p id='text' class='card-text'></p>");
            var $p2=$("<p id='text' class='card-text'></p>");
            var $p3=$("<p id='text' class='card-text'></p>");
            var $p4=$("<p id='text' class='card-text'></p>");
            var $a=$("<a id='bt' class='btn btn-primary'>Buy now!</a>");
            $h.text(data.name);
            $p.text('Price: ' + data.price);
            $p1.text('Model: '+ data.model);
            $p2.text('Type: ' + data.type);
            $p3.text('Year: ' + data.year);
            $p4.text('Color: ' + data.color);
            var $div2=$("<div id='bd' class='card-body'></div>");
            $resultcar.append($div);
            $div.append($img);
            $div.append($div2);
            $div2.append($h);
            $div2.append($p);
            $div2.append($p1);
            $div2.append($p2);
            $div2.append($p3);
            $div2.append($p4);
            $div2.append($a);
            
         }
        })
        })
    
  }
});

$('#search').on('click',function(e){
    e.preventDefault();
    $main.hide()
    clear();
fetch(`http://localhost:4321/brand/cars/${$('#input').val()}`)
.then(res => res.json())
.then(data=> {
    console.log(data)
    
    for (var j=0;j<data.length;j++){
        car(data[j]);
     }
     function car(data){
        var $div=$("<div class='card' style='width: 25rem;'></div>");
        var $img=$("<img class='card-img-top' height='280px'></img>");
        $img.attr("src",data.img);
        var $h=$("<h4 id='text' class='card-title'></h4>");
        var $p=$("<p id='text' class='card-text'></p>");
        var $p1=$("<p id='text' class='card-text'></p>");
        var $p2=$("<p id='text' class='card-text'></p>");
        var $p3=$("<p id='text' class='card-text'></p>");
        var $p4=$("<p id='text' class='card-text'></p>");
        var $a=$("<a id='bt' class='btn btn-primary'>Buy now!</a>");
        $h.text(data.name);
        $p.text('Price: ' + data.price);
        $p1.text('Model: '+ data.model);
        $p2.text('Type: ' + data.type);
        $p3.text('Year: ' + data.year);
        $p4.text('Color: ' + data.color);
        var $div2=$("<div id='bd' class='card-body'></div>");
        $resultcar.append($div);
        $div.append($img);
        $div.append($div2);
        $div2.append($h);
        $div2.append($p);
        $div2.append($p1);
        $div2.append($p2);
        $div2.append($p3);
        $div2.append($p4);
        $div2.append($a);
        $('#bt').on('click',function(){
            fetch(`http://localhost:4321/contact`)
            .then(res => res.json())
            .then(data=> {
            $('.contact').empty();
            let $div=$("<div class='contact' ></div>");
            let $h=("<h1 id='text' class='title'>CONTACT:</h1>");
            let $h1=("<h4 id='text' class='title'>Phone number : 888-888-8888</h4>");
            let $h2=("<h4 id='text' class='title'>email : abcdefy@Gmail.com</h4>");
            let $h3=("<h4 id='text' class='title'>Address: 1111 Seattle,WA, 66666</h4>");
            $body.append($div);
            $div.append($h,$h1,$h2,$h3);
        })
    })
     }
    })

})

$('#explore').on('click',function(e){
    e.preventDefault();
    $main.hide()
    clear();
fetch(`http://localhost:4321/cars`)
.then(res => res.json())
.then(data=> {
    console.log(data)
    
    for (var j=0;j<data.length;j++){
        car(data[j]);
     }
     function car(data){
        var $div=$("<div class='card' style='width: 25rem;'></div>");
        var $img=$("<img class='card-img-top' height='280px'></img>");
        $img.attr("src",data.img);
        var $h=$("<h4 id='text' class='card-title'></h4>");
        var $p=$("<p id='text' class='card-text'></p>");
        var $p1=$("<p id='text' class='card-text'></p>");
        var $p2=$("<p id='text' class='card-text'></p>");
        var $p3=$("<p id='text' class='card-text'></p>");
        var $p4=$("<p id='text' class='card-text'></p>");
        var $a=$("<a id='bt' class='btn btn-primary'>Buy now!</a>");
        $h.text(data.name);
        $p.text('Price: ' + data.price);
        $p1.text('Model: '+ data.model);
        $p2.text('Type: ' + data.type);
        $p3.text('Year: ' + data.year);
        $p4.text('Color: ' + data.color);
        var $div2=$("<div id='bd' class='card-body'></div>");
        $resultcar.append($div);
        $div.append($img);
        $div.append($div2);
        $div2.append($h);
        $div2.append($p);
        $div2.append($p1);
        $div2.append($p2);
        $div2.append($p3);
        $div2.append($p4);
        $div2.append($a); 
        
     }
     
     
    })

})
function clear(){
    $maincar.empty();
}
$('#build').on('click',function(e){
    $('#carouselExampleSlidesOnly').hide();
    e.preventDefault();
    $main.hide()
    clear();
    $div=$("<div id='order' class='card' style='width: 25rem;'></div>")
    $input=$('<input class="form-control" type="text" placeholder="Brand" aria-label="default input example">')
    $input1=$('<input class="form-control" type="text" placeholder="Model" aria-label="default input example">')
    $input2=$('<input class="form-control" type="text" placeholder="Type" aria-label="default input example">')
    $input3=$('<input class="form-control" type="text" placeholder="Color" aria-label="default input example">')
    $input4=$('<input class="form-control" type="text" placeholder="Year" aria-label="default input example">')
    var $a=$("<a id='submit' class='btn btn-primary'>Submit</a>");
    $body.append($div)
    $div.append($input,$input1,$input2,$input3,$input4,$a)
    $('#submit').on('click',function(){
    fetch("http://localhost:4321/build", {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
        brand: $input.val(),
        model: $input1.val(),
        type : $input2.val(),
        color: $input3.val(),
        year : $input4.val()
    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(res => res.json())
 
// Displaying results to console
.then(data => {
    $('#order').hide();
    var $div=$("<div class='ty' ></div>")
    $body.append($div)
    var $img=$("<img class='card-img-top' height='1100px'></img>");
    $img.attr('src','https://s3.amazonaws.com/cdn.collisionservices.com/images/prods/popup/1202136C1047.jpg')
    $div.append($img)

    
    

});
})
  
  
})
$('#coming').on('click',function(e){
    e.preventDefault
    $main.hide()
    clear();
    $('.contact').empty();
    $('#order').hide()
    $('.ty').hide()
    fetch(`http://localhost:4321/coming`)
.then(res => res.json())
.then(data=> {
    console.log(data)
    
    for (var j=0;j<data.length;j++){
        car(data[j]);
     }
     function car(data){
        var $div=$("<div class='card' style='width: 25rem;'></div>");
        var $img=$("<img class='card-img-top' height='280px'></img>");
        $img.attr("src",data.img);
        var $h=$("<h4 id='text' class='card-title'></h4>");
        var $p1=$("<p id='text' class='card-text'></p>");
        var $p2=$("<p id='text' class='card-text'></p>");
        var $p3=$("<p id='text' class='card-text'></p>");
        var $p4=$("<p id='text' class='card-text'></p>");
        var $a=$("<a id='111' class='btn btn-primary'>Contact For Price!</a>");
        $h.text(data.name);
        $p1.text('Model: '+ data.model);
        $p2.text('Type: ' + data.type);
        $p3.text('Year: ' + data.year);
        $p4.text('Color: ' + data.color);
        var $div2=$("<div id='bd' class='card-body'></div>");
        $resultcar.append($div);
        $div.append($img);
        $div.append($div2);
        $div2.append($h);
        $div2.append($p1);
        $div2.append($p2);
        $div2.append($p3);
        $div2.append($p4);
        $div2.append($a);
        $('#111').on('click',function(){
            let $div=$("<div class='contact' ></div>");
            let $h=("<h1 id='text' class='title'>CONTACT:</h1>");
            let $h1=("<h4 id='text' class='title'>Phone number : 888-888-8888</h4>");
            let $h2=("<h4 id='text' class='title'>email : abcdefy@Gmail.com</h4>");
            let $h3=("<h4 id='text' class='title'>Address: 1111 Seattle,WA, 66666</h4>");
            $body.append($div);
            $div.append($h,$h1,$h2,$h3);
        })
        
     }
     
     
    })

})
$('#contact').on('click',function(e){
    e.preventDefault();
    $main.hide()
    clear();
    $('.contact').empty();
    let $div=$("<div class='contact' ></div>");
    let $h=("<h1 id='text' class='title'>CONTACT:</h1>");
    let $h1=("<h4 id='text' class='title'>Phone number : 888-888-8888</h4>");
    let $h2=("<h4 id='text' class='title'>email : abcdefy@Gmail.com</h4>");
    let $h3=("<h4 id='text' class='title'>Address: 1111 Seattle,WA, 66666</h4>");
    $body.append($div);
    $div.append($h,$h1,$h2,$h3);

})
