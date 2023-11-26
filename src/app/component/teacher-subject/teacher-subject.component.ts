import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrl: './teacher-subject.component.css'
})
export class TeacherSubjectComponent{
  isInstrumentSelected: boolean = true;

  changeInstrument(isInstrumentClicked: boolean){
    this.isInstrumentSelected = isInstrumentClicked;
  }
}
