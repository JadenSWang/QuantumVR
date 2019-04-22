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