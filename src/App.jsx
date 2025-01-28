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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        }
      >
        <Route
          index
          element={
            <>
              <Hero isDarkMode={isDarkMode} />
              <Documentaries isDarkMode={isDarkMode} />
              <Translators isDarkMode={isDarkMode} />
            </>
          }
        />
        <Route
          path="documentaries"
          element={<Documentaries isDarkMode={isDarkMode} />}
        />

        <Route
          path="DocumenterisFilter"
          element={<DocumenterisFilter isDarkMode={isDarkMode} />}
        />

        <Route
          path="translators"
          element={<Translators isDarkMode={isDarkMode} />}
        />
        <Route
          path="TranslatorsPages"
          element={<TranslatorsPages isDarkMode={isDarkMode} />}
        />
        <Route
          path="TranslatorDescription/:id"
          element={<TranslatorDescription isDarkMode={isDarkMode} />}
        />
        <Route
          path="Description/:id"
          element={<Description isDarkMode={isDarkMode} />}
        />

        <Route
          path="AnimailVideo/:id"
          element={<AnimailVideo isDarkMode={isDarkMode} />}
        />
      </Route>
    )
  );
  return (
    <RouterProvider
      router={router}
      isDarkMode={isDarkMode}
      toggleTheme={toggleTheme}
    />
  );
};

export default App;
