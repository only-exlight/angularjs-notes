import { AddNotePage } from './pages/add-note/add-note.page';
import { NotesPage } from './pages/notes/notes.page';

export class Config {
  constructor($routeProvider: any) {
    $routeProvider.when('/add-note', AddNotePage);
    $routeProvider.when('/edit-note/:id', AddNotePage);
    $routeProvider.when('/', NotesPage);
  }
}

Config.$inject = ['$routeProvider'];
