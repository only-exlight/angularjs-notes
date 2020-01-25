import { IComponentOptions } from 'angular';

class Menu {}

export const MenuComponent: IComponentOptions = {
  controller: Menu,
  template: require('./menu.component.html'),
};
