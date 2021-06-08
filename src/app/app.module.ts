import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { mockDataInterceptorProvider } from './core/app.interceptor';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FilterPipe } from './core/filter.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './data-source/store/root.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [mockDataInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
