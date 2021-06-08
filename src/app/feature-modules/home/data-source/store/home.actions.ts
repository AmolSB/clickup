import { createAction, props } from '@ngrx/store';
import { IWarrior } from '../interfaces/warrior.interface';

export const loadWarriors = createAction('[Playlists Store/API]');

export const loadWarriorsSuccess = createAction(
  '[Home Store/API success]',
  props<{
    warriors: IWarrior[];
  }>()
);

export const loadWarriorsError = createAction(
  '[Playlists Store/API error]',
  props<{ error: string }>()
);
