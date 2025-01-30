import { TuiRoot } from "@taiga-ui/core";
import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_DARK_MODE, TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiHeader, TuiAppearance, TuiTitle, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);

  get themeIcon(): string {
    return this.darkMode() ? '@tui.moon' : '@tui.sun';
  }
}
