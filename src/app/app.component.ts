import { TuiRoot } from "@taiga-ui/core";
import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DARK_MODE, TUI_DARK_MODE_KEY, TuiButton, TuiOption} from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiOption],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'PortfolioWebsite';

  private readonly key = inject(TUI_DARK_MODE_KEY);
  private readonly storage = inject(WA_LOCAL_STORAGE);
  private readonly media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');

  protected readonly darkMode = inject(TUI_DARK_MODE);

  protected reset(): void {
      this.darkMode.set(this.media.matches);
      this.storage.removeItem(this.key);
  }

  get themeIcon(): string {
    return this.darkMode() ? '@tui.moon' : '@tui.sun';
  }
}
