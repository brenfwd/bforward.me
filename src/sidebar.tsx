import { Icon } from "./icons";
import styles from "./sidebar.module.scss";

export function Sidebar() {
  return (
    <div class={styles.Sidebar}>
      <a href="/" class={styles.title}>Brenden Forward</a>
      <p class={styles.subtitle}>
        <Icon name="computer" /> Full-stack developer
      </p>

      <ul>
        <li>
          <a href="https://github.com/bren0xa" target="_blank" rel="noopener noreferrer">
            <Icon name="code" /> GitHub.com/bren0xa
          </a>
        </li>
        {/* TODO: Add LinkedIn */}
        <li>
          <a href="mailto:contact@bforward.me">
            <Icon name="email" /> contact@bforward.me
          </a>
        </li>
      </ul>

      <p class={styles.copyright}>
        © {new Date().getFullYear()} Brenden Forward. All rights reserved.
      </p>
    </div>
  );
}
