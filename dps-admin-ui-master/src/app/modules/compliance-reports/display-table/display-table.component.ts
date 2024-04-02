import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.scss']
})
export class DisplayTableComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<any>;
  @Input() displayedColumns: string[];
    // Add ViewChild references
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
        // Configure pagination and sorting
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  }

}
