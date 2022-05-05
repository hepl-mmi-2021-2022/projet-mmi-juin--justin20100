import {Pillar} from "./elements/Pillar";
import {settings} from "./settings";

export class Canvas {
    private readonly htmlCanvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public pillar: Pillar;

    constructor() {
        this.htmlCanvasElement = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.htmlCanvasElement.getContext(settings.canvas.CanvasRenderingContext) as CanvasRenderingContext2D;
        this.draw();
        this.addEventListeners();
    }

    addEventListeners() {
        this.htmlCanvasElement.addEventListener('mousedown',()=>{
            // Appeller la fontion pour faire grandir la barre
        })
        this.htmlCanvasElement.addEventListener('mouseup',()=>{
            // Appeller la fonction pour faire tomber la barre
        })
    }

    draw(){
        this.pillar = new Pillar(
            this.htmlCanvasElement,
            this.ctx,
            {x: (this.htmlCanvasElement.width / 2) - 50, y: (this.htmlCanvasElement.height / 2) - 50},
        );
    }

    update() {

    }
}