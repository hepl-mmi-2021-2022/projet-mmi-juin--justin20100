import {Tools} from "./Tools";
import {IDrawable} from "../Interfaces/IDrawable";

export class Bridge extends Tools implements IDrawable{

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: { x: number; y: number }) {
        super(canvas, ctx, position);
        this.draw();
    }
    draw(){

    }
    update() {
    }
}