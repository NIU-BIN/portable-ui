import { SFCWithInstall } from "@portable-ui/utils/typescript";
import InfiniteScroll from "./src/infinite-scroll";
import { App } from "vue";

const _InfiniteSrcoll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>;

_InfiniteSrcoll.install = (app: App) => {
  app.directive("InfiniteScroll", InfiniteScroll);
};

export const PInfiniteSrcoll = _InfiniteSrcoll;

export default PInfiniteSrcoll;
