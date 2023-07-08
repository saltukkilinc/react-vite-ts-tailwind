import { init, RematchDispatch, RematchRootState, Models } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import auth from "./auth";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export interface RootModel extends Models<RootModel> {
  auth: typeof auth;
}

type FullModel = ExtraModelsFromLoading<RootModel>;

export const models: RootModel = {
  auth,
};

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin({})],
});
/* interface LoadingPlugin<M extends Models> {
	loading: {
		models: { [modelKey in keyof M]: M[modelKey]['name'] }
		effects: {
			[modelKey in keyof M]: ExtractRematchDispatchersFromEffects<
				M[modelKey]['effects']
			>
		}
		global: boolean
	}
} */
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;