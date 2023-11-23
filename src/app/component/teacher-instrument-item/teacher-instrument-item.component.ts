import { Component, Input } from '@angular/core';
import { InstrumentoListResponse } from '../../models/instrumento-list.interface';

@Component({
  selector: 'app-teacher-instrument-item',
  templateUrl: './teacher-instrument-item.component.html',
  styleUrl: './teacher-instrument-item.component.css'
})
export class TeacherInstrumentItemComponent {
  @Input() instrument!: InstrumentoListResponse
  
  popoverClicked(event: MouseEvent) {
  event.stopPropagation();
  }
  
}
