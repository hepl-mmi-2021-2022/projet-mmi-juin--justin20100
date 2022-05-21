import {Tools} from "./Tools";
import {IDrawable} from "../Interfaces/IDrawable";
import {settings} from "../settings";

export class Pillar extends Tools implements IDrawable{
    public width: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: { x: number; y: number }, width:number) {
        super(canvas, ctx, position);
        this.draw();
    }
    draw(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.position.x,this.position.y,this.width,settings.pillar.height);
    }
    update() {
    }
}