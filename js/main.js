var canvas = document.getElementById('canvas_bg');
var context = canvas.getContext('2d');
var template = getQueryString()["template"];
var g;
var logoLetraActiva = 0;

function Golygon(_context, _unit, _x, _y, _transform, _align){
    
    this.transform = _transform;
    
    if (this.transform === 'vertical'){
        this.unit = _unit / 8 ;
    }else if (this.transform === 'horizontal'){
        this.unit = _unit / 10 ;
    }
    
    this.x = _x;
    this.y = _y;
    this.context = _context;
    
    this.alignMode = _align;

}

Golygon.prototype.width =  function(){   
    var ret;
    if ( this.transform === 'vertical' ) {
        ret = this.unit*8;
    }else if (this.transform === 'horizontal'){
        ret= this.unit*10;
    }
    
    return ret; 
}    
Golygon.prototype.height =  function(){   
    var ret;
    if ( this.transform === 'vertical' ) {
        ret = this.unit*10;
    }else if (this.transform === 'horizontal'){
        ret = this.unit*8;
    }
    return ret; 
}    
Golygon.prototype.getUnit =  function(){   
    return this.unit; 
}    
Golygon.prototype.posX =  function(){   
    return this.x; 
}  
Golygon.prototype.posY =  function(){   
    return this.y; 
}  

Golygon.prototype.draw = function(){
    var offsetX = ( $('body').width() - this.width() )/2;
    var offsetY = 0;
    if (this.alignMode === 'center'){
        this.x += offsetX;
        this.y += offsetY;
    }
    
    var bgcolor = 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256)+ ',' + Math.floor(Math.random()*256) + ')';
        
    if (this.transform === 'vertical'){
        this.context.beginPath();
        this.context.moveTo(this.x + this.unit,                 this.y + this.unit*2);
        this.context.lineTo(this.x + 0,                         this.y + this.unit*2);                    
        this.context.lineTo(this.x + 0,                         this.y + 0);                
        this.context.lineTo(this.x + this.unit*3,               this.y + 0);                    
        this.context.lineTo(this.x + this.unit*3,               this.y + this.unit*4);                    
        this.context.lineTo(this.x + this.unit*8,               this.y + this.unit*4);                    
        this.context.lineTo(this.x + this.unit*8,               this.y + this.unit*10);                     
        this.context.lineTo(this.x + this.unit,                 this.y + this.unit*10);                     
        this.context.lineTo(this.x + this.unit,                 this.y + this.unit*2);
        this.context.closePath();
        
        $("#golygon1").css({
            'width': this.unit*3,
            'height': this.unit*2,
            'top':this.y+0,
            'left':this.x+0/*,
            'background-color':bgcolor*/
        });
        
        $("#golygon2").css({
            'width': this.unit*2,
            'height': this.unit*2,
            'top':this.y+this.unit*2,
            'left':this.x+this.unit/*,
            'background-color':bgcolor*/
        });
        
        $("#golygon3").css({
            'width': this.unit*7,
            'height': this.unit*6,
            'top':this.y+this.unit*4,
            'left':this.x+this.unit/*,
            'background-color':bgcolor*/
        });
    }
    
    if(this.transform === 'horizontal'){
        this.context.beginPath();
        this.context.moveTo(this.x + this.unit * 8,                                 this.y + this.unit);
        this.context.lineTo(this.x + this.unit * 8,                                 this.y + 0);
        this.context.lineTo(this.x + this.unit * 10,                                this.y + 0);                    
        this.context.lineTo(this.x + this.unit * 10,                                this.y + this.unit * 3);                
        this.context.lineTo(this.x + this.unit * 6,                                 this.y + this.unit * 3);                    
        this.context.lineTo(this.x + this.unit * 6,                                 this.y + this.unit * 8);                    
        this.context.lineTo(this.x + 0,                                             this.y + this.unit * 8);                    
        this.context.lineTo(this.x + 0,                                             this.y + this.unit);                     
        this.context.lineTo(this.x + this.unit * 8,                                 this.y + this.unit);    
        this.context.closePath();   

        $("#golygon1").css({
            'width': this.unit*2,
            'height': this.unit*3,
            'top':this.y + 0,
            'left':this.x + this.unit*8/*,
            'background-color':bgcolor*/
        });
        
        $("#golygon2").css({
            'width': this.unit*2,
            'height': this.unit*2,
            'top':this.y + this.unit,
            'left':this.x + this.unit*6/*,
            'background-color':bgcolor*/
        });
        
        $("#golygon3").css({
            'width': this.unit*6,
            'height': this.unit*7,
            'top':this.y + this.unit,
            'left':this.x + 0/*,
            'background-color':bgcolor*/
        });
    }
            
    this.context.fillStyle = bgcolor;
    this.context.fill();
        
}
function getQueryString() {
  var result = {}, queryString = location.search.substring(1),
      re = /([^&=]+)=([^&]*)/g, m;

  while (m = re.exec(queryString)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  return result;
}

function logo_animacion(){
    if ( logoLetraActiva > $('#logo_svg polyline').length-1 ) logoLetraActiva = 0;
    document.getElementById('logo_svg').setAttribute('viewBox',40*logoLetraActiva + ' 0 40 40');
    
    var fillColor = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256)+ "," + Math.floor(Math.random()*256) + ")";
    $('#logo_svg').css("fill",fillColor );
    
    var strokeColor = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256)+ "," + Math.floor(Math.random()*256) + ")";
    
    $('#logo_svg').css("stroke",strokeColor);
    logoLetraActiva++;  
    
    if ( getQueryString()["randomBG"] === '1')  resizeScreen();
    window.setTimeout(logo_animacion,250);
}

function resizeScreen() {    
    $('#main').css({ 'width': $('body').width() });
    
    canvas.width = $('#main').width();
    
    g = new Golygon(context, $('#main').width()/2, 20, 20, template, 'left');
    
    canvas.height = g.height() + 100;
    $('#main').height( g.height() + 100 );
    
    g.draw();
    
    $("body").css("background-color", "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256)+ "," + Math.floor(Math.random()*256) + ")"); 
}

