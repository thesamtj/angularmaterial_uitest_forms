import { SelectionModel } from '@angular/cdk/collections';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavItem } from '../../model/nav-item';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerProfileService } from '../../services/customer-profile.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'modified',
    'action',
  ];
  dataSource = new MatTableDataSource<Customer>();
  selection = new SelectionModel<Customer>(true, []);
  loading = true;
  subscriptions = [];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private customerService: CustomerProfileService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.subscriptions.push(
      this.customerService.getAllCustomers().subscribe((customers) => {
        console.log('customers loaded', customers);
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

  menu: NavItem[] = [
    {
      displayName: 'Samuel Tijani',
      iconName: 'desktop_windows',
      route: 'escritorio',
    },
    {
      displayName: 'Customer Service',
      iconName: 'description',
      children: [
        {
          displayName: 'Customer Profile',
          iconName: 'how_to_reg',
          route: '/customer-profile',
        },
        {
          displayName: 'Customer Profile',
          iconName: 'waves',
          route: '/customer-profile',
        },
      ],
    },
    {
      displayName: 'Customer Service',
      iconName: 'group',
      children: [
        {
          displayName: 'Customer Profile',
          iconName: 'search',
          route: '/busquedaperfiles',
        },
      ],
    },
  ];
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
