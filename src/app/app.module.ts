import { module } from 'angular';
import { Note } from './components/note/note.component';
import 'angular-route';
import { AddNotePage } from './pages/add-note/add-note.page';
import { NoteService } from './services/note.service';
import { NotesPage } from './pages/notes/notes.page';
import { MenuComponent } from './components/menu/menu.component';
import { NoteList } from './components/note-list/note-list.component';
import { StorageService } from './services/storage.service';

module('app', ['ngRoute'])
  .component('appNote', Note)
  .component('appMenu', MenuComponent)
  .component('appNoteList', NoteList)
  .service('noteService', NoteService)
  .service('storageService', StorageService)
  .config(($routeProvider: any) => {
    $routeProvider.when('/add-note', AddNotePage);
    $routeProvider.when('/', NotesPage);
  });
