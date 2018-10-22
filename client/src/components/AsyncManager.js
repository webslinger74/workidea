import Loadable from 'react-loadable';
import React from 'react';

const LoadingComponent = () => <h3>Please Wait...</h3>

const ManagerComponentPromise = () => {
    return import('./Manager');
}

const AsyncManager = Loadable({
    loader:ManagerComponentPromise,
    loading:LoadingComponent
});

export default AsyncManager;