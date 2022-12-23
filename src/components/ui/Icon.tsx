import cx from "classnames";
import { JSXInternal } from "preact/src/jsx";
import { ComponentChildren } from "preact";

import "material-symbols/rounded.scss";

import "./Icon.scss";
import { createPromiseHook } from "@/utils/asyncHook";

async function loadMaterialSymbols() {
  await new Promise<void>((res) => {
    if (document.readyState === "complete") {
      res();
    } else {
      window.addEventListener("load", () => res());
    }
  });
  await document.fonts.load("1em Material Symbols Rounded");
  return true;
}

const useMaterialSymbols = createPromiseHook(loadMaterialSymbols);

export type IconProps = ({ children: string } | { icon: string }) & {
  fallback?: ComponentChildren;
} & JSXInternal.HTMLAttributes<HTMLSpanElement>;

export function Icon(props: IconProps) {
  const { children, fallback, icon, class: clazz, ...rest } = props;

  const materialSymbols = useMaterialSymbols();
  if (materialSymbols.pending) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <span class={cx("select-none px-2", clazz as string)} {...rest}>
        &nbsp;
      </span>
    );
  }

  return (
    <span class={cx("material-symbols-rounded select-none", clazz as string)} {...rest}>
      {icon ?? children}
    </span>
  );
}

export interface IconLabelProps {
  icon: string;
  children: ComponentChildren;
  fallback?: ComponentChildren;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}
export function IconLabel(props: IconLabelProps) {
  return (
    <span class={`flex flex-row gap-${props.gap ?? 2} items-center`}>
      <Icon fallback={props.fallback}>{props.icon}</Icon>
      <span>{props.children}</span>
    </span>
  );
}
