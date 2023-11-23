declare module "express" {
  export default function express(): ExpressApp;

  interface ExpressApp {
    functionDoesntExist(): void;
  }
}
