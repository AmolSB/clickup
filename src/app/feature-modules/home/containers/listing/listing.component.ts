import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IColumn } from '../../data-source/interfaces/column.interface';
import { IWarrior } from '../../data-source/interfaces/warrior.interface';
import { loadWarriors } from '../../data-source/store/home.actions';
import { Home } from '../../data-source/store/home.reducer';
import { getWarriors } from '../../data-source/store/home.selectors';

@Component({
  selector: 'cu-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  warriors$ = this._store.select(getWarriors);
  warriors: IWarrior[] = [];

  columns: IColumn[] = [
    {
      prop: 'order',
      displayValue: '#',
      isAscending: true,
      showSortIcon: false,
    },
    {
      prop: 'name',
      displayValue: 'Name',
      isAscending: true,
      showSortIcon: false,

    },
    {
      prop: 'height',
      displayValue: 'Height',
      isAscending: true,
      showSortIcon: false,

    },
    {
      prop: 'mass',
      displayValue: 'Mass',
      isAscending: true,
      showSortIcon: false,
    },
    {
      prop: 'hair_color',
      displayValue: 'Hair Color',
      isAscending: true,
      showSortIcon: false,
    }
  ]

  constructor(private _store: Store<Home>) { }

  ngOnInit(): void {
    this.warriors$.subscribe(warriors => {
      if (warriors && warriors.length) {
        this.warriors = JSON.parse(JSON.stringify(warriors));
      } else {
        this._store.dispatch(loadWarriors());
      }
    })
  }
}
