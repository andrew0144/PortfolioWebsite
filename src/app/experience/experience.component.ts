import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TuiButton, TuiAppearance, TuiTitle, TuiSurface, TuiIcon } from '@taiga-ui/core';
import { TuiHeader, TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-experience',
  imports: [TuiCell, TuiButton, TuiHeader, TuiCardLarge, TuiAppearance, TuiTitle, TuiSurface, TuiIcon, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.less'
})
export class ExperienceComponent {

}
