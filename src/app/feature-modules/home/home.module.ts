import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShellComponent } from './shell/shell.component';
import { ListingComponent } from './containers/listing/listing.component';
import { HomeComponent } from './home.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from 'src/app/core/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './data-source/store/home.effects';
import { homeReducer } from './data-source/store/home.reducer';


@NgModule({
  declarations: [HomeComponent, ShellComponent, ListingComponent, DatatableComponent, FilterPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
