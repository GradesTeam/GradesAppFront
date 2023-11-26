import { Component, Input } from '@angular/core';
import { AllReferenteDTO } from '../../models/referente-list.interface';

@Component({
  selector: 'app-teacher-referente-item',
  templateUrl: './teacher-referente-item.component.html',
  styleUrl: './teacher-referente-item.component.css'
})
export class TeacherReferenteItemComponent {
  @Input() referente !: AllReferenteDTO;
}
