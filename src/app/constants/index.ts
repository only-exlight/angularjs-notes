import { INoteAction } from '../interfaces';

export enum E_NOTE_ACTION {
  EDIT,
  REMOVE,
}

export const NOTE_ACTIONS: INoteAction[] = [
  {
    action: E_NOTE_ACTION.REMOVE,
    ico: 'la-trash',
    title: 'Remove note',
  },
  {
    action: E_NOTE_ACTION.EDIT,
    ico: 'la-edit',
    title: 'Edit note',
  },
];
