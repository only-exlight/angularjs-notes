import { IComponentOptions } from 'angular';
import { NoteService } from 'src/app/services/note.service';

class Menu {
  public titleText: string;
  public search: string;
  public appName: string;

  constructor(private noteService: NoteService) {
    this.search = this.noteService.query;
    this.appName =
      process.env.MODE === 'develop' ? `Notes ${process.env.VERSION}` : 'Notes';
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
