import React from 'react';
import AppPresenter from './AppPresenter';

const isInput = false;
console.log(process.env.PUBLIC_URL);
const AppContainer = () => <AppPresenter isInput={isInput} />;

export default AppContainer;
