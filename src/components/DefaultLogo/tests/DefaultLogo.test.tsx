import { render, screen, cleanup } from "@testing-library/react";

import DefaultLogo from "..";

describe(``, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test(`Check if the is rendering the company name`, () => {
    render(<DefaultLogo />);

    expect(screen.getByText(`Aline Balas Gourmet`)).toBeInTheDocument();
  });

  test(`Check if is rendering the link title`, () => {
    render(<DefaultLogo />);

    expect(
      screen.getByTitle(`Clique aqui para ir na página inicial`),
    ).toBeInTheDocument();
  });

  test(`Check if it's rendering the link with the correct href`, () => {
    render(<DefaultLogo />);

    expect(
      screen.getByTitle(`Clique aqui para ir na página inicial`),
    ).toHaveAttribute(`href`, `/`);
  });
});
