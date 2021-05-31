// import { Action } from '@ngrx/store';
import { User } from '../user.config';

// export const UserActionsTypes = {
//   ADD_USER: '[Users] Add User',
//   UPDATE_USER: '[Users] Update User',
//   REMOVE_USER: '[Users] Remove User'
// };

// export class AddUser implements Action {
//   type = UserActionsTypes.ADD_USER;
//   constructor(public payload: User) {}
// }

// export class UpdateUser implements Action {
//   type = UserActionsTypes.UPDATE_USER;
//   constructor(public payload: User) {}
// }

// export class RemoveUser implements Action {
//   type = UserActionsTypes.REMOVE_USER;
//   constructor(public payload: number) {}
// }

// export type UserActions = AddUser | UpdateUser | RemoveUser;

import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
  '[Users] Add User',
  props<{ payload: User }>()
);
