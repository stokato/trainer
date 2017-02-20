/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import {WorkoutPlan} from "../../model";
import {Router} from "@angular/router";
import {WorkoutService} from "../../services/workout.service";

const template = require('./start.component.html');
const css      = require('./start.component.css');

@Component({
    selector: 'start',
    template: template,
    styles:   [ css ],
    providers: [WorkoutService]
})
export class StartComponent /*implements OnInit, OnDestroy */{

    // public workoutList: Array<WorkoutPlan> = [];
    // public notFound: boolean = false;
    // public searchTerm: string;
    // private subscription: any;
    //
    // constructor(private router: Router, private workoutService: WorkoutService) {
    //
    // }
    //
    // ngOnInit() {
    //     this.subscription = this.workoutService.getWorkouts()
    //         .subscribe(
    //             workoutList => this.workoutList = workoutList,
    //             (err: any) => console.log(err)
    //         );
    // }
    //
    // onSelect(workout: WorkoutPlan) {
    //     this.router.navigate(['/workout', workout.name ]);
    // }
    //
    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }
}