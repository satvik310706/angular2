import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentName: string = "";
  studentGrade: string = "";
  students: { Name: string, Grade: string }[] = [];
  isEmpty: boolean = true;

  addStudent(nam: HTMLInputElement, grad: HTMLInputElement) {
    if (this.studentName.trim() !== '' && this.studentGrade.trim() !== '') {
      this.students.push({
        Name: this.studentName,
        Grade: this.studentGrade.toUpperCase()
      });
      this.isEmpty = false;
      this.studentName = "";
      this.studentGrade = "";
    } else {
      this.isEmpty = true;
    }
  }
}
