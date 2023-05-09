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
