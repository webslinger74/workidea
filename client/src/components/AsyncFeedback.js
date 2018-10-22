import Loadable from 'react-loadable';
import React from 'react';

const LoadingComponent = () => <h3>Please Wait...</h3>

const FeedbackComponentPromise = () => {
    return import('./Feedback');
}

const AsyncFeedback = Loadable({
    loader:FeedbackComponentPromise,
    loading:LoadingComponent
});

export default AsyncFeedback;
