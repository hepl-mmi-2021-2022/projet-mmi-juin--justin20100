import {Tools} from "./Tools";
import {IDrawable} from "../Interfaces/IDrawable";
import {settings} from "../settings";

export class Pillar extends Tools implements IDrawable{
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: { x: number; y: number },width:number) {
        super(canvas, ctx, position);
        this.draw();
    }
    draw(){
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.fillRect(30,30,60,settings.pillar.height);
    }
    update() {
    }
}