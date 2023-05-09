import { cleanup } from "@testing-library/react";

import { isMobile } from "../helpers";

describe(`Helpers`, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  describe(`isMobile Function`, () => {
    test(`Should return "true" if userAgent contains the word "Android"`, () => {
      const userAgentAndroid = `Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`;

      expect(isMobile(userAgentAndroid)).toEqual(true);
    });

    test(`Should return "true" if userAgent contains the word "Moto G (4)"`, () => {
      const userAgentAndroid = `Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36`;

      expect(isMobile(userAgentAndroid)).toEqual(true);
    });

    test(`Should return "true" if userAgent contains the word "IPhone"`, () => {
      const userAgentAndroid = `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1`;

      expect(isMobile(userAgentAndroid)).toEqual(true);
    });

    test(`Should return "true" if userAgent contains the word "NokiaN9"`, () => {
      const userAgentAndroid = `Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13`;

      expect(isMobile(userAgentAndroid)).toEqual(true);
    });

    test(`Should return "false" if the userAgent is not in the list of Mobile userAgents`, () => {
      const userAgentAndroid = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36`;

      expect(isMobile(userAgentAndroid)).toEqual(false);
    });
  });
});
