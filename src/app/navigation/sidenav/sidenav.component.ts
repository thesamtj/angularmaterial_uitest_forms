import { SelectionModel } from '@angular/cdk/collections';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavItem } from "../../model/nav-item";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  modified: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'PAUL AKPABIO', weight: 1.0079, symbol: 'Head Office', modified: 'Samuel'},
  { position: 2, name: 'TUNDE PHILIPS', weight: 4.0026, symbol: 'Head Office', modified: 'Samuel'},
  { position: 3, name: 'PETER JAMES', weight: 6.941, symbol: 'Head Office', modified: 'Samuel'},
  { position: 4, name: 'SOLOMON ATTAI', weight: 9.0122, symbol: 'Head Office', modified: 'Samuel'},
  { position: 5, name: 'MARGARET ', weight: 10.811, symbol: 'Head Office', modified: 'Samuel'},
  { position: 6, name: 'KIKELOMO', weight: 12.0107, symbol: 'Head Office', modified: 'Samuel'},
  { position: 7, name: 'ADEKUNLE', weight: 14.0067, symbol: 'Head Office', modified: 'Samuel'},
  { position: 8, name: 'ADISA ', weight: 15.9994, symbol: 'Head Office', modified: 'Samuel'},
  { position: 9, name: 'PAUL', weight: 18.9984, symbol: 'Head Office', modified: 'Samuel'},
  { position: 10, name: 'DEBORAH', weight: 20.1797, symbol: 'Head Office', modified: 'Samuel'},
];
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'modified'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  menu: NavItem[] = [
    {
      displayName: 'Escritorio',
      iconName: 'desktop_windows',
      route: 'escritorio',
    },
    {
      displayName: 'Entradas GADE',
      iconName: 'ballot',
      route: 'entradasGADE',
    },
    {
      displayName: 'Customer Service',
      iconName: 'description',
      children: [
        {
          displayName: 'Customer Profile',
          iconName: 'how_to_reg',
          route: '/misexpedientes',
        },
        {
          displayName: 'Todos',
          iconName: 'waves',
          route: '/todos',
        },
      ],
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
        {
          displayName: 'Búsqueda Perfil',
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
