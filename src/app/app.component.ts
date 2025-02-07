import { TuiRoot } from "@taiga-ui/core";
import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {TUI_DARK_MODE, TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { P5SketchComponent } from "./p5-sketch/p5-sketch.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiHeader, TuiAppearance, TuiTitle, ProjectsComponent, ExperienceComponent, P5SketchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  cursor!: HTMLElement;
  ngOnInit() {
    this.cursor = document.getElementById('cursor') as HTMLElement;
    document.addEventListener('mousemove', (e) => {
      this.cursor.style.left = (e.pageX - 60) + 'px';
      this.cursor.style.top = (e.pageY - 60) + 'px';
    });
  }

  get themeIcon(): string {
    return this.darkMode() ? '@tui.sun' : '@tui.moon';
  }
}
