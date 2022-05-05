export class Tools{
    protected readonly canvas: HTMLCanvasElement;
    protected readonly ctx: CanvasRenderingContext2D;
    protected position: {x:number,y:number};

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: { x: number; y: number }) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = position;
    }
}