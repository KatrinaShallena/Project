// В папке с будущим проектом, в терменале: 1) npm git, и с помощью push добавляем файлы; 2) npm init . Это создаст проект - файл .json
//url-loader, file-loader, css-loader, HTMLWebpackPlagin, Extract text plugin

var canvas = document.querySelector( "#canv" );
var pen = canvas.getContext( "2d" );

var centerX = canvas.width / 2;
var centerY = canvas.height;
var radius = 30;

function draw( color, y ){
  var Y = centerY / y;
  pen.lineWidth = 2;
  pen.strokeStyle = '#000';
  pen.beginPath();
  pen.arc(centerX, Y, radius, 0, 2 * Math.PI, false);
  pen.fill();
  pen.stroke();
}

function g(z){
  pen.fillStyle = z;
}

var steps = 0;

setInterval(function(){
  draw( steps++ )
  if ( steps % 2 == 0 ){
      var red = draw( g('#FF0000'), 5 );
      var yellow = draw( g('yellow'), 2 );
      var green = draw( g('#00FF00'), 1.25 );
  }
  else {
      var red = draw( g('#800000'), 5 );
      var yellow = draw( g('#DAA520'), 2 );
      var green = draw( g('#008000'), 1.25 );
  }
}, 1000)