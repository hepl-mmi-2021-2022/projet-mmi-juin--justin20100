import {Pillar} from "./elements/Pillar";

export class Canvas {
    private readonly htmlCanvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public pillar: Pillar;

    constructor() {
        this.htmlCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.htmlCanvasElement.getContext('2d') as CanvasRenderingContext2D;
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