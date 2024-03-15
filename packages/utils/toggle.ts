import { onMounted, reactive, ref } from "vue";

interface SuspensionStyle {
  width: string;
  top: string;
  left: string;
}

const SUSPENSION_GAP = 10;

const useToggle = () => {
  const trigger = ref<HTMLElement>();
  const suspensionStyle = reactive<SuspensionStyle>({} as SuspensionStyle);
  const suspensionParent = ref<HTMLElement>();

  const click = (e: Event) => {
    suspensionParent.value = e.target as HTMLElement;
    if (trigger.value) {
      trigger.value.style.display = "block";
      const rect: DOMRect = suspensionParent.value.getBoundingClientRect();
      console.log("rect: ", rect);
      const { width, height, top, left } =
        suspensionParent.value.getBoundingClientRect();
      suspensionStyle.left = left + "px";
      suspensionStyle.top = top + height + SUSPENSION_GAP + "px";
      trigger.value.style.width = width + "px";
    }
  };

  onMounted(() => {});

  return {
    trigger,
    suspensionStyle,
    click,
  };
};

export default useToggle;
