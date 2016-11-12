import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular 2</h1><courses></courses>
        <button (click)="onClick()">Submit</button>
        <button on-click="onClick()">Submit</button>
    `,
    directives: [CoursesComponent]
})
export class AppComponent { 
  onClick(){
    console.log('yes');
  }
}