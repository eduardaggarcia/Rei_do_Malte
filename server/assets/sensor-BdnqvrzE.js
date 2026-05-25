import { T as reactExports, K as jsxRuntimeExports } from "./server-CRPQzhcX.js";
import { P as PageShell } from "./PageShell-CwcSk5_0.js";
import { d as ResponsiveContainer, e as Tooltip } from "./generateCategoricalChart-8V_NJ8BR.js";
import { a as AreaChart, X as XAxis, Y as YAxis, A as Area } from "./AreaChart-DJBbKFTL.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Footer-C0yO_IKi.js";
import "./router-CNNqbNQn.js";
function useLive(initial, range) {
  const [v, setV] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setV((p) => +(p + (Math.random() - 0.5) * range).toFixed(2));
    }, 1500);
    return () => clearInterval(id);
  }, [range]);
  return v;
}
function genSeries(base, n = 20) {
  return Array.from({
    length: n
  }, (_, i) => ({
    x: i,
    y: base + Math.sin(i / 2) * 2 + Math.random() * 1.5
  }));
}
function Sensor() {
  const temp = useLive(18.4, 0.4);
  const press = useLive(1.24, 0.05);
  const fer = useLive(67, 1);
  const hum = useLive(58, 1.5);
  const qual = useLive(96, 0.6);
  const [series] = reactExports.useState(() => genSeries(18.4));
  const sensors = [{
    l: "Temperatura",
    v: `${temp}°C`,
    status: "Ótimo"
  }, {
    l: "Pressão",
    v: `${press} bar`,
    status: "Estável"
  }, {
    l: "Fermentação",
    v: `${fer}%`,
    status: "Em curso"
  }, {
    l: "Umidade",
    v: `${hum}%`,
    status: "Ideal"
  }, {
    l: "Qualidade do tanque",
    v: `${qual}%`,
    status: "Premium"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { title: "Sensores IoT", kicker: "Controle em tempo real", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3 lg:grid-cols-5 mb-8", children: sensors.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20", style: {
        background: "radial-gradient(circle, var(--gold), transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[color:var(--gold)] animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)]", children: s.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[color:var(--muted-foreground)]", children: s.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient-gold mt-1 tabular-nums", children: s.v })
    ] }, s.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 glass-strong rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.4em] text-gold", children: "Tanque 03 · Royal IPA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-gradient-gold mt-1", children: "Temperatura — últimas 24h" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[color:var(--muted-foreground)]", children: "Atualizado agora" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: series, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.88 0.16 90)", stopOpacity: 0.7 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.78 0.14 85)", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "x", stroke: "oklch(0.72 0.04 85 / 0.4)", tick: {
            fontSize: 10
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.72 0.04 85 / 0.4)", tick: {
            fontSize: 10
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "oklch(0.18 0.07 265)",
            border: "1px solid oklch(0.78 0.14 85 / 0.4)",
            borderRadius: 8
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "y", stroke: "oklch(0.88 0.16 90)", strokeWidth: 2, fill: "url(#g)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-gradient-gold", children: "Alertas" }),
        [{
          t: "Tanque 03 estável",
          d: "há 2 min",
          ok: true
        }, {
          t: "Calibração agendada",
          d: "amanhã 08:00",
          ok: true
        }, {
          t: "Filtro 02 — atenção",
          d: "há 12 min",
          ok: false
        }].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-lg p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-full ${a.ok ? "bg-[color:var(--gold)]" : "bg-orange-400"} animate-pulse` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-[color:var(--foreground)]", children: a.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[color:var(--muted-foreground)]", children: a.d })
          ] })
        ] }, a.t))
      ] })
    ] })
  ] }) });
}
export {
  Sensor as component
};
