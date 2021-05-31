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
