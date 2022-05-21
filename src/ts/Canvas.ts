import {IDrawable} from "./Interfaces/IDrawable";
import {Pillar} from "./elements/Pillar";
import {settings} from "./settings";

export class Canvas {
    private readonly htmlCanvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private drawables: IDrawable[];
    public pillars: Pillar[];

    constructor() {
        this.htmlCanvasElement = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.htmlCanvasElement.getContext(settings.canvas.CanvasRenderingContext) as CanvasRenderingContext2D;
        this.drawables = [];
        this.pillars = [];
        for (let i = 0; i < settings.pillar.maxCount; i++){
            this.pillars.push( new Pillar(
                this.htmlCanvasElement,
                this.ctx,
                {x:settings.pillar.startPosition.x, y: settings.pillar.startPosition.y},
                Math.trunc(settings.pillar.width.min + Math.random() * (settings.pillar.width.max - settings.pillar.width.min))
            ))
        }
        this.addEventListeners();
        this.loadDrawable();
        this.draw();
    };
    addEventListeners() {
        this.htmlCanvasElement.addEventListener('mousedown', () => {
            // faire grandir le bridge
        })
        this.htmlCanvasElement.addEventListener('mouseup', () => {
            // faire tomber le bridge
        })
    };

    draw() {
        this.clear();
        this.drawables.forEach((drawable: IDrawable) => {
            drawable.draw();
        });
    };

    update() {
        this.drawables.forEach((drawable: IDrawable) => {
            drawable.update();
            drawable.draw();
        });
    };

    loadDrawable() {
        this.pillars.forEach((pillar: Pillar) => {
            this.drawables.push(pillar);
        });
    }

    clear() {
        this.ctx.clearRect(0, 0, this.htmlCanvasElement.width, this.htmlCanvasElement.height);
    };
}