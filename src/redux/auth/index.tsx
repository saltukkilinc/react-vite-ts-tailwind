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
    async getNameAsync(payload:string, state): Promise<void> {
      // Bu kısım pluginleri ve async operasyonu test etmek için oluşturuldu.Burada sadece bir promise oluşturuldu.Promise handle edilmedi.
      // error olayını loading pluginiyle home page de yakalamak için isError ' u true yap
      await new Promise((resolve, reject) => setTimeout(() => {
        const isError = false;
        if(isError) {
          reject(new Error("there is an error"))
        }
        resolve("")
      }, 3000));
      dispatch.auth.setName(payload);
    }
  }),
});

export default auth;