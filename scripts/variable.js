/*Made by 93951230 with no rights*/
            var canvas = document.getElementById("Canvas");
            var ctx = canvas.getContext("2d");
            canvas.height = innerHeight;
            canvas.width = innerWidth;
            var started = false;
            //other
            const usualLen = 45;
            var CamX;
            var CamY;
            var XdrawVar = 0;
            var YdrawVar = 0;
			var progress = 0;
            var imgs = { "Block": [], "Gui": [], "Entity": [], "Item": []};
            imgs["Gui"][0] = document.getElementById("background");
			imgs["Gui"][1] = document.getElementById("itembar");
			imgs["Gui"][2] = document.getElementById("itembar_2");
			imgs["Gui"][3] = document.getElementById("itembarin");
			imgs["Gui"][4] = document.getElementById("inButton");
			imgs["Gui"][5] = document.getElementById("inButtonOpen");
            imgs["Block"][0] = [];
            imgs["Block"][0][0] = document.getElementById("dirt_1");
            imgs["Block"][0][1] = document.getElementById("dirt_2");
            imgs["Block"][1] = document.getElementById("rock");
            imgs["Block"][2] = document.getElementById("grass");
            imgs["Block"][3] = document.getElementById("normal_tree");
			imgs["Entity"][0] = document.getElementById("character");
			imgs["Item"][0] = document.getElementById("dirt_1_drop");
			imgs["Item"][1] = document.getElementById("dirt_2_drop");
			imgs["Item"][2] = document.getElementById("grass_drop");
			imgs["Item"][3] = document.getElementById("normal_tree_drop");
			imgs["Item"][4] = document.getElementById("iron_pickaxe");
            var keyPressed = {}
			//world generate
			var progress = 0;
			var tileWi = 2048;
			var tileHi = 512;
			var selectedBar = 0;
			var itembar_amount = 8;
			var buttons = [];
			var openIn = false;
            var randomNumber = Math.floor(Math.random()*10000000)/10000000;
			///////
            var tiles = [];
            function tile(filled, X, Y) {
                this.fill = new filled(X, Y);
            }
            function Load(arg) {itemLibrary[block.ID]["Light"]
            }
            function ligthTest(block) {
                if ((itemLibrary[(tiles[block.countY - 1])[block.countX].fill.ID]["Light"] == false) || (itemLibrary[(tiles[block.countY + 1])[block.countX].fill.ID]["Light"] == false) || (itemLibrary[(tiles[block.countY])[block.countX - 1].fill.ID]["Light"] == false) || (itemLibrary[(tiles[block.countY])[block.countX + 1].fill.ID]["Light"] == false)) {
                    block.light = 8;
                }
                else {
                    if (Math.max((tiles[block.countY + 1])[block.countX].fill.light, (tiles[block.countY - 1])[block.countX].fill.light, (tiles[block.countY])[block.countX + 1].fill.light, (tiles[block.countY])[block.countX - 1].fill.light) != 0) {
                        block.light = (Math.max((tiles[block.countY + 1])[block.countX].fill.light, (tiles[block.countY - 1])[block.countX].fill.light, (tiles[block.countY])[block.countX + 1].fill.light, (tiles[block.countY])[block.countX - 1].fill.light) - 2)
                    }
                }
            }
			var item = [];
            function breakTest(block) {
                if (block.breakTime <= 0) {
                    (tiles[block.countY])[block.countX] = new tile(air, block.countX, block.countY);
					getItem(itemLibrary[block.ID]["item"],1);
                }
                block.breakPhase = 1 - (block.breakTime / itemLibrary[block.ID]["breakFull"]);
            }
			function getItem(ID,amount) {
				for (i = 0;i < itembar_amount;i++) {
					if (itembar[i].hold == null) {
						itembar[i].hold = new ID(amount);
						break;
						
					}
					else if (itembar[i].hold != null) {
						if (itembar[i].hold.constructor == ID) {
							itembar[i].hold = new ID(itembar[i].hold.count+amount);
							break;
						}
					}
				}
			}//execute getitem dirt 10
			function Command(answer = prompt()) {
				if (/help/i.test(answer)) {
					alert("execute (被執行目標): 為(被執行目標)執行動作\n");
				}
				else if (/execute/i.test(answer)) {
					if (/getitem/i.test(answer)) {
						for (i = 0;i < itemsLib.length;i++) {
							if (eval("/" + itemsLib[i] + "/").test(answer)) {
								getItem(eval(itemsLib[i]),10);
							}
						}
					}
				}
				else {
					alert("!:(! execute (被執行目標): 為(被執行目標)執行動作");
				}
			}