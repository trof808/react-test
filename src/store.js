export default class Store {
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }

  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback());
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
  }
}

// function updateState(state, action) {
//     if(action.type === 'INCREMENT') {
//       return { count: state.count + action.count };
//     } else if(action.type === 'DECREMENT') {
//       return { count: state.count - action.count };
//     } else {
//       return state;
//     }
// }


// const initialState = { count: 0 }
//
// const store = new Store(updateState, initialState);
//
// const incrementAction = {
//   type: 'INCREMENT',
//   count: 5
// }
//
// const decrementAction = {
//   type: 'DECREMENT',
//   count: 3
// }
//
// const unsubscribe = store.subscribe(() => {console.log('state changed', store.state)})
//
// store.update(incrementAction)
// store.update(decrementAction)
// store.update({});
