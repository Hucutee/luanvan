
import counterReducer from '../Components/Counter/countSlice';

const {configgureStore} = require('@reduxjs/toolkit')
const rootReducer = {
    counter: counterReducer,
};

const store = configgureStore({
    reducer: rootReducer,
});

export default store;