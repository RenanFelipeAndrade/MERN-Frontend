import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { Notification } from "../src/components/Notification";

afterEach(() => {
  cleanup();
});

describe("A notification test", () => {
  it("Renders the notification component", () => {
    const { container } = render(
      <Notification show={true} variant={"is-primary"}>
        A notification!
      </Notification>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("Checks if child container is a span", () => {
    render(
      <Notification show={true} variant={"is-primary"}>
        A notification!
      </Notification>
    );

    const component = screen.getByText("A notification!");

    expect(component.nodeName).toBe("SPAN");
  });
});
