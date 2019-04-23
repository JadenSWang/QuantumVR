/*

A Geometron is a virtual machine which has two 8x8x8 cubes of operations. Thus each cube has
512 elements, for a total of 1024 addresses
  Operations are divided into:
       - transformations of global geometric variables, e.g. x += side. 
       - creation of geometric elements such as circle in a canvas or sphere in a 3d canvas, 
       where the location, orientation, and size, e.g. createSphere(x,y,z,side) 
       - carry out a sequence of operations, which can be any of these three types
       
  operations are organized by the geometry of the two cubes:  
      One cube is the "symbol" cube which consists entirely of sequences of operations. 
      the other cube, the "action cube", is divided up into different types of action based on "layers", which are 
          8x8 arrays, which stack on top of each other(with exceptions).  The symbol which describes an action is in the same location in the symbol cube
          as the corresponding action in the action cube.  
          
      Each address in each cube is a base 8 number, indicated by a leading 0.  Therefore these addresses are *coordinates* in space, where 
      the action cube is all 3 digit addresses and the symbol cube is all 4 digit addresses starting with 1. 

    
      The Action Cube is divided into layers as follows:
         00-05: held in reserve for creation operations for making new instances of Geometron
         06-037: Root Actions, which manipulate things outside of the basic construct of geometron
         040-0176: keyboard actions, each of which maps to some other action/operation 
         0177: do nothing
         0200-0277: shape table, which is all programs/sequences/glyphs
         0300-0377:  
*/


function Geometron(hypercubesource) {
    /*construct a geometron instance, which has
          a hypercube  
          a target spelling canvas 
          a target 2d canvas
          a target 3d canvas
          a current glyph to draw 
          a current style object for 3d
          a current style object for spelling
          a current style object for 2d drawing
    */
    this.hypercubesource = hypercubesource;//path where bytecode is located
    this.currentGlyph = "";
    this.hypercube = Hypercube(hypercubesource);
    //
}

function StyleObject(){


    this._style = {
        color0: "black",
        fill0: "black",
        line0: 1,
        color1: "black",
        fill1: "black",
        line1: 3,
        color2: "red",
        fill2: "red",
        line2: 1,
        color3: "#FF7900",
        fill3: "#FF7900",
        line3: 1,
        color4: "yellow",
        fill4: "yellow",
        line4: 1,
        color5: "green",
        fill5: "green",
        line5: 1,
        color6: "blue",
        fill6: "blue",
        line6: 1,
        color7: "purple",
        fill7: "purple",
        line7: 1
    }
}

function GVM2d(x0,y0,unit,theta0,canvas2d) {
    this._x0 = x0;
    this._x = x0;
    this._y0 = y0;
    this._y = y0;
    this._unit = unit;
    this._theta0 = theta0;
    this._theta = theta0;
    this._scaleFactor = 2;
    this._thetaStep = Math.PI/2;
    this._color

    
    this.sequence = function(sequence,GVM2d) {

    }
    this.action = function(address,GVM2d) {
        //03xx
        if(address == 0300){
            GVM2d._x = GVM2d.x0;
            GVM2d._y = GVM2d.y0;
            GVM2d._side = GVM2d.unit;
            GVM2d._thetaStep = Math.PI/2;
            GVM2d._theta = GVM2d.theta0;
            GVM2d._scaleFactor = 2;       
        }
        if(address == 0304){
            GVM2d._thetaStep = Math.PI/2;
        }
        if(address == 0305){
            GVM2d._thetaStep = 2*Math.PI/5;
        }
        if(address == 0306){
            GVM2d._thetaStep = Math.PI/3;
        }

        if(address == 0310){
            GVM2d._scaleFactor = Math.sqrt(2);
        }
        if(address == 0311){
            GVM2d._scaleFactor = (Math.sqrt(5) + 1)/2;
        }
        if(address == 0312){
            GVM2d._scaleFactor = Math.sqrt(3);
        }
        if(address == 0313){
            GVM2d._scaleFactor = 2;
        }
        if(address == 0314){
            GVM2d._scaleFactor = 3;
        }
        if(address == 0316){
            GVM2d._scaleFactor = 5;
        }


    }
}



function Canvas3d(canvas3d){

}
function Canvas2dspell(canvas2d){

}
function Canvas2ddraw(canvas2d){

}




class Glyph {
    _address;
    _commands;
    _name;

    constructor(address, name) {
        this._address = address;
        this._commands = [];
        this._name = name;
    }

    toString = function () {
        var toReturn = this._address + ":";
        for (var i = 0; i < this._commands.length; i++) {
            toReturn += this._commands[i] + ",";
        }
        return toReturn;
    }

    execute = function () {
        glyphTable.runGlyph(this._commands[this._commands.length - 1]);
    }

    executeAll = function () {
        for (var i = 0; i < this._commands.length; i++) {
            glyphTable.runGlyph(this._commands[i]);
        }
    }

    addGlyph = function (address) {
        this._commands.push(address);
    }

    addGlyphsFromString(toAdd) {
        var addresses = toAdd.split("'");
        for (var i = 0; i < addressses.length; i++) {
            this._commands.push(addresses[i]);
        }
    }
}

class Action extends Glyph {
    _action;
    _targetMesh;

    constructor(address, action, name) {
        super(address, name)
        this._action = action[0];
        this._targetMesh = action[1];
    }

    execute = function () {
        this._action(this._targetMesh);
    }
}

class AllGlyphs {
    _allCommands;

    constructor() {
        this._allCommands = [];
    }

    addGlyph = function (glyph) {
        this._allCommands[glyph._address] = glyph;
    }

    runGlyph = function (address) {
        this._allCommands[address].execute();
    }
}