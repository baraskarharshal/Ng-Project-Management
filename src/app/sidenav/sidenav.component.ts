import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from './menus.config';
import { menuList } from './menus.config';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() menuClick: EventEmitter<boolean> = new EventEmitter();

  menus: Menu[] = menuList;

  constructor() {}

  ngOnInit(): void {}

  onClickMenu(menu: any) {
    this.menus.forEach(m => (m.isActive = false));
    menu.isActive = true;
    this.menuClick.emit(true);
  }
}
