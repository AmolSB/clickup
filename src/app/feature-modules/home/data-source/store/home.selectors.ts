import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Home } from "./home.reducer";

export const getHomeState = createFeatureSelector<Home>('home');

export const getWarriors = createSelector(getHomeState,
  (state: Home) => state.warriors);
