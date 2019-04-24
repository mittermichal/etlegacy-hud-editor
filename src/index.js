//this would be parsed from textarea
// so 1. implement string to huddef
// 2. implement hud obj to string

const SCREEN_WIDTH = 640;
const SCREEN_HEIGHT = 480;
const STYLE_NORMAL = 0;
const SKILLS_X = 112;
const SKILL_BAR_X_INDENT = 0;
const SKILL_BAR_OFFSET = (2 * SKILL_BAR_X_INDENT);
const SKILL_ICON_X = (SKILL_BAR_OFFSET + SKILLS_X);
const qtrue = 1;

/*
float Ccg_WideX(float x)
{
	return (Ccg_Is43Screen()) ? x : x *cgs.adr43; // * (aspectratio / (4/3))
}
*/

function Ccg_Is43Screen() {return true;} //TODO
var cgs = { adr43: 0 }; //TODO

function Ccg_WideX(x) {
	return (Ccg_Is43Screen()) ? x : x *cgs.adr43; // * (aspectratio / (4/3))
}

function CG_getComponent(...argv) {return argv;}



// ^\s+hud\d?(->|.)(\w+)\s+=\s(.*)$
var hud0 = {
	// the Default hud
	hudnumber: 0,
	compas:	CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 100 - 20 - 16), 16, 100 + 32, 100 + 32, qtrue, STYLE_NORMAL),
	staminabar:	CG_getComponent(4, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
	breathbar:	CG_getComponent(4, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
	healthbar:	CG_getComponent(24, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
	weaponchargebar:	CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 16, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
	healthtext:	CG_getComponent(SKILLS_X - 28, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
	xptext:	CG_getComponent(SKILLS_X + 28, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
	statsdisplay:	CG_getComponent(SKILL_ICON_X, 0, 0, 0, qtrue, STYLE_NORMAL),
	weaponicon:	CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 82), (SCREEN_HEIGHT - 56), 60, 32, qtrue, STYLE_NORMAL),
	weaponammo:	CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
	fireteam:	CG_getComponent(10, 10, 100, 100, qtrue, STYLE_NORMAL),
	popupmessages:	CG_getComponent(4, 360, 72, 72, qtrue, STYLE_NORMAL),
	powerups:	CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
	hudhead:	CG_getComponent(44, SCREEN_HEIGHT - 92, 62, 80, qtrue, STYLE_NORMAL),
	cursorhint:	CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL), // FIXME: widescreen ?
	weaponstability:	CG_getComponent(50, 208, 10, 64, qtrue, STYLE_NORMAL),
	livesleft:	CG_getComponent(0, 0, 0, 0, qtrue, STYLE_NORMAL),
	reinforcment:	CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
	roundtimer:	CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
	spawntimer:	CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL),
	localtime:	CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL)
};

var hudDef = {
    	hud: [
	    	hud0,
	    	//TODO hud1,hud2
    	]
    };

var selectedHudIndex = 0; 

new Vue({
  el: '#app',
  data: {
    hudDef: hudDef, //import
    hudExport: hudDef.hud[selectedHudIndex]
  }
})


// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

canvas.on('mouse:over', function(e) {
    e.target.set('fill', 'red');
    canvas.renderAll();
  });

// backgound image: https://stackoverflow.com/questions/47010467/fit-the-background-image-to-canvas-size-with-fabric-js/47074188
// fullscreen https://stackoverflow.com/questions/19937397/show-canvas-in-fullscreen-in-fabric-js

function drawHud(hud) {
	for (var element in hud) {
		console.log(element,hud.hasOwnProperty(element),element!='hudnumber',hud[element]);
	    if (hud.hasOwnProperty(element) && element!='hudnumber' && hud[element][2]>0) {
		    // create a rectangle object
			var rect = new fabric.Rect({
			  left: 0,
			  top: 0,
			  width: hud[element][2],
			  height: hud[element][3],
			  stroke: 'black',
			  fill: 'rgba(0,0,0,0)',
			  hasRotatingPoint: false
			});

			var text = new fabric.Text(element, {
			  fontSize: 30,
			  originX: 'left',
			  originY: 'top'
			});

			var group = new fabric.Group([ rect, text ], {
			  left: hud[element][0],
			  top: hud[element][1],
			});

			// "add" rectangle onto canvas
			canvas.add(group);
	    }
	}
}

drawHud(hudDef.hud[selectedHudIndex]);
