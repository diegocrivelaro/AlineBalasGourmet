// eslint-disable-next-line import/prefer-default-export
export const isMobile = (userAgent: string | null) => {
  const userAgents = {
    mobile: [
      /Android/i,
      /BlackBerry/i,
      /iPhone|iPad|iPod/i,
      /Opera Mini/i,
      /IEMobile/i,
      /NokiaN9/i,
    ],
  };

  return userAgents.mobile.some(mobileAgent => userAgent?.match(mobileAgent));
};

// TODO: Criar testes para essa função
export const formatCurrencyInReais = (value: number | undefined) => {
  if (value) {
    const valueInReais = value.toLocaleString(`pt-br`, {
      style: `currency`,
      currency: `BRL`,
    });

    return valueInReais;
  }

  return `R$ 0,00`;
};
