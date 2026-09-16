import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  students: any[] = [
    { name: "Pippo", city: "Topolinia", gender: "M", present: true },
    { name: "Pluto", city: "Topolinia", gender: "M", present: false },
    { name: "Minni", city: "Topolinia", gender: "F", present: true },
    { name: "Paperina", city: "Paperopoli", gender: "F", present: true },
    { name: "Paperino", city: "Paperopoli", gender: "M", present: true },
    { name: "Gastone", city: "Paperopoli", gender: "M", present: false }

  ];
}
