import { useWindowSize } from "@vueuse/core";
import { onMounted, ref, watch, type Ref } from "vue";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type DeviceType = "mobile" | "tablet" | "desktop";
type useBreakPointFncResult = {
  /** 屏幕断点 */
  bp: Ref<Breakpoint>;
  /** 设备类型 */
  dt: Ref<DeviceType>;
  /** 屏幕宽度 */
  w: Ref<number>;
};

/**
 * 屏幕断点与设备类型hook
 */
export const useBreakPoint = (): useBreakPointFncResult => {
  let breakpoint = ref<Breakpoint>("xs");
  let deviceType = ref<DeviceType>("mobile");
  const { width } = useWindowSize();

  const _reset = (newWidth: number) => {
    if (newWidth < 576) {
      breakpoint.value = "xs";
      deviceType.value = "mobile";
    } else if (newWidth >= 576 && newWidth < 768) {
      breakpoint.value = "sm";
      deviceType.value = "mobile";
    } else if (newWidth >= 768 && newWidth < 992) {
      breakpoint.value = "md";
      deviceType.value = "tablet";
    } else if (newWidth >= 992 && newWidth < 1200) {
      breakpoint.value = "lg";
      deviceType.value = "desktop";
    } else if (newWidth >= 1200 && newWidth < 1600) {
      breakpoint.value = "xl";
      deviceType.value = "desktop";
    } else {
      breakpoint.value = "xxl";
      deviceType.value = "desktop";
    }
  };

  onMounted(() => {
    _reset(width.value);
  });

  watch(width, (newWidth) => {
    _reset(newWidth);
  });

  return { bp: breakpoint, dt: deviceType, w: width };
};
