import { Route } from "wouter";
import styles from "./app.module.scss";
import { Sidebar } from "./sidebar";
import { Markdown } from "./Markdown";

export function App() {
  return (
    <div class={styles.App}>
      <div class={styles.SidebarContainer}>
        <Sidebar />
      </div>

      <div class={styles.main}>
        <Route path="/">
          <h2>About</h2>
          <p>
            Hi! I'm Brenden. I am a full-stack developer with a passion for building robust web and infrastructure
            applications that people love. My main interests are in the back-end development space, where I focus on
            building networking-heavy and real-time applications.
          </p>
          <p>
            I have a background and degree in software engineering, and I am currently working on second degree in
            computer science.
          </p>

          <h2>Skills</h2>
          <p>
            I have 3+ years of professional experience with web development and database administration. I have a strong
            background in front-end development, and I am proficient in many languages and frameworks, including:
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Rust</li>
              <li>Python</li>
              <li>SQL</li>
              <li>PHP</li>
              <li>C/C++</li>
            </ul>
          </p>
          <p>
            I have worked with a wide variety of technologies, and I am always open to learn new things. I am always
            looking to improve my skills and learn new ones.
          </p>

          <h2>Contact</h2>
          <p>
            You can reach me by clicking the email link in the sidebar, or by emailing me at{" "}
            <a href="mailto:contact@bforward.me">contact@bforward.me</a>.
          </p>
        </Route>
        <Route path="/test">
          <Markdown import={import("./test.md")} />
        </Route>
      </div>
    </div>
  );
}
