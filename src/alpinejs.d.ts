declare module "alpinejs" {
  const Alpine: {
    start(): void;
    initTree(element: Element | null): void;
  };
  export default Alpine;
}
