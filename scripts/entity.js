/*
Made by 93951230 
whoever copy this file just for money gets curse by endless hell flame
*/
			var startButton = new function () {
                this.drawImg = document.getElementById("startImg");
                this.update = function () {
                    this.x = (canvas.width / 2)
                    this.y = (canvas.height / 2)
                }
                this.draw = function () {
                    ctx.drawImage(this.drawImg, this.x - 150, this.y - 50);
                }
            }
			function publicButton(Img,x,y,width,height,command,drawMethod) {
                this.drawImg = Img;
				this.height = height;
				this.width = width;
				this.x = x;
				this.y = y;
				this.command = command;
                this.draw = function () {
                    eval(drawMethod);
                }
            }
			////////////////////////////////////////////
			////////////////////////////////////////////
			function itemBar(hold) {
				this.x = (i*50)+10;
				this.selected = false;
				this.hold = hold;
				this.draw = function () {
					if (this.selected == true) {
						ctx.drawImage(imgs["Gui"][2],this.x,10);
					}
					else {
						ctx.drawImage(imgs["Gui"][1],this.x,10);
					}
					if (this.hold != null) {
						ctx.drawImage(this.hold.drawImg,this.x+10,20);
						ctx.fillText(String(this.hold.count), this.x+15,70);
						if (this.selected == true) {
							ctx.drawImage(this.hold.drawImg,character.x,character.y);
						}
					}
				}
			}
			////////////////////////////////////////////////////
			////////////////////////////////////////////////////
			var character = new function () {
				this.Time = 0;
                this.jCool = 0;
                this.ableA = 0;
                this.ableD = 0;
                this.upForce = 0;
                this.downForce = 0;
                this.height = 64;
                this.width = 22;
                this.collideVar = null;
                this.x = null;
                this.y = null;
				this.drawImg = imgs["Entity"][0];
                this.draw = function () {
                    ctx.drawImage(this.drawImg,this.x - 16,this.y - 32);
                }
                this.updating = function () {
					this.Time += 1;
                    CamX = -((XdrawVar / 45) - offset_X);
                    CamY = ((YdrawVar / 45) + (Math.floor((768-canvas.height)/90)));
                    //controll about
                    if (this.ableA != 0) {
                        this.ableA -= 1;
                    }
                    if (this.ableD != 0) {
                        this.ableD -= 1;
                    }
                    //jumping about
                    if (this.jumpTime != 0) {
                        this.jumpTime -= 1;
                    }
                    if (this.jCool != 0) {
                        this.jCool -= 1;
                    }
                    if (!(this.jumpTime)) {
                        if (this.downForce == 0) {
                            this.downForce = 2;
                        }
                    }
                    if (this.upForce != 0) {
                        this.upForce *= 0.99;
                    }
                    if (this.downForce < 10) {
                        this.downForce *= 1.02;
                    }
                    //falling
                    YdrawVar += this.upForce - this.downForce;
                }
                this.getXcollide = function () {
                    if (this.x > this.collideO.x + XdrawVar) {
                        this.ableA = 10;
                    }
                    if (this.x < this.collideO.x + XdrawVar) {
                        this.ableD = 10;
                    }
                }
                this.getYcollide = function () {
                    if (this.y > this.collideO.y + YdrawVar) {
                        this.downForce = 0;
                        this.upForce = 0;
                        this.jumpTime = 8;
                        this.jCool = 10;
                    }
                    else {
                        this.downForce = 0;
                        this.upForce = 0;
                        this.jumpTime = 8;
                        this.jumpAlready = false;
                    }
                }
                this.controlling = function () {
                    if (keyPressed["KeyD"]) {
                        if (this.ableD == 0) {
                            XdrawVar -= 3.5;
                        }
                    }
                    if (keyPressed["KeyA"]) {
                        if (this.ableA == 0) {
                            XdrawVar += 3.5;
                        }
                    }
                    if (keyPressed["KeyS"]) { }
                    if (keyPressed["Space"] || keyPressed["KeyW"]) {
                        if (((this.upForce <= 6) && (!(this.jumpAlready))) && ((this.jCool == 0) && (this.jumpTime != 0))) {
                            this.upForce += 6;
                            this.jumpAlready = true;
                        }
                    }
					for (i = 1; i <= itembar_amount;i++) {
						if (keyPressed["Digit"+String(i)]) {
							itembar[selectedBar].selected = false;
							selectedBar = i-1;
							itembar[selectedBar].selected = true;
						}
					}
                }
			}