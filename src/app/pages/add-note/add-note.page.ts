import { IComponentOptions } from 'angular';

class AddNote {}

export const AddNotePage: IComponentOptions = {
  template: require('./add-note.page.html'),
  controller: AddNote,
};
