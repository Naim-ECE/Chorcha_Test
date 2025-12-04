import { createStore, combineReducers } from 'redux';

const initialProductsState = {
  products: [],
};

const productReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    // Parse the JSON string back into an object
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state:", err);
    return undefined;
  }
};

// Function to save state to Local Storage
const saveState = (state) => {
  try {
    // Serialize the state object to a JSON string
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error("Could not save state:", err);
  }
};

// --- 3. Store Setup ---

// Combine all reducers
const rootReducer = combineReducers({
  productData: productReducer,
});

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState // Pass the loaded state here
);

store.subscribe(() => {
  // Only save the necessary parts of the state, e.g., only productData
  saveState({
    productData: store.getState().productData
  });
});

export default store;

// --- Example Usage (How to dispatch actions in another file) ---
/*
  import store from './store';

  store.dispatch({
    type: 'ADD_PRODUCT',
    payload: {
      id: 1,
      name: 'Futuristic Hoodie',
      price: 129.99,
    },
  });

  store.dispatch({
    type: 'ADD_PRODUCT',
    payload: {
      id: 2,
      name: 'Cyber Cap',
      price: 34.99,
    },
  });
  
  console.log(store.getState());
*/