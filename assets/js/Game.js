class Game {
    constructor() {
        this.canvas = false;
        this.ctx = false;
        this.gameStatus = false;
        this.imgX = false;
        this.imgO = false;
        this.cells = [];
        this.turn = "player1";
    }

    init(canvas, imgX, imgO) {
        this.canvas = canvas;
        this.imgX = imgX;
        this.imgO = imgO;
        this.ctx = canvas.getContext('2d');

        for(var i = 0; i <= 2; i++) {
            let row = [];
            for(var j = 0; j <= 2; j++) {
                row.push({status:0, x: this.canvas.width*j/3, y: this.canvas.height*i/3, w: this.canvas.width/3, h: this.canvas.height/3});
            }
            this.cells.push(row);
        }
        this.render();
    }

    render() {
        this.drawBoard();
        requestAnimationFrame(() => {
            this.render()
        });
    }

    handleClick(mousePosition) {
        for(var i = 0; i<=2;i++) {
            for (var j =0; j<= 2; j++) {
                if(mousePosition.x >= this.cells[i][j].x && 
                    mousePosition.x <= this.cells[i][j].x + this.cells[i][j].w && 
                    mousePosition.y >= this.cells[i][j].y &&
                    mousePosition.y <= this.cells[i][j].y + this.cells[i][j].h) {
                        if (!this.cells[i][j].status) {
                            if(this.turn == "player1") {
                                this.cells[i][j].status = "x"
                                this.turn = "player2"
                            }else{
                                this.cells[i][j].status = "o"
                                this.turn = "player1"
                            }
                        }
                    }
            }
        }
    }

    drawBoard() {
        this.ctx.fillStyle = "#ccc";
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#555";
        this.ctx.moveTo(this.canvas.width/3, 0)
        this.ctx.lineTo(this.canvas.width/3, this.canvas.height)
        this.ctx.stroke()

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width*2/3, 0)
        this.ctx.lineTo(this.canvas.width*2/3, this.canvas.height)
        this.ctx.stroke()

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height / 3)
        this.ctx.lineTo(this.canvas.width, this.canvas.height/3)
        this.ctx.stroke()

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height * 2 / 3)
        this.ctx.lineTo(this.canvas.width, this.canvas.height*2/3)
        this.ctx.stroke()
    
        for(let i = 0; i<= 2;i++) {
            for(let j = 0; j<=2; j++) {
                if(this.cells[i][j].status == "x") {
                    this.ctx.drawImage(this.imgX, this.canvas.width*j/3 + 60, this.canvas.height*i/3 + 25, 150,150)
                }else if(this.cells[i][j].status == "o") {
                    this.ctx.drawImage(this.imgO, this.canvas.width*j/3 + 60, this.canvas.height*i/3 + 25, 150,150)
                }
            }
        }

    }
}