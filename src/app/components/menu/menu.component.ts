import { IComponentOptions } from 'angular';

class Menu {
  public title: string;

  public $onInit() {}
}

export const MenuComponent: IComponentOptions = {
  controller: Menu,
  template: require('./menu.component.html'),
  bindings: {
    title: '<',
  },
};
