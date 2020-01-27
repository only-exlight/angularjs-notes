import { IComponentOptions } from 'angular';
import { NoteService } from 'src/app/services/note.service';

class Menu {
  public titleText: string;
  public search: string;

  constructor(private noteService: NoteService) {
    this.search = this.noteService.query;
  }

  public change() {
    this.noteService.filterNotes(this.search);
  }

  public clear() {
    this.search = '';
    this.noteService.filterNotes(this.search);
  }
}

Menu.$inject = ['noteService'];

export const MenuComponent: IComponentOptions = {
  controller: Menu,
  template: require('./menu.component.html'),
  bindings: {
    titleText: '<',
  },
};
