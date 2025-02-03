import { TuiRoot } from "@taiga-ui/core";
import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_DARK_MODE, TuiAppearance, TuiButton, TuiTitle, TuiIcon} from '@taiga-ui/core';
import {TuiHeader, TuiCardLarge} from '@taiga-ui/layout';
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { P5SketchComponent } from "./p5-sketch/p5-sketch.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiHeader, TuiAppearance, TuiTitle, TuiIcon, ProjectsComponent, AboutComponent, ExperienceComponent, P5SketchComponent, TuiCardLarge],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);

  get themeIcon(): string {
    return this.darkMode() ? '@tui.sun' : '@tui.moon';
  }
}
