import { K as jsxRuntimeExports } from "./server-CRPQzhcX.js";
import { N as Navbar, F as Footer } from "./Footer-C0yO_IKi.js";
function PageShell({ children, title, kicker }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-28", children: [
      title && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pb-8 pt-6 text-center", children: [
        kicker && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block text-[11px] uppercase tracking-[0.4em] text-gold mb-3 px-3 py-1 rounded-full border border-gold-soft", children: kicker }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl text-gradient-gold", children: title })
      ] }),
      children
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PageShell as P
};
