/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */

import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {WorkoutPlan} from "../../model";
import {WorkoutService} from "../../services/workout.service";

@Injectable()
export class WorkoutGuard implements CanActivate {
    workout: WorkoutPlan;

    constructor(
        public workoutService: WorkoutService,
        public router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.workout = this.workoutService.getWorkout(route.params['id']);

        if(this.workout) {
            return true;
        }

        this.router.navigate(['/builder/workouts']);

        return false;
    }
}