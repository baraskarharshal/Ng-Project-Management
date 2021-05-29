export interface Menu {
  name: string;
  icon: string;
  isActive?: boolean;
}

export const menuList = [
  {
    name: 'Home',
    icon: 'fas fa-home'
  },
  {
    name: 'Projects',
    icon: 'fas fa-th-large',
    isActive: true
  },
  {
    name: 'Billing',
    icon: 'fas fa-list-alt'
  },
  {
    name: 'Team Members',
    icon: 'fas fa-user-friends'
  },
  {
    name: 'Client',
    icon: 'fas fa-calculator'
  },
  {
    name: 'Settings',
    icon: 'fas fa-cog'
  }
];
