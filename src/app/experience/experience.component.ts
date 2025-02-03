import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiTitle} from '@taiga-ui/core';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-experience',
  imports: [TuiCell, TuiTitle, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.less'
})
export class ExperienceComponent {

}
