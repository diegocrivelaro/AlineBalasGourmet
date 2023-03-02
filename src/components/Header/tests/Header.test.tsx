import { render, screen, cleanup } from "@testing-library/react";

import Header from "..";

describe(`Header`, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test(`Check if the hamburger menu is showing on devices with a width equal to 768px`, () => {
    const customGlobal: any = global;
    customGlobal.innerWidth = 768;

    render(<Header />);

    const hamburgerMenu = screen.getByAltText(`Abrir menu de navegação`);

    expect(hamburgerMenu).toBeInTheDocument();
  });

  test(`Check if the hamburger menu is showing on devices with a width less than 768px`, () => {
    const customGlobal: any = global;
    customGlobal.innerWidth = 320;

    render(<Header />);

    const hamburgerMenu = screen.getByAltText(`Abrir menu de navegação`);

    expect(hamburgerMenu).toBeInTheDocument();
  });

  test(`Check that the hamburger menu is not showing on devices with a width greater than 768px`, () => {
    const customGlobal: any = global;
    customGlobal.innerWidth = 1024;

    render(<Header />);

    const hamburgerMenu = screen.queryByAltText(`Abrir menu de navegação`);

    expect(hamburgerMenu).not.toBeInTheDocument();
  });
});
