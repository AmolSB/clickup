import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, } from 'rxjs/operators';
import { WarriorService } from '../services/warriors.service';
import { loadWarriors, loadWarriorsSuccess } from './home.actions';

@Injectable({ providedIn: 'root' })
export class HomeEffects {
  loadWarriors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWarriors),
      mergeMap(() => this._warriorService.getPeopleList().pipe(
        map((warriors) => loadWarriorsSuccess({ warriors }), catchError(() => EMPTY))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private _warriorService: WarriorService,
    private store: Store
  ) { }
}
