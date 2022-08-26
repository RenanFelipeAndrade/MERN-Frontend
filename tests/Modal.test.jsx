import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { Modal } from "../src/components/Modal";

afterEach(() => {
  cleanup();
});

describe("Tests Modal component", () => {
  it("Renders Modal component", () => {
    const { container } = render(
      <Modal isVisible={true} setIsVisible={null}>
        test
      </Modal>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("Modal will not be redered if isVisible is false", () => {
    let isVisible = false;
    const { container } = render(
      <Modal isVisible={isVisible} setIsVisible={null}>
        test
      </Modal>
    );
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
