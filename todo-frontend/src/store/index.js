
// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const storedUserData = localStorage.getItem("userData");
// let initialUser = "";
// let isLoggedIn = false;

// if (storedUserData) {
//   try {
//     initialUser = JSON.parse(storedUserData);
//     isLoggedIn = true; 
//   } catch (error) {
//     console.error("Error parsing user data from localStorage:", error);
//   }
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState: { user: initialUser, isLoggedIn },
//     reducers: {
//       setIsLoggedIn: (state, action) => {
//         state.isLoggedIn = action.payload.isLoggedIn;
//         state.user = action.payload.user || "";
//       },
//       setUser: (state, action) => {
//         state.user = action.payload;
//       },
//       logout: (state) => {
//         state.isLoggedIn = false;
//         state.user = "";
//         localStorage.removeItem("userData");
//       },
//     },
//   });
  

// export const authActions = authSlice.actions;

// export const store = configureStore({
//   reducer: { auth: authSlice.reducer },
// });
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Function to load user data from localStorage
const loadUserData = () => {
  const storedUserData = localStorage.getItem("userData");
  if (storedUserData) {
    try {
      return { user: JSON.parse(storedUserData), isLoggedIn: true };
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
    }
  }
  return { user: "", isLoggedIn: false };
};

// Load initial state from localStorage
const initialState = loadUserData();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user || "";
      // Persist user data in localStorage
      localStorage.setItem("userData", JSON.stringify(state.user));
    },
    setUser: (state, action) => {
      state.user = action.payload;
      // Persist user data in localStorage
      localStorage.setItem("userData", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = "";
      localStorage.removeItem("userData");
    },
  },
});

// Export actions and store
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
