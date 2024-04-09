import { nextTick } from "process";

type ContainerInfo = {
  containerHeight: number;
  scrollHeight: number;
};

type EventItem = {
  uid: string;
  callback: () => void;
} & ContainerInfo;

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

  on(uid: string, callback: () => void, info: ContainerInfo) {
    if (!this.event.some((v) => v.uid === uid)) {
      this.event.push({
        uid,
        ...info,
        callback,
      });
    }
  }

  change(uid: string, callback: () => void, info: ContainerInfo) {
    if (!this.event.some((v) => v.uid === uid)) {
      this.event.push({
        uid,
        ...info,
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

const onScroll = (e: Event, info: ContainerInfo, callback: () => void) => {
  const { containerHeight, scrollHeight } = info;
  if ((e.target as HTMLElement).scrollTop + containerHeight >= scrollHeight) {
    callback();
    nextTick(() => {});
  }
};

const bindingFun = (el: any, binding: any) => {
  const uid = getGenerateBrowserId();
  const callback = binding.value;
  const info = {
    containerHeight: el.clientHeight,
    scrollHeight: el.scrollHeight,
  };

  el.setAttribute("data-infinite", uid);
  monitor.on(uid, callback, info);
  el.addEventListener("scroll", (e: Event) => onScroll(e, info, callback));
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
        onScroll(
          e,
          {
            containerHeight: targetEvent.containerHeight,
            scrollHeight: targetEvent.scrollHeight,
          },
          targetEvent.callback
        )
      );
    }

    monitor.off(uid);
  },
};
