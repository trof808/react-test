let state = 0;

function updateState(state, action) {
    if(action.type === 'INCREMENT') {
      return state + action.count;
    } else if(action.type === 'DECREMENT') {
      return state - action.count;
    } else {
      return state;
    }
}

class Store {
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
  }
}

const store = new Store(updateState, 0);

const incrementAction = {
  type: 'INCREMENT',
  count: 5
}

const decrementAction = {
  type: 'DECREMENT',
  count: 3
}

store.subscribe(() => {console.log('state changed', store.state)})

store.update(incrementAction)
store.update(decrementAction)
store.update({});
