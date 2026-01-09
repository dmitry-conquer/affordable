export default class Offers {
  private selectors: Record<string, string> = {
    root: "[data-offers]",
    item: "[data-offer]",
  };

  private rootEl: HTMLElement | null = null;

  constructor() {
    this.rootEl = document.querySelector(this.selectors.root);
    if (!this.rootEl) return;

    this.attachHoverListeners();
  }

  private attachHoverListeners(): void {
    const offerItems = this.rootEl?.querySelectorAll<HTMLElement>(this.selectors.item) || [];
    offerItems.forEach(item => {
      item.addEventListener("mouseenter", this.handleMouseEnter);
      item.addEventListener("mouseleave", this.handleMouseLeave);
    });
  }

  private handleMouseEnter = (event: MouseEvent): void => {
    const target = event.currentTarget as HTMLElement | null;
    target?.classList.add("is-active");
  };

  private handleMouseLeave = (event: MouseEvent): void => {
    const target = event.currentTarget as HTMLElement | null;
    target?.classList.remove("is-active");
  };
}
