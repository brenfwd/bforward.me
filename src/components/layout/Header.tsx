import { IconLabel } from "../ui/Icon";

export function Header() {
  const contactButtonClick = () => {
    window.open("mailto:contact@bforward.me");
  };

  return (
    <div class="px-2 py-3 flex flex-row items-center gap-2 flex-wrap">
      <div class="flex flex-col">
        <h1 class="text-lg leading-4">Brenden Forward</h1>
        <h2 class="text-sm text-grey text-center leading-5">Full-Stack Developer</h2>
      </div>
      <div class="flex-grow basis-full md:basis-auto"></div>
      <div class="flex flex-row items-center gap-3 flex-wrap mx-auto">
        {/* <a href="#">
          <IconLabel icon="description">Resumé</IconLabel>
        </a> */}
        <a href="https://github.com/bren0xa" rel="noopener noreferer" target="_blank">
          <IconLabel icon="code" fallback={"<>"}>
            GitHub
          </IconLabel>
        </a>
        <button
          class="bg-primary-400 text-light px-2 py-1.5 rounded hover:bg-primary-300 hover:shadow-md active:bg-primary-500 active:shadow-inner first-letter transition-all"
          onClick={contactButtonClick}
        >
          <span class="items-center flex gap-1">
            <IconLabel icon="email" fallback="✉️">
              contact@bforward.me
            </IconLabel>
          </span>
        </button>
      </div>
    </div>
  );
}
