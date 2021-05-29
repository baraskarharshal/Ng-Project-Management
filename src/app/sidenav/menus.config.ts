export interface Menu {
  name: string;
  icon: string;
  route: string;
  isActive?: boolean;
}

export const menuList = [
  {
    name: 'Projects',
    icon: 'fas fa-list-alt',
    route: '/',
    isActive: true
  },
  {
    name: 'Users',
    icon: 'fas fa-user-friends',
    route: '/users'
  },
  {
    name: 'Domains',
    icon: 'fas fa-th-large',
    route: '/domains'
  }
];
