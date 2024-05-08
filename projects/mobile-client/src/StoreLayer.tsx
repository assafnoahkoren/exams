import { useLocalStore } from 'mobx-react-lite';
import React from 'react';
import { authStore } from '@shared/state/RootStore';

const StoreLayer = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}