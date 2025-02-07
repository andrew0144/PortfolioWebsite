import { TuiRoot } from "@taiga-ui/core";
import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject, NgModule, OnInit} from '@angular/core';
import {TUI_DARK_MODE, TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader, TuiCell} from '@taiga-ui/layout';
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { P5SketchComponent } from "./p5-sketch/p5-sketch.component";
import {TuiAvatar, TuiMessage} from '@taiga-ui/kit';
import { CommonModule, NgIf } from "@angular/common";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiHeader, TuiCell, TuiAvatar, TuiAppearance, TuiTitle, TuiMessage, ProjectsComponent, ExperienceComponent, P5SketchComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  infoDiv!: HTMLElement;
  showText = true;
  ngOnInit() {
    this.handleInfoSize();
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
    this.handleInfoSize();
  }

  get themeIcon(): string {
    return this.darkMode() ? '@tui.sun' : '@tui.moon';
  }
}
