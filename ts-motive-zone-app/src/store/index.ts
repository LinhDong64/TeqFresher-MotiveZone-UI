import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware, { runSaga } from 'redux-saga'
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();
const store = {
    ...createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run
}
export default store;