import styles from "./icons.module.scss";

import type * as iconNames from "../icon_names.json";
export type IconName = keyof typeof iconNames;

export interface IconProps {
  name: IconName;
}

export function Icon(props: IconProps) {
  return <span class={`material-symbols-rounded ${styles.Icon}`}>{props.name}</span>;
}
