import * as fromRoot from '../../../../data-source/store/root.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWarrior } from '../interfaces/warrior.interface';
import { createReducer, on } from '@ngrx/store';
import { loadWarriors, loadWarriorsError, loadWarriorsSuccess } from './home.actions';


export interface Home {
  warriors: IWarrior[]
}

export const initialState: Home = {
  warriors: [],
};


export const homeReducer = createReducer(
  initialState,
  on(loadWarriors, (state) => ({ ...state })),

  on(loadWarriorsSuccess, (state, { warriors }) => {
    warriors = convertStringValuesToInt(warriors);
    return {
      ...state,
      warriors,
    };
  }),
  on(loadWarriorsError, (state, { error }) => ({
    ...state,
    error,
    status: 'error'
  })),
);


export interface State extends fromRoot.State {
  'home': Home
}


const convertStringValuesToInt = (list: IWarrior[]) => {

  const clonedList: IWarrior[] = JSON.parse(JSON.stringify(list));

  clonedList.map((item, index) => {
    item.mass = +item.mass;
    item.height = +item.height;
    item.order = index + 1;
  });

  return clonedList;
}



