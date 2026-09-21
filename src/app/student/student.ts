import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  M_COLOR = "lightblue";
  F_COLOR = "pink"

  students: any[] = [
    { name: "Pippo", city: "Topolinia", gender: "M", present: true },
    { name: "Pluto", city: "Topolinia", gender: "M", present: false },
    { name: "Minni", city: "Topolinia", gender: "F", present: true },
    { name: "Paperina", city: "Paperopoli", gender: "F", present: true },
    { name: "Paperino", city: "Paperopoli", gender: "M", present: true },
    { name: "Gastone", city: "Paperopoli", gender: "M", present: false }

  ];

  getStyle(s:any) {
    return {
      'backgroundColor': s.gender == 'F' ? this.F_COLOR : this.M_COLOR,
      'textDecoration': s.present ? 'none' : 'underline',
      'fontWeight': s.present ? 'normal' : 'bold'
    }
  }

}
