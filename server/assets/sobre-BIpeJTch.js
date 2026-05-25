import { K as jsxRuntimeExports } from "./server-CRPQzhcX.js";
import { P as PageShell } from "./PageShell-CwcSk5_0.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Footer-C0yO_IKi.js";
import "./router-CNNqbNQn.js";
const brewery = "/assets/about-brewery-DjSqO6E8.jpg";
const timeline = [{
  ano: "2023",
  titulo: "A primeira fervura",
  texto: "Tudo começou numa panela de inox de 20 litros, no fundo de uma garagem em Belo Horizonte. Dois amigos engenheiros, cansados de cervejas industriais sem alma, decidiram brassar a própria receita num domingo de chuva."
}, {
  ano: "2024",
  titulo: "Receita SQN",
  texto: 'Nasce a Session Pilsen SQN — leve, dourada e honesta. O nome veio das brincadeiras dos primeiros provadores: "é uma Pilsen, SQN". A receita passou por 17 versões antes de ganhar o ponto certo de amargor.'
}, {
  ano: "2025",
  titulo: "Automação artesanal",
  texto: "Cansados de acordar de madrugada para controlar a mostura, construímos o primeiro protótipo do sistema de monitoramento térmico. Sensores, relés e código aberto começaram a vigiar cada grau Celsius do processo."
}, {
  ano: "2026",
  titulo: "Cervejaria Real",
  texto: "Inauguramos a sede oficial da Rei do Malte. 5 litros viraram 500. Cada lote passa por brassagem instrumentada, fermentação controlada e maturação a frio — com dados acessíveis em tempo real para qualquer cervejeiro."
}];
function Sobre() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { title: "Nossa história", kicker: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden glow-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: brewery, alt: "Cervejaria Rei do Malte", loading: "lazy", width: 1024, height: 1024, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)]/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-[color:var(--foreground)]/90", children: [
          "A ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-semibold", children: "Rei do Malte" }),
          " nasceu da inquietação de dois engenheiros mineiros que acreditavam numa ideia simples: cerveja artesanal de verdade não precisa abrir mão da precisão da tecnologia — pelo contrário, é elevada por ela."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[color:var(--muted-foreground)] leading-relaxed", children: "Cada lote começa com maltes selecionados — Pilsen e Chateau Munich — e termina numa garrafa que carrega o registro completo do processo: cada temperatura, cada etapa, cada decisão. Transparência líquida, do grão ao copo." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[color:var(--muted-foreground)] leading-relaxed", children: "Acreditamos que o futuro da cerveja artesanal não está em esconder o processo, mas em mostrá-lo. Por isso nosso dashboard de produção é público — e nossa receita também." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 pt-4", children: [{
          v: "2026",
          l: "Fundada em"
        }, {
          v: "100%",
          l: "Dados abertos"
        }, {
          v: "5 L",
          l: "Lote piloto"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gradient-gold", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)] mt-1", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-gradient-gold text-center mb-12", children: "Linha do tempo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-soft to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: timeline.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 hover:glow-gold transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-gold text-sm tracking-widest mb-2", children: e.ano }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-gradient-gold mb-2", children: e.titulo }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[color:var(--muted-foreground)] leading-relaxed", children: e.texto })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full gradient-gold ring-4 ring-[color:var(--navy-deep)]" })
        ] }, e.ano)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-24 grid gap-6 md:grid-cols-4", children: [{
      t: "Tradição",
      d: "Receitas inspiradas nos estilos clássicos europeus, com identidade brasileira."
    }, {
      t: "Ingrediente",
      d: "Maltes Pilsen e Chateau Munich, lúpulos Nugget e Brewer's Gold."
    }, {
      t: "Tecnologia",
      d: "Sensores DS18B20, relés inteligentes e telemetria em tempo real."
    }, {
      t: "Transparência",
      d: "Cada lote tem seu histórico térmico publicado no dashboard."
    }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 hover:glow-gold transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-gold text-sm tracking-widest mb-2", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-gradient-gold mb-2", children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[color:var(--muted-foreground)]", children: p.d })
    ] }, p.t)) })
  ] }) });
}
export {
  Sobre as component
};
