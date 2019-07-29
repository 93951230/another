/*
Made by 93951230 
whoever copy this file just for money gets curse by endless hell flame
*/

function drawTile(Img,x,y,breakP,light) {
	ctx.fillStyle = "#141012";
	ctx.drawImage(Img, (x - (usualLen / 2)) + XdrawVar, (y - (usualLen / 2)) + YdrawVar);
    ctx.globalAlpha = breakP;
    ctx.fillRect((x - ((usualLen - ((1 - breakP) * usualLen))) / 2) + XdrawVar, (y - ((usualLen - ((1 - breakP) * usualLen)) / 2)) + YdrawVar, usualLen - ((1 - breakP) * usualLen), usualLen - ((1 - breakP) * usualLen));
    ctx.globalAlpha = 1 - (light / 8);
    ctx.fillRect((x - ((usualLen + 1) / 2)) + XdrawVar, (y - ((usualLen + 1) / 2)) + YdrawVar, usualLen + 1, usualLen + 1);
    ctx.globalAlpha = 1.0;
}
			function dirt(X, Y) {
                this.light = 8;
                this.countX = X;
                this.countY = Y;
                this.breakTime = itemLibrary[this.constructor.name]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                if (Math.random() > 0.5) {
                    this.drawImg = imgs["Block"][0][0];
                }
                else {
                    this.drawImg = imgs["Block"][0][1];
                }
                this.draw = function () {
                    drawTile(this.drawImg,this.x,this.y,this.breakPhase,this.light);
                }
            }
            function rock(X, Y) {
                this.light = 8;
                this.countX = X;
                this.countY = Y;
                this.breakTime = itemLibrary[this.constructor.name]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                this.draw = function () {
                    drawTile(imgs["Block"][1],this.x,this.y,this.breakPhase,this.light);
                }
            }
            function grass(X, Y)
            {
                this.light = 8;
                this.countX = X;
                this.countY = Y;
                this.breakTime = itemLibrary[this.constructor.name]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
				if (Math.random() > 0.5) {
                    this.drawImg = imgs["Block"][2][0];
                }
                else {
                    this.drawImg = imgs["Block"][2][1];
                }
                this.update = function () { }
                this.draw = function () {
					drawTile(this.drawImg,this.x,this.y,this.breakPhase,this.light);
                }
            }
            function normal_tree(X, Y)
            {
                this.light = 8;
                this.countX = X;
                this.countY = Y;
				this.breakTime = itemLibrary[this.constructor.name]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                this.update = function () { }
                this.draw = function ()
                {
                    if (this.light != 0)
                    {
                        ctx.drawImage(imgs["Block"][3], (this.x - (usualLen / 2)) + XdrawVar, (this.y - (usualLen / 2)) + YdrawVar);
                        ctx.globalAlpha = this.breakPhase;
                        ctx.fillRect((this.x - ((usualLen - ((1 - this.breakPhase) * usualLen))) / 2) + XdrawVar, (this.y - ((usualLen - ((1 - this.breakPhase) * usualLen)) / 2)) + YdrawVar, usualLen - ((1 - this.breakPhase) * usualLen), usualLen - ((1 - this.breakPhase) * usualLen));
						ctx.globalAlpha = 1;
                    }
					itemLibrary[this.constructor.name]["method"](this.countX,this.countY);
                }
            }
            function air(X, Y) {
                this.light = 8;
                this.countX = X;
                this.countY = Y;
				this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                this.breakTime = Infinity;
                this.draw = function () { }
			}
            