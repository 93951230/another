/*
Made by 93951230 
whoever copy this file just for money gets curse by endless hell flame
*/
for (i = 0; i < tileWi; i++) {
	tiles[i] = [];
}
			var generateWorld = new function() {
				this.randomly = function () {
					this.igenerate = [256];
					for (i = 0; i < tileWi; i++) {
						if ((Math.random() < 0.2) || (this.igenerate[i] + 1 < 224)) {
							this.igenerate[i + 1] = this.igenerate[i] + Math.floor((Math.random()*2)+1);
						}
						else if (((Math.random() >= 0.2) && (Math.random() < 0.4)) || (this.igenerate[i] - 1 < 288)) {
							this.igenerate[i + 1] = this.igenerate[i] - Math.floor((Math.random()*2)+1);
						}
						else {
							this.igenerate[i + 1] = this.igenerate[i];
						}
					}
				}
				this.land = function () {
					for (i = 0; i < tileWi; i++) {
						for (j = 0; j < tileHi; j++) {
							if (j >= this.igenerate[i]) {
								// really creatin'
								if (Math.random() > ((j - 256) / 256)+0.2) {
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
				this.highland = function () {
					for (i = 0; i < tileWi; i++) {
						for (j = 0; j < tileHi; j++) {
							(tiles[i])[j] = new tile(air, j, i);
						}
					}
					var random = 0;
					for (i=0;i < tileWi-40;i++) {
						if (Math.random() < 0.5) {
							random = Math.floor((Math.random()*100)/4)+5;
							island(random,[i,256+(Math.round(Math.random()*100)-50)/2]);
							i += random;
						}
					}
					island(60,[tileWi/2-30,256]);
				}
				this.initialize = function () {
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
				this.main = async function (type) {
					this.randomly();
					if (type) {
						await this.highland();
					}
					else {
						await this.land();
					}
					this.initialize();
					XdrawVar = (-Math.floor((45 * (tileWi / 2))));
					YdrawVar = -(45 * this.igenerate[(tileWi / 2)]) +320;
				}
            }
			////////////////////////////////////////////////////////////////////////////////////////////////
			function island(width,pos) {
				bottomH = [pos[1]+1];
				for (i = 0; i < width; i++) {
					if (i/width+((Math.random()/2)-0.25) < 0.45) {
						if (i/width+((Math.random()/2)-0.25) < 0.15) {
							bottomH[i + 1] = bottomH[i] + 2;
						}
						else {
							bottomH[i + 1] = bottomH[i] + 1;
						}
					}
					else if (i/width+((Math.random()/2)-0.25) >= 0.55) {
						if (i/width+((Math.random()/2)-0.25) > 0.85) {
							bottomH[i + 1] = bottomH[i] - 2;
						}
						else {
							bottomH[i + 1] = bottomH[i] - 1;
						}
					}
					else {
						bottomH[i + 1] = bottomH[i];
					}
				}
				surfaceH = [bottomH[0]-1]
				for (i = 0; i < width; i++) { 
					if (Math.random() < 0.1) {
						surfaceH[i + 1] = surfaceH[i] + 1;
					}
					else if ((Math.random() >= 0.1) && (Math.random() < 0.2)) {
						surfaceH[i + 1] = surfaceH[i] - 1;
					}
					else {j/Math.max.apply(null,bottomH)
						surfaceH[i + 1] = surfaceH[i];
					}
				}
				for (i = pos[0]; i < width+pos[0]; i++) {surfaceH[i]
					for (j = surfaceH[i-pos[0]]; j < bottomH[i-pos[0]]; j++) {
						if (Math.random() < ((j-pos[1])/(Math.max.apply(null,bottomH)-pos[1]))) {
							(tiles[i])[j] = new tile(rock, j, i);
						}
						else {
							(tiles[i])[j] = new tile(dirt, j, i);
						}
					}
				}
				for (i = pos[0]; i < width+pos[0]; i++) {
					tiles[i][surfaceH[i-pos[0]]] = new tile(grass, surfaceH[i-pos[0]], i);
					if (Math.random() < 0.2) {
						for (j = 0;j < Math.floor(Math.random()*10)+4;j++) {
							tiles[i][surfaceH[i-pos[0]] - (1+j)] = new tile(normal_tree, surfaceH[i-pos[0]] - (1+j), i)
						}
					}
				}
			}
			