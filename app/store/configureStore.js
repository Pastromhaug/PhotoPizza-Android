/**
 * Created by perandre on 05.08.16.
 */

import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore () {
    const store = createStore(rootReducer)

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers/index').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}