import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const INITIAL_STATE = [];
const ENDPOINT = "/blogPosts";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_POSTS":
      return action.payload;
    case "EDIT_BLOG_POST":
      return [
        ...state.filter(el => +el.id !== +action.payload.id),
        action.payload
      ];
    case "DELETE_BLOG_POST":
      return state.filter(el => +el.id !== +action.payload);
    default:
      return state;
  }
};

const getBlogPosts = dispatch => async () => {
  const { data: payload } = await jsonServer.get(ENDPOINT);
  dispatch({ type: "GET_BLOG_POSTS", payload });
};

const addBlogPost = dispatch => async (payload, callback) => {
  await jsonServer.post(ENDPOINT, payload);
  if (callback) callback();
};

const deleteBlogPost = dispatch => async id => {
  await jsonServer.delete(`${ENDPOINT}/${id}`);
  dispatch({ type: "DELETE_BLOG_POST", payload: id });
};

const editBlogPost = dispatch => async (payload, callback) => {
  await jsonServer.put(`${ENDPOINT}/${payload.id}`, payload);

  dispatch({ type: "EDIT_BLOG_POST", payload });
  if (callback) callback();
};

const actions = { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts };

export const { Context, Provider } = createDataContext(
  blogReducer,
  actions,
  INITIAL_STATE
);
