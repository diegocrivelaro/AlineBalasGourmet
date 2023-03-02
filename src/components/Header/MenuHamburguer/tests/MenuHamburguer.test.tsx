import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MenuHamburguer from "..";

describe(`MenuHamburguer`, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  describe(`Behavior`, () => {
    test(`Check if menu is opening after user click on menu image`, async () => {
      render(<MenuHamburguer />);

      const getImageMenu = screen.getByRole(`img`);

      await userEvent.click(getImageMenu);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `aria-describedby`,
        `Botão para fechar o menu de navegação`,
      );
    });
  });

  describe(`Imagem`, () => {
    test(`Should contain an AltText on the image with the text "Abrir menu de navegação"`, () => {
      render(<MenuHamburguer />);

      expect(
        screen.getByAltText(`Abrir menu de navegação`),
      ).toBeInTheDocument();
    });

    test(`Should contain an AriaDescribedby on the image with the text "Botão para abrir o menu de navegação"`, () => {
      render(<MenuHamburguer />);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `aria-describedby`,
        `Botão para abrir o menu de navegação`,
      );
    });

    test(`Should contain a title as an image attribute with the following text "Abrirá o menu de navegação"`, () => {
      render(<MenuHamburguer />);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `title`,
        `Abrirá o menu de navegação`,
      );
    });

    test(`There should be an altText with the text "Fechar menu de navegação" after clicking the button to open the menu`, async () => {
      render(<MenuHamburguer />);

      const getImageMenu = screen.getByRole(`img`);

      await userEvent.click(getImageMenu);

      expect(
        screen.getByAltText(`Fechar menu de navegação`),
      ).toBeInTheDocument();
    });

    test(`There should be an ariaDescribedby with the text "Botão para fechar o menu de navegação" after clicking the button to open the menu`, async () => {
      render(<MenuHamburguer />);

      const getImageMenu = screen.getByRole(`img`);

      await userEvent.click(getImageMenu);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `aria-describedby`,
        `Botão para fechar o menu de navegação`,
      );
    });

    test(`Should have a title as an attribute with the text "Fechará o menu de navegação" after clicking on the button to open the menu`, async () => {
      render(<MenuHamburguer />);

      const getImageMenu = screen.getByRole(`img`);

      await userEvent.click(getImageMenu);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `title`,
        `Fechará o menu de navegação`,
      );
    });
  });
});
