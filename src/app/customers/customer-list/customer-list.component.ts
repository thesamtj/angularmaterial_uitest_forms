import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/customer';
import { CustomerProfileService } from 'src/app/services/customer-profile.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'modified',
    'action'
  ];
  dataSource = new MatTableDataSource<Customer>();
  selection = new SelectionModel<Customer>(true, []);
  loading = true;
  subscriptions = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private customerService: CustomerProfileService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.customerService.getAllCustomers().subscribe(customers => {
        console.log("customers loaded", customers);
        this.onDataLoad(customers);
      })
    );
  }

  onDataLoad(customers: Customer[]) {
    this.loading = false;
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    this.dataSource.data = customers;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Customer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.customerId + 1
    }`;
  }
}
