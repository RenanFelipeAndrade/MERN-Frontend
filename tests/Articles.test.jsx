import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { afterEach } from "vitest";
import { Articles } from "../src/components/Articles";
import { AuthContextProvider } from "../src/context/AuthContext";

afterEach(() => {
  cleanup();
});

describe("A Article component test", () => {
  it("Renders Article component and it's visible to the user", () => {
    const { container } = render(
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });
});
