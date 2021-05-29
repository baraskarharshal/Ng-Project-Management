export interface Menu {
  name: string;
  icon: string;
  isActive?: boolean;
}

export const menuList = [
  {
    name: 'Projects',
    icon: 'fas fa-list-alt',
    isActive: true
  },
  {
    name: 'Users',
    icon: 'fas fa-user-friends'
  },
  {
    name: 'Domains',
    icon: 'fas fa-th-large'
  }
];
