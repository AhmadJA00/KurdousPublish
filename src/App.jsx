import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React, { useState } from "react";
import Hero from "./components/Hero";
import Documentaries from "./components/Documentaries";
import DocumenterisFilter from "./Pages/DocumenterisFilter";

import Translators from "./components/Translators";
import TranslatorsPages from "./Pages/TranslatorsPages";
import TranslatorDescription from "./Pages/TranslatorDescription";
import Description from "./Pages/Description";
import AnimailVideo from "./Pages/AnimailVideo";
import MainLayout from "./Layout/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <>
              <Hero />
              <Documentaries />
              <Translators />
            </>
          }
        />
        <Route path="documentaries" element={<Documentaries />} />

        <Route path="DocumenterisFilter" element={<DocumenterisFilter />} />

        <Route path="translators" element={<Translators />} />
        <Route path="TranslatorsPages" element={<TranslatorsPages />} />
        <Route
          path="TranslatorDescription/:id"
          element={<TranslatorDescription />}
        />
        <Route path="Description/:id" element={<Description />} />

        <Route path="AnimailVideo/:id" element={<AnimailVideo />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
