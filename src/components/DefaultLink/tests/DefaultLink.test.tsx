import { render, screen, cleanup } from "@testing-library/react";

import DefaultLink from "..";

describe(`DefaultLink - General`, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  const mockProps = {
    href: `https://mocked-href.com`,
    titleAccessibility: `Mocked title accessibility`,
  };

  test(`Check if the href receives the link by prop`, () => {
    render(<DefaultLink {...mockProps}>Mocked Children</DefaultLink>);

    expect(screen.getByRole(`link`)).toHaveAttribute(
      `href`,
      `https://mocked-href.com`,
    );
  });

  test(`Check if DefaultLink has titleAccessibility prop`, () => {
    render(<DefaultLink {...mockProps}>Mocked Children</DefaultLink>);

    expect(screen.getByTitle(`Mocked title accessibility`)).toBeInTheDocument();
  });
});
