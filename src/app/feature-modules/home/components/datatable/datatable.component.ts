import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragStart, CdkDropList, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { IWarrior } from '../../data-source/interfaces/warrior.interface';
import { IColumn } from '../../data-source/interfaces/column.interface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'cu-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() data: IWarrior[] = [];

  @Input() columns: IColumn[] = [];

  filterByNameFC = new FormControl('');

  previousIndex!: number;

  constructor() { }

  ngOnInit(): void {

  }

  sortData(column: IColumn) {
    if (column.isAscending) {
      this.data.sort((a: IWarrior, b: IWarrior) => a[column.prop] < b[column.prop] ? 1 : -1);
    } else {
      this.data.sort((a: IWarrior, b: IWarrior) => a[column.prop] > b[column.prop] ? 1 : -1);
    }
    column.isAscending = !column.isAscending;
  }

  dropRow(event: CdkDragDrop<any>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
  dropCol(event: CdkDragDrop<any>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

}
