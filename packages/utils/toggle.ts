import { nextTick, onMounted, onUnmounted, reactive, ref } from "vue";

interface SuspensionStyle {
  width: string;
  top: string;
  left: string;
}

const SUSPENSION_GAP = 10;

const useToggle = () => {
  const trigger = ref<HTMLElement>();
  const triggerOrigin = ref<HTMLElement>();
  const showTrigger = ref(false);
  const suspensionStyle = reactive<SuspensionStyle>({} as SuspensionStyle);

  let clientHeight = 0;
  let top1 = 0;
  let top2 = 0;

  const click = () => {
    showTrigger.value = !showTrigger.value;
    if (trigger.value && triggerOrigin.value && showTrigger.value) {
      const documentScrollTop = document.documentElement.scrollTop;
      const triggerOriginRect = triggerOrigin.value!.getBoundingClientRect();
      suspensionStyle.left = triggerOriginRect.left + "px";
      nextTick(() => {
        top1 =
          triggerOriginRect.top +
          triggerOriginRect.height +
          SUSPENSION_GAP +
          documentScrollTop;
        top2 =
          triggerOriginRect.top +
          documentScrollTop -
          SUSPENSION_GAP -
          trigger.value!.offsetHeight;
        const top =
          triggerOriginRect.top + trigger.value!.offsetHeight + SUSPENSION_GAP >
          clientHeight
            ? top2
            : top1;
        suspensionStyle.top = top + "px";
        trigger.value!.style.height = trigger.value!.offsetHeight + "px";
        trigger.value!.style.width = triggerOrigin.value!.offsetWidth + "px";
      });
    }
  };

  const isHide = (e: Event) => {
    if (
      !triggerOrigin.value?.contains(e.target as Node) &&
      !trigger.value!.contains(e.target as Node)
    ) {
      showTrigger.value = false;
    }
  };

  onMounted(() => {
    clientHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll", () => {
      if (showTrigger.value) {
        const triggerOriginRect = triggerOrigin.value!.getBoundingClientRect();
        const top =
          triggerOriginRect.top + trigger.value!.offsetHeight + SUSPENSION_GAP >
          clientHeight
            ? top2
            : top1;
        suspensionStyle.top = top + "px";
      }
    });
    document.addEventListener("click", isHide);
  });

  onUnmounted(() => {
    document.removeEventListener("click", isHide);
  });

  return {
    trigger,
    triggerOrigin,
    showTrigger,
    suspensionStyle,
    click,
  };
};

export default useToggle;
