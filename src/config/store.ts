import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import starshipReducer from '../features/starshipSlice.ts'; // Assurez-vous d'ajuster le chemin d'accès

const store = configureStore({
    reducer: {
        starship: starshipReducer,
    },
    devTools: true // TODO process.env.NODE_ENV !== 'production', // Activer Redux DevTools uniquement en développement
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
