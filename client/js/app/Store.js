import React from 'react';

let Store = React.createContext(null);

let initialState = {
  user: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "AUTH_SET_USER":
    return { ...state, user: action.payload };
  }
};

function StoreProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <Store.Provider value={value}>{props.children}</Store.Provider>
  );
}

let StoreConsumer = Store.Consumer;

let withStore = Component => props => (
  <StoreConsumer>
    {store => <Component {...props} store={store} />}
  </StoreConsumer>
);

export { Store, StoreProvider, StoreConsumer, withStore };
