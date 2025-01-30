import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TuiButton, TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiHeader, TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-projects',
  imports: [TuiButton, TuiHeader, TuiCardLarge, TuiAppearance, TuiTitle, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {
  cards = [
    {title: 'Card 1', content: 'Content 1'},
    {title: 'Card 2', content: 'Content 2'},
    {title: 'Card 3', content: 'Content 3'},
    {title: 'Card 4', content: 'Content 4'},
    {title: 'Card 5', content: 'Content 5'},
    {title: 'Card 6', content: 'Content 6'},
  ];
}
