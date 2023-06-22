declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NEXT_PUBLIC_APPLICATION_WEB_LINK: string;
      NODE_ENV: `development` | `test` | `production`;
    }
  }
}

export {};
