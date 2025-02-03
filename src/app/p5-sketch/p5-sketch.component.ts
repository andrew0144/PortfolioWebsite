import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-p5-sketch',
  templateUrl: './p5-sketch.component.html',
  styleUrls: ['./p5-sketch.component.css']
})
export class P5SketchComponent implements OnInit {

  @ViewChild('sketchContainer', { static: true })
  sketchContainer!: ElementRef;

  private p5Instance!: p5;

  constructor() { }

  ngOnInit(): void {
    this.createCanvas();
  }

  private createCanvas(): void {
    this.p5Instance = new p5((p: p5) => {
      let rez = 0.02;
      let size = 25;
      let colorStart = 0;

      p.setup = () => {
        let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        canvas.style('position', 'fixed');
        p.colorMode(p.HSB,360,100,100,100);
        colorStart = 168;//p.random(260);
        // p.noLoop();
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      }

      p.draw = () => {
        p.background(0);
        p.noStroke();

        for (let i = 0; i <= window.innerWidth; i += size) {
          for (let j = 0; j <= window.innerHeight; j += size) {
            let n1 = p.noise(i * rez, j * rez);
            let n2 = p.noise(i * rez+10000, j * rez+10000);
            let n3 = p.noise(i * rez+20000, j * rez+20000);
            const drawRect = () => p.rect(i, j, size, size);
            const drawCircle = () => p.ellipse(i + size / 2, j + size / 2, size, size);
            const drawTriangle = () => p.triangle(i + size / 2, j, i + size, j + size, i, j + size);
            const drawLine = () => p.line(i, j, i + size, j + size);
            const fillMain = (num: number) => p.fill(p.floor(num * 100) + colorStart, 100, 100, 100);
            const fillOff = (num: number) => p.fill(p.floor(100 - (num * 100)) + colorStart, 100, 100, 100);
            const boundsScale = 2;
            const withinBounds = () => p.mouseX > i - ((boundsScale - 1) * size)
              && p.mouseX < i + (boundsScale * size) 
              && p.mouseY > j - ((boundsScale - 1)* size)
              && p.mouseY < j + (boundsScale * size);
            const conditionalFill = (num: number) => withinBounds() ? fillMain(num) : fillOff(num);

            if (n1 < 0.33) {
              conditionalFill(n1);
              drawRect();
            } else if (n1 < 0.66) {
              conditionalFill(n2);
              drawRect();
            } else {
              conditionalFill(n3);
              drawRect();
            }
          }
        }

      };
    }, this.sketchContainer.nativeElement);
  }

}