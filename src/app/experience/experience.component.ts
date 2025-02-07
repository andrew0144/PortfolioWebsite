import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiTitle, TuiAppearance } from '@taiga-ui/core';
import { TuiCell } from '@taiga-ui/layout';
import { TuiChip } from '@taiga-ui/kit';
import { TuiHeader, TuiCardLarge } from '@taiga-ui/layout';
import { Card } from '../projects/projects.component';

@Component({
  selector: 'app-experience',
  imports: [
    TuiCell,
    TuiTitle,
    TuiChip,
    TuiAppearance,
    TuiCardLarge,
    CommonModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.less',
})
export class ExperienceComponent {
  cards: Card[] = [
    {
      title: 'Top Echelon Software · Software Engineer II',
      content: 'Implemented two main features, Automations & Sequencing, for Top Echelon’s Applicant Tracking System, TE Recruit. Automations allows users to automate their daiy workflow, giving them the power to create custom triggers and actions. Sequencing allows users to string together a series of Automations, allowing for higher-level automation and streamlining the recruiting process.',
      link: 'https://www.topechelon.com/',
      date: 'Jun 2023 - Jan 2025',
      chips: ['Angular', 'AngularJS', 'TypeScript', 'Ruby On Rails'],
    },
    {
      title: 'Top Echelon Software · Software Engineer Intern',
      content: 'Learned to work within an agile team environment, developing and maintaining features for Top Echelon’s Applicant Tracking System, TE Recruit. Built various "Quality of Life" features on the front-end and back-end, squashed numerous bugs, and wrote tests for the application.',
      link: 'https://www.topechelon.com/',
      date: 'Apr 2022 - Jan 2023',
      chips: ['Angular', 'AngularJS', 'TypeScript', 'Ruby On Rails'],
    },
    {
      title: 'Case Western Reserve University',
      content:
        'Bachelor of Arts in Computer Science; Bachelor of Arts in Cognitive Science.',
      link: 'https://case.edu',
      date: 'Aug 2019 - May 2023',
      chips: ['Java', 'Python', 'React', 'C#', 'Unity'],
    },
  ];
}
