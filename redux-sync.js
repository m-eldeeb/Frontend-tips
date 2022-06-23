/*
    Redux (toolkit) ==> 

    View ====> dispatch(action) ====> Reducer ====> Store

    We use reduxToolkit + ract-redux 
*/

/*
    We create a feature folder

    inside it we create slices
*/

import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
        id: "1",
        title: "javascript new course",
        content: "Ese6 - JavaScript - typeScript"
    }]

    const postSlice = createSlice({
        name: "posts",
        initialState,
        reducers: {
          postAdded: {
            reducer(state, action) {
              state.posts.push(action.payload);
            },
            prepare(title, content ) { // for preparing payload inside slice instead of components
              return {
                payload: {
                  id: nanoid(),
                  title,
                  content,
                  },
                },
            }
            },
          }
        
        })

    export const { reactionAdded } = postSlice.actions;
    export default postSlice.reducer;


    
/*
    We create a store and supply it with reducers or middleware functions
    
*/

import postsReducer from "./features/posts/postSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    posts: postsReducer,
   
  },
});


/*
    provide app with store ==> index.js file

*/

import { Provider } from "react-redux";
import { store } from "./app/store";

root.render(
  <Provider store={store}>
   <App/>
    </BrowserRouter>
  </Provider>
);

/*
    To use state and actions in components
*/

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice"; // actions from slice

const dispatch = useDispatch(); 
dispatch(fetchPosts) 


const { posts, status, error } = useSelector( // to get state 
    (state) => state.posts // access to posts in store and desctruct state from slice (initialState)
  );