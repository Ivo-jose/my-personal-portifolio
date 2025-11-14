import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// Interface
import { KnowledgeItem } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<KnowledgeItem[]>([
    {
      src: 'assets/icons/knowledge/icons8-java-48.svg',
      alt:  'Java knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/icons8-spring-boot-48.svg',
      alt:  'Spring Boot knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/html-5-svgrepo-com.svg',
      alt:  'HTML 5 knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/css-3-svgrepo-com.svg',
      alt:  'CSS 3 knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/icons8-sass-48.svg',
      alt:  'Java knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/icons8-angularjs-50.svg',
      alt:  'Angular knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/icons8-javascript-50.svg',
      alt:  'JavaScript knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/icons8-nodejs-50.svg',
      alt:  'NodeJs knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/icons8-typescript-48.svg',
      alt:  'Java knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/icons8-mysql-48.svg',
      alt:  'MySQL knowledge icon'
    },
    {
      src: 'assets/icons/knowledge/mongo-svgrepo-com.svg',
      alt:  'Java knowledge icon'
    }
  ]);
}
