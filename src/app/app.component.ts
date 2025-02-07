import { TuiRoot } from "@taiga-ui/core";
import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject, NgModule, OnInit} from '@angular/core';
import {TUI_DARK_MODE, TuiAppearance, TuiButton, TuiTitle, TuiDurationOptions, tuiScaleIn} from '@taiga-ui/core';
import {TuiHeader, TuiCell} from '@taiga-ui/layout';
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { P5SketchComponent } from "./p5-sketch/p5-sketch.component";
import {TuiAvatar, TuiMessage} from '@taiga-ui/kit';
import { AsyncPipe, CommonModule, NgIf } from "@angular/common";
import { tuiPure } from "@taiga-ui/cdk/utils/miscellaneous";

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet, TuiRoot, TuiButton, TuiHeader, TuiCell, TuiAvatar, TuiAppearance, TuiTitle, TuiMessage, ProjectsComponent, ExperienceComponent, P5SketchComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  animations: [tuiScaleIn],
})
export class AppComponent implements OnInit {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  protected speed = 6000;
  infoDiv!: HTMLElement;
  showText = true;
  interactedWithCanvas = false;
  toggledCount = 0;
  ngOnInit() {
    this.handleInfoSize();
    window.addEventListener('mousedown', (event: MouseEvent) => {
      let onCanvas = event.clientX > 0 && event.clientX < ((window.innerWidth - 1240) / 2) && event.clientY > 0 && event.clientY < window.innerHeight;
      if (onCanvas){
        this.interactedWithCanvas = true;
      }
    });
  }

  handleInfoSize() {
    this.infoDiv = document.getElementById('info-div') as HTMLElement;
    if (this.infoDiv) {
      this.infoDiv.style.maxWidth = ((window.innerWidth - 1240) / 2 ) - 75 + 'px';
      window.addEventListener('resize', () => {
        this.infoDiv.style.maxWidth = ((window.innerWidth - 1240) / 2 ) - 75 + 'px';
      });
    }
  }

  toggleShowText() {
    this.showText = !this.showText;
    if(!!this.showText){
      this.toggledCount++;
      if(this.toggledCount % 3 === 0){
        this.interactedWithCanvas = false;
      }
    }
    this.handleInfoSize();
  }

  hasInteractedWithCanvas() {
    return this.interactedWithCanvas;
  }
  
  @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }

  get themeIcon(): string {
    return this.darkMode() ? '@tui.sun' : '@tui.moon';
  }
}
