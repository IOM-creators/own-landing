// global.d.ts
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void; // gtag can accept multiple types of arguments
  }
}
