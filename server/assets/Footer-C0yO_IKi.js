import { T as reactExports, K as jsxRuntimeExports } from "./server-CRPQzhcX.js";
import { L as Link } from "./router-CNNqbNQn.js";
const logo = "/assets/logo-MqXcNC3_.jpeg";
const links = [
  { to: "/", label: "Início" },
  { to: "/loja", label: "Loja" },
  { to: "/sobre", label: "Sobre" },
  { to: "/receita", label: "Receita" },
  { to: "/sensor", label: "Sensor" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/documentos", label: "Documentos" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `glass-strong flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${scrolled ? "glow-gold" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-[color:var(--gold)]/40 group-hover:glow-gold transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Rei do Malte", className: "h-full w-full object-cover" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold text-gradient-gold tracking-wider", children: "REI DO MALTE" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "relative px-3.5 py-2 text-sm font-medium text-[color:var(--foreground)]/80 hover:text-[color:var(--gold)] transition-colors rounded-lg",
                  activeProps: { className: "text-[color:var(--gold)]" },
                  activeOptions: { exact: l.to === "/" },
                  children: l.label
                },
                l.to
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/loja",
                    className: "hidden sm:inline-flex items-center rounded-lg gradient-gold px-4 py-2 text-sm font-semibold text-[color:var(--navy-deep)] hover:brightness-110 transition-all glow-gold",
                    children: "Comprar"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen(!open),
                    className: "lg:hidden h-10 w-10 grid place-items-center rounded-lg border border-gold-soft text-[color:var(--gold)]",
                    "aria-label": "menu",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: open ? "✕" : "☰" })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            onClick: () => setOpen(false),
            className: "px-3 py-2.5 text-sm font-medium hover:text-[color:var(--gold)]",
            activeProps: { className: "text-[color:var(--gold)]" },
            children: l.label
          },
          l.to
        )) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-32 border-t border-gold-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-14 w-14 rounded-full ring-1 ring-[color:var(--gold)]/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-gradient-gold", children: "REI DO MALTE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[color:var(--muted-foreground)] mt-1", children: "Cerveja artesanal de coroa." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-[color:var(--muted-foreground)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold font-semibold mb-2 font-display", children: "Contato" }),
        "contato@reidomalte.com",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "+55 (11) 4002-8922"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-[color:var(--muted-foreground)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold font-semibold mb-2 font-display", children: "Endereço" }),
        "Av. Eng. Eusébio Stevaux, 823 - Santo Amaro",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "São Paulo · Brasil"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gold-soft py-5 text-center text-xs text-[color:var(--muted-foreground)]", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Rei do Malte. Bebida alcoólica. Aprecie com moderação."
    ] })
  ] });
}
export {
  Footer as F,
  Navbar as N
};
