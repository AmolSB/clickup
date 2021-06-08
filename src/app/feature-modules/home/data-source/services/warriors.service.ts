import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWarrior } from '../interfaces/warrior.interface';

@Injectable({
  providedIn: 'root'
})
export class WarriorService {

  apiBase = environment.apiBase;

  constructor(private _http: HttpClient) {
  }

  getPeopleList(): Observable<IWarrior[]> {
    const url = `${this.apiBase}warriors/`
    return this._http.get<IWarrior[]>(url);
  }
}
