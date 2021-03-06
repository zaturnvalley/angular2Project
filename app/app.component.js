System.register(['angular2/core', './courses.component', './favorite.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, favorite_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular App';
                    this.post = {
                        title: 'Title',
                        isFavorite: true
                    };
                }
                AppComponent.prototype.onDivClick = function () {
                    console.log('handled by div');
                };
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('yes', $event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <favorite [isFavorite]=\"post.isFavorite\"></favorite>\n        <h1>Hello Angular 2</h1><courses></courses>\n        <div (click)=\"onDivClick()\">\n          <button (click)=\"onClick($event)\">Submit</button>\n        </div>\n        <input type='button' (click)=\"title = ''\" value=\"Clear\"/>\n        <input type='text' [(ngModel)]=\"title\" />\n        Preview: {{ title }}\n    ",
                        directives: [courses_component_1.CoursesComponent, favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map