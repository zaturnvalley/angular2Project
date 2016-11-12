import {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component({
  selector: 'courses',
  template: `
      <h1>Courses</h1>
      <h3>{{title}}</h3>
      <br>
      <img src="{{imageUrl}}" />
      <ul>
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
      </ul>
      `,
  providers: [CourseService]
})
export class CoursesComponent {
  title = 'The title of the courses page';
  courses;
  imageUrl = 'http://lorempixel.com/400/200/';

  constructor(courseService: CourseService){
      this.courses = courseService.getCourses();
  }
}