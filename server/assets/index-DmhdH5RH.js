import { K as jsxRuntimeExports } from "./server-CRPQzhcX.js";
import { L as Link } from "./router-CNNqbNQn.js";
import { N as Navbar, F as Footer } from "./Footer-C0yO_IKi.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroBg = "/assets/hero-bg-UrRxatxi.jpg";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-60", style: {
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--navy-deep)]/70 via-[color:var(--navy-deep)]/85 to-[color:var(--navy-deep)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 noise-texture opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full blur-3xl opacity-40", style: {
        background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 text-center py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block text-[11px] uppercase tracking-[0.5em] text-gold mb-6 px-4 py-1.5 rounded-full border border-gold-soft glass", children: "⚜ Rei do Malte desde 2026 ⚜" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Rei do malte" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-2xl mx-auto text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Onde o malte" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--foreground)]", children: "é rei, o sabor" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold italic", children: "é lei." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/loja", className: "group inline-flex items-center gap-2 rounded-xl gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)] glow-gold-strong hover:scale-[1.03] transition-all", children: [
            "Explorar Loja",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "inline-flex items-center gap-2 rounded-xl glass-strong px-7 py-3.5 text-sm font-semibold text-gold border-gold-soft hover:glow-gold transition-all", children: "Ver Dashboard" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto", children: [{
          v: "5",
          l: "Litros / mês"
        }, {
          v: "24",
          l: "Receita"
        }, {
          v: "98%",
          l: "Pureza do malte"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl text-gradient-gold", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-[color:var(--muted-foreground)] mt-1", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.4em] text-gold mb-3", children: "Nossa essência" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-gradient-gold", children: "Coroado pelo sabor" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [{
        t: "Tradição",
        d: "Receitas medievais reinterpretadas com rigor artesanal.",
        i: "⚔"
      }, {
        t: "Tecnologia",
        d: "Sensores IoT controlam cada grau de fermentação.",
        i: "⚙"
      }, {
        t: "Realeza",
        d: "Maltes nobres selecionados grão a grão.",
        i: "♛"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass rounded-2xl p-8 hover:glow-gold transition-all duration-500 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl text-gradient-gold mb-4", children: c.i }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-gold mb-2", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[color:var(--muted-foreground)] leading-relaxed", children: c.d })
      ] }, c.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
