import {createModel} from '@rematch/core';
import {RootModel} from '../store';

// import AuthManager from './api';


export type CountState = {
  name: string
};

const count = createModel<RootModel>()({
  state: {
    name: 'saltuk'
  } as CountState,

  reducers: {
    setName: (state: CountState, name) => {
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
      dispatch.count.setName(payload);
    }
  }),
});

export default count;