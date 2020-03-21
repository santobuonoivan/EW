"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyGame;
(function (MyGame) {
    var Game = (function () {
        function Game(players, dungeonMaster) {
            this.players = players;
            this.dungeonMaster = dungeonMaster;
            this.plays = MyGame.Plays;
        }
        Game.prototype.jugar = function () { };
        ;
        return Game;
    }());
    MyGame.Game = Game;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    var Player = (function () {
        function Player(name, race, life) {
            if (life === void 0) { life = 100; }
            this.name = name;
            this.race = race;
            this.itsAlive = true;
            this.isPoisoned = false;
            this.isBurned = false;
            this.life = life;
        }
        Player.prototype.get_name = function () {
            return this.name;
        };
        Player.prototype.get_race = function () {
            return this.race;
        };
        Player.prototype.get_life = function () {
            return this.life;
        };
        Player.prototype.get_attack = function (attack) {
            this.life -= attack;
            this.setAlive();
        };
        Player.prototype.getHealing = function (healing) {
            this.life += healing;
        };
        Player.prototype.setAlive = function () {
            this.itsAlive = this.life > 0;
        };
        return Player;
    }());
    MyGame.Player = Player;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    var Plays;
    (function (Plays) {
        Plays[Plays["ATTACK"] = 1] = "ATTACK";
        Plays[Plays["BURN"] = 2] = "BURN";
        Plays[Plays["POISON"] = 3] = "POISON";
        Plays[Plays["FAILED"] = 4] = "FAILED";
    })(Plays = MyGame.Plays || (MyGame.Plays = {}));
})(MyGame || (MyGame = {}));
var Items;
(function (Items) {
    var Item = (function () {
        function Item(name, code, description) {
            this.name = name;
            this.code = code;
            this.description = description;
        }
        return Item;
    }());
    Items.Item = Item;
})(Items || (Items = {}));
var Items;
(function (Items) {
    var HealingPotion = (function (_super) {
        __extends(HealingPotion, _super);
        function HealingPotion(name, code, description, cant) {
            var _this = _super.call(this, name, code, description) || this;
            _this.cant = cant;
            return _this;
        }
        HealingPotion.prototype.use = function () {
            return this.cant;
        };
        return HealingPotion;
    }(Items.Item));
    Items.HealingPotion = HealingPotion;
})(Items || (Items = {}));
var RaceTypes;
(function (RaceTypes) {
    var Race = (function () {
        function Race(life, gender, raceType) {
            this.life = life;
            this.gender = gender;
            this.raceType = raceType;
        }
        return Race;
    }());
    RaceTypes.Race = Race;
})(RaceTypes || (RaceTypes = {}));
var RaceTypes;
(function (RaceTypes) {
    var Draco = (function (_super) {
        __extends(Draco, _super);
        function Draco(life, gender, raceSubtype) {
            var _this = _super.call(this, life, gender, 'Draco') || this;
            _this.raceSubtype = raceSubtype;
            return _this;
        }
        return Draco;
    }(RaceTypes.Race));
    RaceTypes.Draco = Draco;
})(RaceTypes || (RaceTypes = {}));
var RaceTypes;
(function (RaceTypes) {
    var Dwarf = (function (_super) {
        __extends(Dwarf, _super);
        function Dwarf(life, gender, raceSubtype) {
            var _this = _super.call(this, life, gender, 'Dwarf') || this;
            _this.raceSubtype = raceSubtype;
            return _this;
        }
        return Dwarf;
    }(RaceTypes.Race));
    RaceTypes.Dwarf = Dwarf;
})(RaceTypes || (RaceTypes = {}));
var RaceTypes;
(function (RaceTypes) {
    var Elf = (function (_super) {
        __extends(Elf, _super);
        function Elf(life, gender, raceSubtype) {
            var _this = _super.call(this, life, gender, 'Elf') || this;
            _this.raceSubtype = raceSubtype;
            return _this;
        }
        return Elf;
    }(RaceTypes.Race));
    RaceTypes.Elf = Elf;
})(RaceTypes || (RaceTypes = {}));
var RaceTypes;
(function (RaceTypes) {
    var Gnomo = (function (_super) {
        __extends(Gnomo, _super);
        function Gnomo(life, gender, raceSubtype) {
            var _this = _super.call(this, life, gender, 'Gnomo') || this;
            _this.raceSubtype = raceSubtype;
            return _this;
        }
        return Gnomo;
    }(RaceTypes.Race));
    RaceTypes.Gnomo = Gnomo;
})(RaceTypes || (RaceTypes = {}));
var RaceTypes;
(function (RaceTypes) {
    var Human = (function (_super) {
        __extends(Human, _super);
        function Human(life, gender, raceSubtype) {
            var _this = _super.call(this, life, gender, 'Humans') || this;
            _this.raceSubtype = raceSubtype;
            return _this;
        }
        return Human;
    }(RaceTypes.Race));
    RaceTypes.Human = Human;
})(RaceTypes || (RaceTypes = {}));
var RaceTypes;
(function (RaceTypes) {
    var Medium = (function (_super) {
        __extends(Medium, _super);
        function Medium(life, gender, raceSubtype) {
            var _this = _super.call(this, life, gender, 'Medium') || this;
            _this.raceSubtype = raceSubtype;
            return _this;
        }
        return Medium;
    }(RaceTypes.Race));
    RaceTypes.Medium = Medium;
})(RaceTypes || (RaceTypes = {}));
var Races;
(function (Races) {
    var Draconid = (function (_super) {
        __extends(Draconid, _super);
        function Draconid(life, gender) {
            return _super.call(this, life, gender, 'Draconid') || this;
        }
        return Draconid;
    }(RaceTypes.Draco));
    Races.Draconid = Draconid;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var HillDwarf = (function (_super) {
        __extends(HillDwarf, _super);
        function HillDwarf(life, gender) {
            return _super.call(this, life, gender, 'HillDwarf') || this;
        }
        return HillDwarf;
    }(RaceTypes.Dwarf));
    Races.HillDwarf = HillDwarf;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var MountainDwarf = (function (_super) {
        __extends(MountainDwarf, _super);
        function MountainDwarf(life, gender) {
            return _super.call(this, life, gender, 'MountainDwarf') || this;
        }
        return MountainDwarf;
    }(RaceTypes.Dwarf));
    Races.MountainDwarf = MountainDwarf;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var ForestElf = (function (_super) {
        __extends(ForestElf, _super);
        function ForestElf(life, gender) {
            return _super.call(this, life, gender, 'ForestElf') || this;
        }
        return ForestElf;
    }(RaceTypes.Dwarf));
    Races.ForestElf = ForestElf;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var NobleElf = (function (_super) {
        __extends(NobleElf, _super);
        function NobleElf(life, gender) {
            return _super.call(this, life, gender, 'NobleElf') || this;
        }
        return NobleElf;
    }(RaceTypes.Dwarf));
    Races.NobleElf = NobleElf;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var ForestGnomo = (function (_super) {
        __extends(ForestGnomo, _super);
        function ForestGnomo(life, gender) {
            return _super.call(this, life, gender, 'ForestGnomo') || this;
        }
        return ForestGnomo;
    }(RaceTypes.Gnomo));
    Races.ForestGnomo = ForestGnomo;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var RockGnomo = (function (_super) {
        __extends(RockGnomo, _super);
        function RockGnomo(life, gender) {
            return _super.call(this, life, gender, 'RockGnomo') || this;
        }
        return RockGnomo;
    }(RaceTypes.Gnomo));
    Races.RockGnomo = RockGnomo;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Calishite = (function (_super) {
        __extends(Calishite, _super);
        function Calishite(life, gender) {
            return _super.call(this, life, gender, 'Calishite') || this;
        }
        return Calishite;
    }(RaceTypes.Human));
    Races.Calishite = Calishite;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Chondathan = (function (_super) {
        __extends(Chondathan, _super);
        function Chondathan(life, gender) {
            return _super.call(this, life, gender, 'Chondathan') || this;
        }
        return Chondathan;
    }(RaceTypes.Human));
    Races.Chondathan = Chondathan;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Damaran = (function (_super) {
        __extends(Damaran, _super);
        function Damaran(life, gender) {
            return _super.call(this, life, gender, 'Damaran') || this;
        }
        return Damaran;
    }(RaceTypes.Human));
    Races.Damaran = Damaran;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Illuskan = (function (_super) {
        __extends(Illuskan, _super);
        function Illuskan(life, gender) {
            return _super.call(this, life, gender, 'Illuskan') || this;
        }
        return Illuskan;
    }(RaceTypes.Human));
    Races.Illuskan = Illuskan;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Mulan = (function (_super) {
        __extends(Mulan, _super);
        function Mulan(life, gender) {
            return _super.call(this, life, gender, 'Mulan') || this;
        }
        return Mulan;
    }(RaceTypes.Human));
    Races.Mulan = Mulan;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Rashemi = (function (_super) {
        __extends(Rashemi, _super);
        function Rashemi(life, gender) {
            return _super.call(this, life, gender, 'Rashemi') || this;
        }
        return Rashemi;
    }(RaceTypes.Human));
    Races.Rashemi = Rashemi;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Shou = (function (_super) {
        __extends(Shou, _super);
        function Shou(life, gender) {
            return _super.call(this, life, gender, 'Shou') || this;
        }
        return Shou;
    }(RaceTypes.Human));
    Races.Shou = Shou;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Tethyrian = (function (_super) {
        __extends(Tethyrian, _super);
        function Tethyrian(life, gender) {
            return _super.call(this, life, gender, 'Tethyrian') || this;
        }
        return Tethyrian;
    }(RaceTypes.Human));
    Races.Tethyrian = Tethyrian;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var Turami = (function (_super) {
        __extends(Turami, _super);
        function Turami(life, gender) {
            return _super.call(this, life, gender, 'Turami') || this;
        }
        return Turami;
    }(RaceTypes.Human));
    Races.Turami = Turami;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var ChunkyMedium = (function (_super) {
        __extends(ChunkyMedium, _super);
        function ChunkyMedium(life, gender) {
            return _super.call(this, life, gender, 'ChunkyMedium') || this;
        }
        return ChunkyMedium;
    }(RaceTypes.Medium));
    Races.ChunkyMedium = ChunkyMedium;
})(Races || (Races = {}));
var Races;
(function (Races) {
    var LightFootMedium = (function (_super) {
        __extends(LightFootMedium, _super);
        function LightFootMedium(life, gender) {
            return _super.call(this, life, gender, 'LightFootMedium') || this;
        }
        return LightFootMedium;
    }(RaceTypes.Medium));
    Races.LightFootMedium = LightFootMedium;
})(Races || (Races = {}));
//# sourceMappingURL=main.js.map