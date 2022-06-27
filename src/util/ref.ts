/**
 * @param id Given element or ref
 * @param callback HTMLElement or React.RefObject
 *
 * @description
 * Usage
 * ```ts
 * // Id's
 * ref("element", (element: HTMLElement) => { element.style.display = "none" })
 *
 * // Refs
 * ref(this.myRef, (ref: HTMLElement) => { ref.style.display = "none" })
 * ```
 */
export function ref<Object = any>(id: string | React.RefObject<Object>, callback?: (...props: any) => void): any {
  if (typeof id == "string") {
    var element: HTMLElement | null;
    if ((element = document.getElementById(id))) {
      if (typeof callback == "function") {
        callback(element);
      } else {
        return element;
      }
    }
  } else {
    var reff: React.RefObject<Object>;
    if ((reff = id)) {
      if (reff && reff.current) {
        if (typeof callback == "function") {
          callback(reff.current);
        } else {
          return reff.current;
        }
      }
    }
  }
}
