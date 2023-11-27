import { Component, Input, OnInit, inject } from '@angular/core';
import { SubjectItemService } from '../../services/subject.service';
import { SubjectA, SubjectResponse } from '../../models/subject.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css',
})
export class SubjectListComponent implements OnInit {
  subjectList!: SubjectA[];
  subjectInfo!: SubjectResponse;
  page: number = 0;
  constructor(private subjectService: SubjectItemService) {}
  ngOnInit(): void {
    this.loadNewPage();
  }
  loadNewPage() {
    this.subjectService.getAsignaturas(this.page).subscribe((resp) => {
      this.subjectList = resp.content;
      console.log(this.subjectList);
      this.subjectInfo = resp;
    });
  }
}