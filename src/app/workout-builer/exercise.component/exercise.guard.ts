/**
 * Created by "s.t.o.k.a.t.o" on 22.02.2017.
 */

import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Exercise} from "../../model";
import {WorkoutService} from "../../services/workout.service";

@Injectable()
export class ExerciseGuard implements CanActivate {
    exercise: Exercise;

    constructor (
       private workoutService: WorkoutService,
       private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.exercise = this.workoutService.getExercise(route.params['id']);

        if(this.exercise) {
            return true;
        }

        this.router.navigate(['/builder/exercises']);

        return false;
    }
}