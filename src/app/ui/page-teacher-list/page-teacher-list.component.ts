import { Component, TemplateRef } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/teacher-list-response';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-teacher-list',
  templateUrl: './page-teacher-list.component.html',
  styleUrl: './page-teacher-list.component.css'
})
export class PageTeacherListComponent {

  nombre: string = '';
  apellidos: string = '';
  fechaNacimiento: NgbDateStruct = { year: 2023, month: 1, day: 1 };
  email: string = '';
  telefono: string = '';
  username: string = '';
  password: string = '';
  nombreError: string = '';
  apellidosError: string = '';
  fechaNacimientoError: string = '';
  emailError: string = '';
  telefonoError: string = '';
  usernameError: string = '';
  passwordError: string = '';
  teacherList: Teacher[] = [];
  page = 0;
  count = 0;

  constructor(private teacherService: TeacherService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.teacherService.getAllTeacher().subscribe(resp => {
      this.teacherList = resp.content;
    });
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }

  createTeacher() { }

  loadNewPage() {
    this.teacherService.getTeacherListByPage(this.page).subscribe((resp) => {
      this.teacherList = resp.content;
      if (resp.totalElements > 1000) {
        this.count = 10000;
      } else {
        this.count = resp.totalElements;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    )
  }

}
