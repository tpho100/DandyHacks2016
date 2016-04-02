var x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0;
var gl;

function start(){
  var canvas = document.getElementById("glcanvas");
  gl = initWebGL(canvas);

  if(gl){
    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
}

function initWebGL(canvas){
  gl = null;
    
    try {
       gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }catch(e) {}
    
    if (!gl) {
      alert("Unable to initialize WebGL. Your browser may not support it.");
      gl = null;
    }                          
    return gl;
}


if(window.DeviceMotionEvent != undefined){
  window.ondevicemotion = function(e) {
    ax = event.accelerationIncludingGravity.x;
    ay = event.accelerationIncludingGravity.y;
    az = event.accelerationIncludingGravity.z;

    document.getElementById("accelX").innerHTML = ax;
    document.getElementById("accelY").innerHTML = ay;
    document.getElementById("accelZ").innerHTML = az;
  }
}
