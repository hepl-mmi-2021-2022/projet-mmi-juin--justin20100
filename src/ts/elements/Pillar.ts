import {Tools} from "./Tools";

export class Pillar extends Tools{
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: { x: number; y: number }) {
        super(canvas, ctx, position);
        this.draw();
    }

    draw(){
        this.ctx.fillRect(20,40,80,100);
    }
}