import { nextTick } from "vue";

type EventItem = {
  uid: string;
  dom: HTMLElement;
  callback: () => void;
};

const generateBrowserId = (length: number) => {
  const result = [];
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
};

const getGenerateBrowserId = () => {
  let id: string;
  if (window.crypto && window.crypto.getRandomValues) {
    const generateCryptoBrowserId = (length: number) => {
      const values = new Uint32Array(length);
      window.crypto.getRandomValues(values);
      let result = "";
      for (let i = 0; i < length; i++) {
        result += values[i].toString(36);
      }
      return result;
    };
    id = generateCryptoBrowserId(16);
  } else {
    id = generateBrowserId(16);
  }
  return id;
};

class EventEmitter {
  event: EventItem[];
  constructor() {
    this.event = [];
  }

  on(uid: string, dom: HTMLElement, callback: () => void) {
    if (!this.event.some((v) => v.uid === uid)) {
      this.event.push({
        uid,
        dom,
        callback,
      });
    }
  }

  change(uid: string, dom: HTMLElement, callback: () => void) {
    if (!this.event.some((v) => v.uid === uid)) {
      this.event.push({
        uid,
        dom,
        callback,
      });
    }
  }

  get(uid: string) {
    const targetEvent = this.event.find((v) => v.uid === uid);
    return targetEvent;
  }

  off(uid: string) {
    this.event.filter((v) => v.uid !== uid);
  }
}

const monitor = new EventEmitter();

const onScroll = (e: Event, uid: string, callback: () => void) => {
  const targetEvent = monitor.get(uid);

  if (targetEvent) {
    nextTick(() => {
      const { scrollTop, clientHeight, scrollHeight } = targetEvent.dom;
      // console.log("dom", scrollTop + clientHeight, scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight) {
        callback();
      }
    });
  }
};

const bindingFun = (el: any, binding: any) => {
  const uid = getGenerateBrowserId();
  const callback = binding.value;
  el.setAttribute("data-infinite", uid);
  monitor.on(uid, el, callback);
  el.addEventListener("scroll", (e: Event) => onScroll(e, uid, callback));
};

export default {
  mounted(el: any, binding: any) {
    bindingFun(el, binding);
  },
  unmounted(el: any) {
    const uid = el.getAttribute("data-infinite");
    const targetEvent = monitor.get(uid);
    if (targetEvent) {
      el.removeEventListener("scroll", (e: Event) =>
        onScroll(e, uid, targetEvent.callback)
      );
    }
    monitor.off(uid);
  },
};
