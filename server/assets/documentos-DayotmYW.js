import { K as jsxRuntimeExports } from "./server-CRPQzhcX.js";
import { P as PageShell } from "./PageShell-CwcSk5_0.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Footer-C0yO_IKi.js";
import "./router-CNNqbNQn.js";
const docs = [{
  n: "Receita Técnica — Royal IPA",
  t: "PDF",
  s: "1.2 MB",
  d: "12/05/2026",
  tag: "Receita"
}, {
  n: "Laudo Microbiológico — Lote 2026-04",
  t: "PDF",
  s: "320 KB",
  d: "08/05/2026",
  tag: "Laudo"
}, {
  n: "Certificado Orgânico ABIC",
  t: "PDF",
  s: "780 KB",
  d: "01/05/2026",
  tag: "Certificado"
}, {
  n: "Relatório de Produção — Abril",
  t: "XLSX",
  s: "2.1 MB",
  d: "30/04/2026",
  tag: "Relatório"
}, {
  n: "Receita Técnica — Crown Pilsen",
  t: "PDF",
  s: "1.4 MB",
  d: "20/04/2026",
  tag: "Receita"
}, {
  n: "Auditoria Sanitária 2026",
  t: "PDF",
  s: "3.6 MB",
  d: "15/04/2026",
  tag: "Certificado"
}];
function iconFor(t) {
  return t === "XLSX" ? "▦" : "▤";
}
function Documentos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { title: "Arquivo Real", kicker: "Central de Documentos", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:grid grid-cols-12 px-6 py-4 text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)] border-b border-gold-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6", children: "Documento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "Categoria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1", children: "Tipo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1", children: "Tam." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1", children: "Data" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-right", children: "Ação" })
    ] }),
    docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-2 items-center px-6 py-5 border-b border-gold-soft last:border-0 hover:bg-[color:var(--gold)]/5 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-lg gradient-gold grid place-items-center text-[color:var(--navy-deep)] text-xl font-bold", children: iconFor(d.t) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: d.n })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-gold-soft text-gold", children: d.tag }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-sm text-[color:var(--muted-foreground)]", children: d.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-sm text-[color:var(--muted-foreground)]", children: d.s }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-sm text-[color:var(--muted-foreground)]", children: d.d }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 md:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg gradient-gold px-3 py-1.5 text-xs font-bold text-[color:var(--navy-deep)] hover:brightness-110 transition", children: "Baixar ↓" }) })
    ] }, d.n))
  ] }) }) });
}
export {
  Documentos as component
};
