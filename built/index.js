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
            ret += '\t\t' + el.toString() + '\n';
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
const SCREEN_WIDTH = 640; // 16/9: 853.333333
const SCREEN_HEIGHT = 480;
const STYLE_NORMAL = componentStyle.STYLE_NORMAL;
const STYLE_SIMPLE = componentStyle.STYLE_SIMPLE;
const SKILLS_X = 112;
const SKILL_BAR_X_INDENT = 0;
const SKILL_BAR_OFFSET = (2 * SKILL_BAR_X_INDENT);
const SKILL_ICON_X = (SKILL_BAR_OFFSET + SKILLS_X);
const qtrue = 1;
const qfalse = 0;
const CHATLOC_Y = 478;
const TEAMCHAT_HEIGHT = 4;
const TEAMCHAT_LINE_HEIGHT = 9;
/*
float Ccg_WideX(float x)
{
    return (Ccg_Is43Screen()) ? x : x *cgs.adr43; // * (aspectratio / (4/3))
}
*/
const RATIO43 = (4.0 / 3.0); ///< 4:3 aspectratio is the default for this game engine ...
const RPRATIO43 = (1.0 / RATIO43);
const windowAspect = 1.0;
function Ccg_Is43Screen() { return false; } //TODO
var cgs = { adr43: windowAspect * RPRATIO43 }; //TODO
function Ccg_WideX(x) {
    return (Ccg_Is43Screen()) ? x : x * cgs.adr43; // * (aspectratio / (4/3))
}
function CG_getComponent(...argv) {
    var tmp = argv[4];
    argv[4] = argv[5];
    argv[5] = tmp;
    return argv;
}
// ^\s+hud\d?(->|.)(\w+)\s+=\s(.*)$
var hud0 = {
    // the Default hud
    hudnumber: 0,
    compas: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 100 - 20 - 16), 16, 100 + 32, 100 + 32, qtrue, STYLE_NORMAL),
    staminabar: CG_getComponent(4, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    breathbar: CG_getComponent(4, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    healthbar: CG_getComponent(24, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    weaponchangebar: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 16, SCREEN_HEIGHT - 92, 12, 72, qtrue, STYLE_NORMAL),
    healthtext: CG_getComponent(SKILLS_X - 28, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    xptext: CG_getComponent(SKILLS_X + 28, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    statsdisplay: CG_getComponent(SKILL_ICON_X, 0, 0, 0, qtrue, STYLE_NORMAL),
    weaponicon: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 82), (SCREEN_HEIGHT - 56), 60, 32, qtrue, STYLE_NORMAL),
    weaponammo: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
    fireteam: CG_getComponent(10, 10, 100, 100, qtrue, STYLE_NORMAL),
    popupmessages: CG_getComponent(4, 360, 72, 72, qtrue, STYLE_NORMAL),
    powerups: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
    hudhead: CG_getComponent(44, SCREEN_HEIGHT - 92, 62, 80, qtrue, STYLE_NORMAL),
    cursorhints: CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL),
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
    weaponchangebar: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 16), 388, 12, 72, qtrue, STYLE_NORMAL),
    healthtext: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 60, SCREEN_HEIGHT - 65, 0, 0, qtrue, STYLE_NORMAL),
    xptext: CG_getComponent(48, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    statsdisplay: CG_getComponent(24, SCREEN_HEIGHT - 95, 0, 0, qtrue, STYLE_SIMPLE),
    weaponicon: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 82 - 20), (SCREEN_HEIGHT - 56), 60, 32, qtrue, STYLE_NORMAL),
    weaponammo: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22 - 20, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
    fireteam: CG_getComponent(Ccg_WideX(SCREEN_WIDTH), 10, 100, 100, qtrue, STYLE_NORMAL),
    popupmessages: CG_getComponent(4, 100, 72, 72, qtrue, STYLE_NORMAL),
    powerups: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
    hudhead: CG_getComponent(44, SCREEN_HEIGHT - 92, 62, 80, qfalse, STYLE_NORMAL),
    cursorhints: CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL),
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
    weaponchangebar: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 16), 388, 12, 72, qtrue, STYLE_NORMAL),
    healthtext: CG_getComponent(65, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    xptext: CG_getComponent(120, SCREEN_HEIGHT - 4, 0, 0, qtrue, STYLE_NORMAL),
    statsdisplay: CG_getComponent(44, SCREEN_HEIGHT - 95, 0, 0, qtrue, STYLE_SIMPLE),
    weaponicon: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 82), (SCREEN_HEIGHT - 56), 60, 32, qtrue, STYLE_NORMAL),
    weaponammo: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
    fireteam: CG_getComponent(Ccg_WideX(SCREEN_WIDTH), 10, 100, 100, qtrue, STYLE_NORMAL),
    popupmessages: CG_getComponent(4, 100, 72, 72, qtrue, STYLE_NORMAL),
    powerups: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
    hudhead: CG_getComponent(44, SCREEN_HEIGHT - 92, 62, 80, qfalse, STYLE_NORMAL),
    cursorhints: CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL),
    weaponstability: CG_getComponent(50, 208, 10, 64, qtrue, STYLE_NORMAL),
    livesleft: CG_getComponent(0, 0, 0, 0, qtrue, STYLE_NORMAL),
    reinforcment: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
    roundtimer: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 70, 0, 0, qtrue, STYLE_NORMAL),
    spawntimer: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 70, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL),
    localtime: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 55, SCREEN_HEIGHT - 60, 0, 0, qtrue, STYLE_NORMAL),
};
const COMPASS_SIZE = 132;
const HEAD_SIZE = 12;
const WEAPON_ICON_WIDTH = 30;
const WEAPON_ICON_HEIGHT = (WEAPON_ICON_WIDTH * 32) / 60.0;
const BOTTOM_PADDING = 73.77777777777777;
const BARS_HEIGHT = 72;
const BARS_BOTTOM_ICON = 12;
const LEFT_COMPASS = .5 * SCREEN_WIDTH - Ccg_WideX(.5 * COMPASS_SIZE) + 3;
const TEAMCHAT_TOP = CHATLOC_Y - TEAMCHAT_LINE_HEIGHT * TEAMCHAT_HEIGHT;
const chatWidth = 320;
const chatPosX = (Ccg_WideX(SCREEN_WIDTH) - chatWidth) / 2.0;
var hud3 = {
    hudnumber: 5,
    compas: CG_getComponent(.5 * SCREEN_WIDTH - Ccg_WideX(.5 * COMPASS_SIZE), TEAMCHAT_TOP - COMPASS_SIZE, COMPASS_SIZE, COMPASS_SIZE, qtrue, STYLE_NORMAL),
    staminabar: CG_getComponent(LEFT_COMPASS - Ccg_WideX(12 + 12), SCREEN_HEIGHT - BOTTOM_PADDING - BARS_HEIGHT - BARS_BOTTOM_ICON, 12, BARS_HEIGHT, qtrue, STYLE_NORMAL),
    breathbar: CG_getComponent(LEFT_COMPASS - Ccg_WideX(12 + 12), SCREEN_HEIGHT - BOTTOM_PADDING - BARS_HEIGHT - BARS_BOTTOM_ICON, 12, BARS_HEIGHT, qtrue, STYLE_NORMAL),
    healthbar: CG_getComponent(LEFT_COMPASS - Ccg_WideX(12), SCREEN_HEIGHT - BOTTOM_PADDING - BARS_HEIGHT - BARS_BOTTOM_ICON, 12, BARS_HEIGHT, qtrue, STYLE_NORMAL),
    weaponchangebar: CG_getComponent((Ccg_WideX(SCREEN_WIDTH) - 16), SCREEN_HEIGHT + BOTTOM_PADDING - BARS_HEIGHT - BARS_BOTTOM_ICON, 12, BARS_HEIGHT, qtrue, STYLE_NORMAL),
    healthtext: CG_getComponent(65, SCREEN_HEIGHT - BOTTOM_PADDING, 0, 0, qtrue, STYLE_NORMAL),
    xptext: CG_getComponent(.5 * SCREEN_WIDTH - Ccg_WideX(.5 * COMPASS_SIZE), SCREEN_HEIGHT - BOTTOM_PADDING, 0, 0, qtrue, STYLE_NORMAL),
    statsdisplay: CG_getComponent(.5 * SCREEN_WIDTH - Ccg_WideX(.5 * 16), SCREEN_HEIGHT - COMPASS_SIZE - 21, 0, 0, qtrue, STYLE_SIMPLE),
    weaponicon: CG_getComponent(.5 * SCREEN_WIDTH + Ccg_WideX(.5 * 16), SCREEN_HEIGHT - COMPASS_SIZE - 19, WEAPON_ICON_WIDTH, WEAPON_ICON_HEIGHT, qtrue, STYLE_NORMAL),
    weaponammo: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 22, SCREEN_HEIGHT - 1 * (16 + 2) + 12 - 4, 0, 0, qtrue, STYLE_NORMAL),
    fireteam: CG_getComponent(10, 10, 100, 100, qtrue, STYLE_NORMAL),
    popupmessages: CG_getComponent(4, 100, 72, 72, qtrue, STYLE_NORMAL),
    powerups: CG_getComponent(Ccg_WideX(SCREEN_WIDTH) - 40, SCREEN_HEIGHT - 140, 36, 36, qtrue, STYLE_NORMAL),
    hudhead: CG_getComponent(4 + Ccg_WideX(24), 388 + 72 + 1, HEAD_SIZE, HEAD_SIZE * (80 / 62), qtrue, STYLE_NORMAL),
    cursorhints: CG_getComponent(.5 * SCREEN_WIDTH - .5 * 48, 260, 48, 48, qtrue, STYLE_NORMAL),
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
        Hud.fromObj(hud3),
    ],
    toString: function () {
        return 'hudDef {\n\t' + this.hud[selectedHudIndex] + '\n}';
    }
};
var selectedHudIndex = 3;
var info = "test";
new Vue({
    el: '#app',
    data: {
        hudDef: hudDef,
        hudExport: hudDef.hud[selectedHudIndex],
        selectedHudIndex: selectedHudIndex,
        info: info
    },
    methods: {
        hudSelected() {
            // console.log(this.selectedHudIndex,selectedHudIndex);
            var canvas = new fabric.Canvas('c');
            drawHud(canvas, hudDef.hud[this.selectedHudIndex]);
        }
    },
    mounted() {
        canvas = new fabric.Canvas('c');
        drawHud(canvas, hudDef.hud[selectedHudIndex]);
    }
});
canvas.on({
    'object:modified': updateControls,
    'selection:updated': updateControls,
    'selection:created': updateControls
});
function updateControls(e) {
    //console.log(e.target);
    document.getElementById('info').innerHTML = "x:" + e.target.left + "\ny:" + e.target.top + "\nw:" + e.target.width + "\nh:" + e.target.height;
}
// create a wrapper around native canvas element (with id="c")
// canvas.on('mouse:over', function(e:any) {
// 		if (e!==undefined && e.target) {
// 			e.target.set('fill', 'red');
// 		}
//     canvas.renderAll();
//   });
// backgound image: https://stackoverflow.com/questions/47010467/fit-the-background-image-to-canvas-size-with-fabric-js/47074188
// fullscreen https://stackoverflow.com/questions/19937397/show-canvas-in-fullscreen-in-fabric-js
function drawHud(canvas, hud) {
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
//drawHud(hudDef.hud[0]);
//# sourceMappingURL=index.js.map