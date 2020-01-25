import { IComponentOptions } from 'angular';

class Notes {}

export const NotesPage: IComponentOptions = {
  controller: Notes,
  template: require('./notes.page.html'),
};
