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
Golygon.prototype.unit =  function(){   
    return this.unit; 
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
        /*
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
        */
        $("#golygon1").css({
            'width': this.unit*3,
            'height': this.unit*2,
            'top':this.y+0,
            'left':this.x+0,
            'background-color':bgcolor
        });
        
        $("#golygon2").css({
            'width': this.unit*2,
            'height': this.unit*2,
            'top':this.y+this.unit*2,
            'left':this.x+this.unit,
            'background-color':bgcolor
        });
        
        $("#golygon3").css({
            'width': this.unit*7,
            'height': this.unit*6,
            'top':this.y+this.unit*4,
            'left':this.x+this.unit,
            'background-color':bgcolor
        });
    }
    
    if(this.transform === 'horizontal'){
        /*
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
        */
        $("#golygon1").css({
            'width': this.unit*2,
            'height': this.unit*3,
            'top':this.y + 0,
            'left':this.x + this.unit*8,
            'background-color':bgcolor
        });
        
        $("#golygon2").css({
            'width': this.unit*2,
            'height': this.unit*2,
            'top':this.y + this.unit,
            'left':this.x + this.unit*6,
            'background-color':bgcolor
        });
        
        $("#golygon3").css({
            'width': this.unit*6,
            'height': this.unit*7,
            'top':this.y + this.unit,
            'left':this.x + 0,
            'background-color':bgcolor
        });
    }
    /*
    this.context.fillStyle = 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256)+ ',' + Math.floor(Math.random()*256) + ')';
    this.context.fill();
    */
}
function getQueryString() {
  var result = {}, queryString = location.search.substring(1),
      re = /([^&=]+)=([^&]*)/g, m;

  while (m = re.exec(queryString)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  return result;
}

function resizeScreen() {    
    var canvas = document.getElementById('canvas_bg');
    var context = canvas.getContext('2d');
    
    $('#main').css({ 'width': $('body').width() });
    
//    canvas.width = $('#main').width();
    
    var template = getQueryString()["template"];
    var g = new Golygon(context, $('#main').width()-50, 0, 25, template, 'center');
    
//    canvas.height = g.height();
    $('#main').height( g.height() + 50);
    
    g.draw();
    
    $("body").css("background-color", "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256)+ "," + Math.floor(Math.random()*256) + ")"); 
}

