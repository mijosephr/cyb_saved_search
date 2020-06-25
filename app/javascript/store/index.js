import { configureStore } from "@reduxjs/toolkit";

import user from "../features/user/user";
import openings from "../features/openings/openings";
import savedSearches from "../features/savedSearches/savedSearches";

const store = configureStore({
  reducer: { user, openings, savedSearches },
});

export default store;
