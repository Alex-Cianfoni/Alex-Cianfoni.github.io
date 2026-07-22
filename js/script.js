/* ================================================================
   DYNAMIC AQUitania PORTFOLIO

   This file adds:
   - automatic copyright year
   - active navigation highlighting
   - mobile navigation
   - reveal-on-scroll animations
   - a reading-progress bar
   - project filtering
   - a back-to-top button
   - gentle page transitions

   The website still works on GitHub Pages because everything runs
   in the visitor's browser and does not require a server.
================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------------------------------------
  // AUTOMATIC YEAR
  // ---------------------------------------------------------------
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // ---------------------------------------------------------------
  // ACTIVE NAVIGATION LINK
  // ---------------------------------------------------------------
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  // ---------------------------------------------------------------
  // MOBILE NAVIGATION
  // ---------------------------------------------------------------
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      navigation.classList.toggle("is-open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 850) {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      }
    });
  }

  // ---------------------------------------------------------------
  // READING PROGRESS BAR
  // ---------------------------------------------------------------
  const progress = document.createElement("div");
  progress.className = "reading-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  // ---------------------------------------------------------------
  // REVEAL ELEMENTS ON SCROLL
  // ---------------------------------------------------------------
  const revealElements = document.querySelectorAll(
    ".hero, .section, .block, .resume-row, .list-plain li"
  );

  revealElements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  // ---------------------------------------------------------------
  // PROJECT FILTERING
  // ---------------------------------------------------------------
  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");
  const filterStatus = document.querySelector(".filter-status");

  if (filterButtons.length && projectCards.length) {
    const applyFilter = (filter) => {
      let visibleCount = 0;

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(/\s+/);
        const visible = filter === "all" || categories.includes(filter);

        card.hidden = !visible;
        card.classList.toggle("filtered-out", !visible);

        if (visible) {
          visibleCount += 1;
          requestAnimationFrame(() => card.classList.add("filter-visible"));
        } else {
          card.classList.remove("filter-visible");
        }
      });

      filterButtons.forEach((button) => {
        const active = button.dataset.filter === filter;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      if (filterStatus) {
        filterStatus.textContent =
          filter === "all"
            ? `Showing all ${visibleCount} projects.`
            : `Showing ${visibleCount} ${filter} project${visibleCount === 1 ? "" : "s"}.`;
      }
    };

    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
      button.addEventListener("click", () => applyFilter(button.dataset.filter || "all"));
    });

    applyFilter("all");
  }

  // ---------------------------------------------------------------
  // BACK TO TOP
  // ---------------------------------------------------------------
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 500);
    };

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------------------------------------------------------------
  // GENTLE PAGE TRANSITIONS
  // ---------------------------------------------------------------
  document.body.classList.add("page-ready");

  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank"
      ) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      event.preventDefault();
      document.body.classList.add("page-leaving");

      window.setTimeout(() => {
        window.location.href = destination.href;
      }, 180);
    });
  });
});
