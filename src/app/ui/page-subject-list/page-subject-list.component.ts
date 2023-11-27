import { Component } from '@angular/core';
import { SubjectA } from '../../models/subject.interface';

@Component({
  selector: 'app-page-subject-list',
  templateUrl: './page-subject-list.component.html',
  styleUrl: './page-subject-list.component.css',
})
export class PageSubjectListComponent {
  SubjectAList: SubjectA[] = [];
  page = 0;
}
