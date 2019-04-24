"use strict";
// declare const fabric: obj;
class Hud {
    // hudNumber: number;
    constructor(hudNumber, elements) {
        this.hudNumber = hudNumber;
        this.elements = elements;
        // this.hudNumber = obj.hudNumber;
    }
    static fromObj(hud) {
        let elements = [];
        // console.log(hud);
        for (var element in hud) {
            if (hud.hasOwnProperty(element) && element != 'hudnumber') {
                // console.log(element,hud[element]);
                elements.push(new HudElement(element, hud[element][0], hud[element][1], hud[element][2], hud[element][3], hud[element][4], hud[element][5]));
            }
        }
        return new this(hud.hudnumber, elements);
    }
    toString() {
        let ret = "hud {\n\thudnumber " + this.hudNumber.toString() + "\n";
        this.elements.forEach(function (el) {
            // console.log(el);
            ret += '\t' + el.toString() + '\n';
        });
        return ret + "}";
    }
}
var componentStyle;
(function (componentStyle) {
    componentStyle[componentStyle["STYLE_NORMAL"] = 0] = "STYLE_NORMAL";
    componentStyle[componentStyle["STYLE_SIMPLE"] = 1] = "STYLE_SIMPLE";
})(componentStyle || (componentStyle = {}));
;
class HudElement {
    constructor(name, left, top, width, height, visible, style) {
        this.name = name;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.visible = visible;
        this.style = style;
    }
    toString() {
        let ret = "";
        for (let prop in this) {
            ret += this[prop].toString() + ' ';
        }
        ;
        return ret;
    }
}
//this would be parsed from textarea
// so 1. implement string to huddef
// 2. implement hud obj to string
const SCREEN_WIDTH = 640;
const SCREEN_HEIGHT = 480;
const STYLE_NORMAL = componentStyle.STYLE_NORMAL;
const STYLE_SIMPLE = componentStyle.STYLE_SIMPLE;
const SKILLS_X = 112;
const SKILL_BAR_X_INDENT = 0;
const SKILL_BAR_OFFSET = (2 * SKILL_BAR_X_INDENT);
const SKILL_ICON_X = (SKILL_BAR_OFFSET + SKILLS_X);
const qtrue = 1;
const qfalse = 0;
/*
float Ccg_WideX(float x)
{
    return (Ccg_Is43Screen()) ? x : x *cgs.adr43; // * (aspectratio / (4/3))
}
*/
function Ccg_Is43Screen() { return true; } //TODO
var cgs = { adr43: 0 }; //TODO
function Ccg_WideX(x) {
    return (Ccg_Is43Screen()) ? x : x * cgs.adr43; // * (aspectratio / (4/3))
}
function CG_getComponent(...argv) { return argv; }
// ^\s+hud\d?(->|.)(\w+)\s+=\s(.*)$
var hud0 = {
    // the Default hud
    hudnumber: 0,
    compas: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 100 - 20 - 16), 16, 100 + 32, 100 + 32, qtrue, STYLE_NORMAL),
    staminabar: CG_getComponent(4, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    breathbar: CG_getComponent(4, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    healthbar: CG_getComponent(24, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    weaponchargebar: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 16, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    healthtext: CG_getComponent(SKILLS_X - 28, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    xptext: CG_getComponent(SKILLS_X + 28, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    statsdisplay: CG_getComponent(SKILL_ICON_X, 0, 0, 0, qtrue, STYLE_NORMAL),
    weaponicon: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 82), (SCREEN_HEIGHT - 56), 60, 32, qtrue, STYLE_NORMAL),
    weaponammo: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
    fireteam: CG_getComponent(10, 10, 100, 100, qtrue, STYLE_NORMAL),
    popupmessages: CG_getComponent(4, 360, 72, 72, qtrue, STYLE_NORMAL),
    powerups: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
    hudhead: CG_getComponent(44, SCREEN_HEIGHT - 92, 62, 80, qtrue, STYLE_NORMAL),
    cursorhint: CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL),
    weaponstability: CG_getComponent(50, 208, 10, 64, qtrue, STYLE_NORMAL),
    livesleft: CG_getComponent(0, 0, 0, 0, qtrue, STYLE_NORMAL),
    reinforcment: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
    roundtimer: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
    spawntimer: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL),
    localtime: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL)
};
var hud1 = {
    hudnumber: 1,
    compas: CG_getComponent(44, SCREEN_HEIGHT - 75, 72, 72, qtrue, STYLE_NORMAL),
    staminabar: CG_getComponent(4, 388, 12, 72, qtrue, STYLE_NORMAL),
    breathbar: CG_getComponent(4, 388, 12, 72, qtrue, STYLE_NORMAL),
    healthbar: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 36), 388, 12, 72, qtrue, STYLE_NORMAL),
    weaponchargebar: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 16), 388, 12, 72, qtrue, STYLE_NORMAL),
    healthtext: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 60, SCREEN_HEIGHT - 65, 0, 0, qtrue, STYLE_NORMAL),
    xptext: CG_getComponent(48, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    statsdisplay: CG_getComponent(24, SCREEN_HEIGHT - 95, 0, 0, qtrue, STYLE_SIMPLE),
    weaponicon: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 82 - 20), (SCREEN_HEIGHT - 56), 60, 32, qtrue, STYLE_NORMAL),
    weaponammo: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22 - 20, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
    fireteam: CG_getComponent(Ccg_WideX(SCREEN_WIDTH), 10, 100, 100, qtrue, STYLE_NORMAL),
    popupmessages: CG_getComponent(4, 100, 72, 72, qtrue, STYLE_NORMAL),
    powerups: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
    hudhead: CG_getComponent(44, SCREEN_HEIGHT - 92, 62, 80, qfalse, STYLE_NORMAL),
    cursorhint: CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL),
    weaponstability: CG_getComponent(50, 208, 10, 64, qtrue, STYLE_NORMAL),
    livesleft: CG_getComponent(0, 0, 0, 0, qtrue, STYLE_NORMAL),
    reinforcment: CG_getComponent(70, SCREEN_HEIGHT - 12, 0, 0, qtrue, STYLE_NORMAL),
    roundtimer: CG_getComponent(85, SCREEN_HEIGHT - 12, 0, 0, qtrue, STYLE_NORMAL),
    spawntimer: CG_getComponent(70, SCREEN_HEIGHT - 2, 0, 0, qtrue, STYLE_NORMAL),
    localtime: CG_getComponent(85, SCREEN_HEIGHT - 2, 0, 0, qtrue, STYLE_NORMAL),
};
var hud2 = {
    hudnumber: 2,
    compas: CG_getComponent(64, SCREEN_HEIGHT - 75, 72, 72, qtrue, STYLE_NORMAL),
    staminabar: CG_getComponent(4, 388, 12, 72, qtrue, STYLE_NORMAL),
    breathbar: CG_getComponent(4, 388, 12, 72, qtrue, STYLE_NORMAL),
    healthbar: CG_getComponent(24, 388, 12, 72, qtrue, STYLE_NORMAL),
    weaponchargebar: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 16), 388, 12, 72, qtrue, STYLE_NORMAL),
    healthtext: CG_getComponent(65, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    xptext: CG_getComponent(120, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    statsdisplay: CG_getComponent(44, SCREEN_HEIGHT - 95, 0, 0, qtrue, STYLE_SIMPLE),
    weaponicon: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 82), (SCREEN_HEIGHT - 56), 60, 32, qtrue, STYLE_NORMAL),
    weaponammo: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
    fireteam: CG_getComponent(Ccg_WideX(SCREEN_WIDTH), 10, 100, 100, qtrue, STYLE_NORMAL),
    popupmessages: CG_getComponent(4, 100, 72, 72, qtrue, STYLE_NORMAL),
    powerups: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
    hudhead: CG_getComponent(44, SCREEN_HEIGHT - 92, 62, 80, qfalse, STYLE_NORMAL),
    cursorhint: CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL),
    weaponstability: CG_getComponent(50, 208, 10, 64, qtrue, STYLE_NORMAL),
    livesleft: CG_getComponent(0, 0, 0, 0, qtrue, STYLE_NORMAL),
    reinforcment: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
    roundtimer: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
    spawntimer: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL),
    localtime: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL),
};
// Hud hud0obj = new Hud
var hudDef = {
    hud: [
        Hud.fromObj(hud0),
        Hud.fromObj(hud1),
        Hud.fromObj(hud2),
    ],
    toString: function () {
        return 'hudDef {\n\t' + this.hud[selectedHudIndex] + '\n}';
    }
};
var selectedHudIndex = 0;
new Vue({
    el: '#app',
    data: {
        hudDef: hudDef,
        hudExport: hudDef.hud[selectedHudIndex]
    }
});
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');
canvas.on('mouse:over', function (e) {
    if (e !== undefined && e.target) {
        e.target.set('fill', 'red');
    }
    canvas.renderAll();
});
// backgound image: https://stackoverflow.com/questions/47010467/fit-the-background-image-to-canvas-size-with-fabric-js/47074188
// fullscreen https://stackoverflow.com/questions/19937397/show-canvas-in-fullscreen-in-fabric-js
function drawHud(hud) {
    hud.elements.forEach(function (element) {
        var obj;
        if (element.width <= 0 || element.height <= 0) {
            obj = new fabric.Circle({
                left: 0,
                top: 0,
                radius: 30,
                stroke: 'black',
                fill: 'rgba(0,0,0,0)',
                hasRotatingPoint: false
            });
        }
        else {
            obj = new fabric.Rect({
                left: 0,
                top: 0,
                width: element.width,
                height: element.height,
                stroke: 'black',
                fill: 'rgba(0,0,0,0)',
                hasRotatingPoint: false
            });
        }
        var text = new fabric.Text(element.name, {
            fontSize: 30,
            originX: 'left',
            originY: 'top'
        });
        var group = new fabric.Group([obj,], {
            left: element.left,
            top: element.top,
            hasRotatingPoint: false
        });
        // "add" rectangle onto canvas
        canvas.add(group);
    });
}
drawHud(hudDef.hud[2]);
//# sourceMappingURL=index.js.map