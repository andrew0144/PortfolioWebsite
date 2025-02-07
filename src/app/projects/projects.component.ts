import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  TuiAppearance,
  TuiTitle,
  TUI_DARK_MODE,
} from '@taiga-ui/core';
import { TuiHeader, TuiCardLarge } from '@taiga-ui/layout';
import { TuiChip } from '@taiga-ui/kit';

export type Card = {
  title: string;
  content: string;
  link: string;
  chips?: string[];
  date?: string;
};

@Component({
  selector: 'app-projects',
  imports: [
    TuiHeader,
    TuiCardLarge,
    TuiAppearance,
    TuiTitle,
    TuiChip,
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less',
})
export class ProjectsComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  cards: Card[] = [
    {
      title: 'Trend Wars',
      content:
        'A spunky multiplayer word game made using the Google Trends API, where you attempt to pair a word with the prompt in order to create the most trending phrase.',
      link: 'http://trendwars.net',
      chips: ['React', 'Python', 'JavaScript'],
    },
    {
      title: 'Data Stream',
      content:
        'A movement-focused platformer where you play as a virus in the bloodstream of a cyborg.',
      link: 'https://cwru-ecse390.itch.io/data-stream-f2022-team-3',
      chips: ['Unity', 'C#']
    },
    {
      title: 'The Rite of Redemption',
      content: 'A top-down puzzle/adventure game inspired by Legend of Zelda.',
      link: 'https://ecse-csds290.itch.io/rise-s2021-team-5',
      chips: ['Unity', 'C#']
    },
    {
      title: 'Markov Lyrics',
      content:
        'A song lyrics text generator that uses Markov chains to combine the styles of any musician or body of text you input.',
      link: 'https://github.com/andrew0144/markov_lyrics',
      chips: ['React', 'Python', 'Flask', 'JavaScript'],
    },
    {
      title: '8 Puzzle Solver',
      content:
        'Solves any instance of an 8-puzzle using A* search and local beam search, printing output and statistics about the algorithms along the way. ',
      link: 'https://github.com/andrew0144/CSDS393_P1',
      chips: ['Java'],
    },
    {
      title: 'This Site',
      content:
        'My new and improved portfolio website. Made using Angular/TypeScript, Taiga UI, p5.js, HTML and Less (CSS Preprocessor).',
      link: 'https://github.com/andrew0144/PortfolioWebsite',
      chips: ['Angular', 'TypeScript', 'Taiga UI', 'p5.js'],
    },
  ];
}
