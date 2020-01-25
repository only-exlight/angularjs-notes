import { module } from 'angular';
import { Note } from './components/note/note.component';
import 'angular-route';
import { AddNotePage } from './pages/add-note/add-note.page';

module('app', ['ngRoute'])
  .component('note', Note)
  .config(($routeProvider: any) => {
    $routeProvider.when('/add-note', AddNotePage);
  });
