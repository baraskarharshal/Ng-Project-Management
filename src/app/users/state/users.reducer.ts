// import { User } from '../user.config';
// import { UserActionsTypes } from './users.actions';
// import { UserActions } from './users.actions';

// export interface UserState {
//   users: User[];
// }

// export const initialState: UserState = {
//   users: [
//     {
//       id: 1,
//       fname: 'Tom',
//       lname: 'Cruise',
//       role: 'Developer',
//       location: 'New York'
//     },
//     {
//       id: 2,
//       fname: 'Json',
//       lname: 'Bourne',
//       role: 'Tester',
//       location: 'San Francisco'
//     }
//   ]
// };

// export function usersReducer(
//   state = initialState,
//   action: UserActions
// ): UserState {
//   switch (action.type) {
//     case UserActionsTypes.ADD_USER: {
//       return Object.assign(state, {
//         ...state,
//         users: [...state.users, ...[action.payload]]
//       });
//     }

//     case UserActionsTypes.UPDATE_USER: {
//       state.users = state.users.filter(usr => usr.id != action.payload.id);
//       return Object.assign(state, {
//         ...state,
//         users: [...state.users, ...[action.payload]]
//       });
//     }

//     case UserActionsTypes.REMOVE_USER: {
//       state.users = state.users.filter(usr => usr.id != action.payload);
//       return Object.assign(state, {
//         ...state,
//         users: state.users
//       });
//     }

//     default: {
//       return state;
//     }
//   }
// }

import { createReducer, on } from '@ngrx/store';
import { User } from '../user.config';
import { addUser } from './users.actions';

export interface UserState {
  users: User[];
}

export const initialState = {
  users: [
    {
      id: 1,
      fname: 'Tom',
      lname: 'Cruise',
      role: 'Developer',
      location: 'New York'
    },
    {
      id: 2,
      fname: 'Json',
      lname: 'Bourne',
      role: 'Tester',
      location: 'San Francisco'
    }
  ]
};

const _usersReducer = createReducer(
  initialState,
  on(addUser, (state, { payload }) => {
    // if (state.indexOf(bookId) > -1) return state;
    return [...state, payload];
  })
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
