import Message from "./src/message.vue";
import { h, render } from "vue";
import { MessageConfig } from "./src/message";

let messageInstaceList: HTMLDivElement[] = [];

const MESSAGE_START_TOP = 56;
const MESSAGE_HEIGHT = 44;
const MESSAGE_GAP = 16;

const setDestoryClock = (element: HTMLElement, time = 3000) => {
  setTimeout(() => {
    destoryMessageElement(element);
  }, time);
};

const destoryMessageElement = (element: HTMLElement) => {
  if (!element.parentElement?.contains(element)) return;
  element.parentElement?.removeChild(element);
  messageInstaceList = messageInstaceList.filter((item) => item !== element);
  messageInstaceList.forEach((item, index) => {
    item.style.top =
      MESSAGE_START_TOP + index * (MESSAGE_HEIGHT + MESSAGE_GAP) + "px";
  });
};

export const PMessage = (config: MessageConfig) => {
  const VNode = h(Message, {
    ...config,
    onClose(element: HTMLElement) {
      destoryMessageElement(element);
    },
  });
  const container = document.createElement("div");
  container.setAttribute("class", "p-message-container");
  document.body.append(container);
  messageInstaceList.push(container);
  container.style.top =
    MESSAGE_START_TOP +
    (messageInstaceList.length - 1) * (MESSAGE_HEIGHT + MESSAGE_GAP) +
    "px";
  render(VNode, container);
  setDestoryClock(container);
};

export default PMessage;
