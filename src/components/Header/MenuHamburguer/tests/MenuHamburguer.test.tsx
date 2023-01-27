import React, { useState } from "react";

import { render, screen, cleanup } from "@testing-library/react";

import MenuHamburguer from "..";

describe(`MenuHamburguer`, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  describe(`Imagem`, () => {
    test(`There should be an altText on the image`, () => {
      render(<MenuHamburguer />);

      expect(
        screen.getByAltText(`Abrir menu de navegação`),
      ).toBeInTheDocument();
    });

    test(`There should be an arialLabel on the image`, () => {
      render(<MenuHamburguer />);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `aria-label`,
        `Botão para abrir o menu de navegação`,
      );
    });

    // TODO: Finalize the tests for the true condition of the component
    /* test(`There should be a title on the image`, () => {
      render(<MenuHamburguer />);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `title`,
        `Abrirá o menu de navegação`,
      );
    });

    test(`There should be an altText on the image`, () => {
      render(<MenuHamburguer />);

      expect(
        screen.getByAltText(`Fechar menu de navegação`),
      ).toBeInTheDocument();
    });

    test(`There should be an arialLabel on the image`, () => {
      render(<MenuHamburguer />);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `aria-label`,
        `Botão para abrir o menu de navegação`,
      );
    });

    test(`There should be a title on the image`, () => {
      render(<MenuHamburguer />);

      expect(screen.getByRole(`img`)).toHaveAttribute(
        `title`,
        `Abrirá o menu de navegação`,
      );
    }); */
  });
});
