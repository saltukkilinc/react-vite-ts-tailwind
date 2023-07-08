import {createModel} from '@rematch/core';
import {RootModel} from '../store';

// import AuthManager from './api';


export type AuthState = {
  name: string
};

const auth = createModel<RootModel>()({
  state: {
    name: 'saltuk'
  } as AuthState,

  reducers: {
    setName: (state: AuthState, name) => {
      return {
        ...state,
        name,
      };
    },
  
  },

  effects: dispatch => ({
    // async asyncGetUserLink(): Promise<void> {
    //   let response = await AuthManager.getUserLink();
    //   dispatch.search.setChosenCar(response.lastStateInfo.chosenCar);
    // },
  }),
});

export default auth;