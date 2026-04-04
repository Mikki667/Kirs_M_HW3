export function SmoothScroll() {

  const navScrollLinks = document.querySelectorAll('a[href^="#"]');
  const fixedHeader = document.querySelector(".main-header");

  function measureHeaderHeight() {

    if (!fixedHeader) {
      return 0;
    }

    return fixedHeader.offsetHeight;
  }

  function handleScroll(event) {

    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) {
      return;
    }

    const offset = measureHeaderHeight();
    const position = targetSection.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: position - offset,
      behavior: "smooth"
    });

  }

  function registerLink(link) {
    link.addEventListener("click", handleScroll);
  }

  navScrollLinks.forEach(registerLink);

}