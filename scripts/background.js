/*
Made by 93951230 
whoever copy this file just for money gets curse by endless hell flame
*/
			var generateWorld = new function() {
				this.randomly = function () {
					this.igenerate = [256];
					for (i = 0; i < tileWi; i++) {
						if ((Math.random() < 0.2) && (this.igenerate[i] + 1 < 224)) {
							this.igenerate[i + 1] = this.igenerate[i] + 1;
						}
						else if (((Math.random() >= 0.2) && (Math.random() < 0.4)) && (this.igenerate[i] - 1 < 288)) {
							this.igenerate[i + 1] = this.igenerate[i] - 1;
						}
						else {
							this.igenerate[i + 1] = this.igenerate[i];
						}
					}
				}
				this.constructing = function () {
					for (i = 0; i < tileWi; i++) {
						tiles[i] = [];
						for (j = 0; j < tileHi; j++) {
							if (j >= this.igenerate[i]) {
								// really creatin'
								if (Math.random() > ((j - 256) / 256)) {
									(tiles[i])[j] = new tile(dirt, j, i);
								}
								else // not dirt how about rocks?
								{
									(tiles[i])[j] = new tile(rock, j, i);
								}
							}
							else {
								(tiles[i])[j] = new tile(air, j, i);
							}
						}
					}
				}
				this.surface = function () {
					//grass (surface)
					for (i = 0; i < tileWi; i++) {
						(tiles[i])[this.igenerate[i]] = new tile(grass, this.igenerate[i], i)
					}
					//trees
					for (i = 0; i < tileWi; i++) {
						if (Math.random() < 0.125) {
							for (j = 0;j < Math.floor(Math.random()*10)+4;j++) {
								(tiles[i])[this.igenerate[i] - (1+(j))] = new tile(normal_tree, this.igenerate[i] - (1+j), i)
							}
						}
					}
				}
				this.initialize = function () {
					XdrawVar = (-Math.floor((45 * (tileWi / 2))));
					YdrawVar = -(45 * this.igenerate[(tileWi / 2)]) +320;
					//itembar...
					itembar = [];
					itembarIn = [];
					for (i = 0; i < itembar_amount;i++) {
						itembar[i] = new itemBar(null);
					}
					for (i = 0; i < itembar_amount;i++) {
						itembarIn[i] = [];
						for (j = 0; j < 3;j++) {
							itembarIn[i][j] = new itemBarIn(null);
						}
					}
					itembar[selectedBar].selected = true;
					itembar[0].hold = new itemiron_pickaxe(1);
				}
				this.main = async function () {
					this.randomly();
					await this.constructing();
					this.surface();
					this.initialize();
				}
            }