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
        settings.pillar.pillars.forEach((pillar) => {
            this.pillars.push(new Pillar(
                this.htmlCanvasElement,
                this.ctx,
                {settings.pillar.pillars.startPosition.x , settings.pillar.pillars.startPosition.y},
                (Math.random() * (settings.pillar.pillars.maxStartPosition - settings.pillar.minStartPosition) + settings.pillar.minStartPosition)-(Math.random() * (settings.pillar.maxEndPosition - settings.pillar.minEndPosition) + settings.pillar.minEndPosition),
            ))
        });
        this.addEventListeners();
        this.loadDrawable();
        this.draw();
    };

    addEventListeners() {
        this.htmlCanvasElement.addEventListener('mousedown', () => {
            this.update();
        })
        this.htmlCanvasElement.addEventListener('mouseup', () => {
            // Appeller la fonction pour faire tomber la barre
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