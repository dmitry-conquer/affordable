export default class Offers {
  private selectors: Record<string, string> = {
    root: "[data-offers]",
    item: "[data-offer]",
  };

  private rootEl: HTMLElement | null = null;
  private isTouch = false;

  constructor() {
    this.rootEl = document.querySelector(this.selectors.root);
    if (!this.rootEl) return;

    this.isTouch = this.detectTouch();
    this.attachListeners();
  }

  private detectTouch(): boolean {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia?.("(pointer: coarse)")?.matches ||
      window.matchMedia?.("(hover: none)")?.matches
    );
  }

  private attachListeners(): void {
    if (!this.isTouch) return;
    this.rootEl?.addEventListener("click", this.handleRootClick);
    document.body.addEventListener("click", (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(this.selectors.item);
      if (target && this.rootEl?.contains(target)) return;
      this.rootEl?.querySelectorAll<HTMLElement>(this.selectors.item).forEach(el => {
        this.removeActive(el);
      });
    });
  }

  private setActive(target: HTMLElement | null): void {
    target?.classList.add("is-active");
  }

  private removeActive(target: HTMLElement | null): void {
    target?.classList.remove("is-active");
  }

  private handleRootClick = (event: MouseEvent): void => {
    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(this.selectors.item);
    if (!target || !this.rootEl?.contains(target)) return;

    if (target.classList.contains("is-active")) {
      this.removeActive(target);
      return;
    }

    this.setActive(target);
  };
}
