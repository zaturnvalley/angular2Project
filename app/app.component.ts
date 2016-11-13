import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular 2</h1><courses></courses>
        <div (click)="onDivClick()">
          <button (click)="onClick($event)">Submit</button>
        </div>
    `,
    directives: [CoursesComponent]
})
export class AppComponent { 
  onDivClick() {
    console.log('handled by div');
  }
  onClick($event){
    $event.stopPropagation();
    console.log('yes', $event);
  }
}