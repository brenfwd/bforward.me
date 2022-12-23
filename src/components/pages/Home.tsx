export function Home() {
  return (
    <div class="flex flex-col gap-4 p-2">
      <div class="hover:shadow-md transition-all duration-400 border p-2 rounded-lg">
        <h1 class="text-xl">About</h1>
        <p>
          I am a full-stack software developer and computer science student with several years of experience in the
          field developing complex and performant systems. I have several years of prior work experience through
          internships, part-time jobs, and freelance positions. I have significant experience developing backend
          networking applications for the OSI Model's Presentation and Application layers and frontend web applications
          using modern web technology. Additionally, I have many years of experience with creating interactive chat
          bots, performing database administration and SQL development, and creating various business and sales
          utilities.
        </p>
      </div>

      <div class="hover:shadow-md transition-all duration-400 border p-2 rounded-lg">
        <h1 class="text-xl">Skills</h1>
        <p>
          I have 4+ years of professional experience with web development, (relational) database administration, and
          system programming in C and C++. I have a strong background in front-end web development, and I am skilled at
          a multitide of different programming languages, frameworks, libraries, environments, and utilities, including:
        </p>
        <ul class="list-disc list-inside">
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
          <li>Rust</li>
          <li>Python</li>
          <li>SQL</li>
          <li>PHP</li>
          <li>C</li>
          <li>C++</li>
          <li>React</li>
          <li>Visual Studio Code</li>
          <li>Linux/GNU</li>
          <li>Discord (chat bots, add-ons)</li>
        </ul>
      </div>

      <hr />

      <p class="text-grey text-xs">Made with ❤️ using Preact, Tailwind, & TypeScript</p>
    </div>
  );
}
