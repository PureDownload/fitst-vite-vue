import { RouteRecordRaw } from "vue-router";

declare global {
    interface AppCustomRouteRaw extends Omit<RouteRecordRaw, "meta"> {
      meta?: AppRouteMeta;
      component?: any;
      components?: any;
      children?: AppCustomRouteRaw[];
      props?: any;
      fullPath?: string;
    }
} 