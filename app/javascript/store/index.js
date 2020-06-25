import { configureStore } from "@reduxjs/toolkit";

import user from "../features/user/user";
import categories from "../features/categories/categories";
import openings from "../features/openings/openings";
import savedSearches from "../features/savedSearches/savedSearches";

const store = configureStore({
  reducer: { user, categories, openings, savedSearches },
});

export default store;
