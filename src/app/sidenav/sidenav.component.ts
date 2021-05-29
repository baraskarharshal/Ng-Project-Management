import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickMenu(menu: any, route: string) {
    this.menus.forEach(m => (m.isActive = false));
    menu.isActive = true;
    this.router.navigateByUrl(route);
    this.menuClick.emit(true);
  }
}
