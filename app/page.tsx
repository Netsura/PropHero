import Inbox from "@/components/Inbox";
import Calculator from "@/components/Calculator";

const watch = [
  { index: "01", title: "Más rendimiento de alquiler", text: "Compara tu renta con pisos similares de la zona y detecta si puedes ajustar el precio.", example: "“La renta de tu zona podría permitir subir 100 € al mes.”" },
  { index: "02", title: "Momento de comprar o vender", text: "Detecta cuándo el piso ha ganado mucho valor y si conviene venderlo para comprar otro.", example: undefined },
  { index: "03", title: "Averías y dudas del inquilino", text: "Ordena los mensajes y separa una fuga urgente de una bombilla o persiana que puede esperar.", example: undefined },
];

const signals = [
  { index: "01", title: "Momentos vitales", text: "Detecta señales de prejubilación, jubilación o venta de empresa en LinkedIn y noticias empresariales." },
  { index: "02", title: "Escucha en comunidades", text: "Localiza dudas reales en Facebook, newsletters y foros de expatriados sobre dónde invertir ahorros." },
  { index: "03", title: "Públicos similares", text: "Utiliza Meta y YouTube para llegar a perfiles con ahorros líquidos que buscan seguridad." },
  { index: "04", title: "Calculadora sin tecnicismos", text: "Explica de forma sencilla qué ingresos mensuales podrían generar los ahorros con la compra de un piso." },
];

const flow = [
  { index: "01", title: "La IA vigila", text: "Precios de alquiler, valor del piso y mensajes prioritarios de los inquilinos." },
  { index: "02", title: "El asesor se anticipa", text: "Recibe una información ya organizada y prepara una recomendación clara." },
  { index: "03", title: "Tú decides con apoyo", text: "Una persona de PropHero te llama, explica las opciones y te acompaña en la decisión." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Principal">
        <a className="brand" href="#" aria-label="PropHero Cuida">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>PropHero <b>Cuida</b></span>
        </a>
        <a className="nav-link" href="#calculadora">Calcular ingresos <span aria-hidden="true">↗</span></a>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Servicio mensual de cuidado inmobiliario</div>
            <h1>Tu piso alquilado puede seguir creciendo.</h1>
            <p>
              PropHero combina IA y un asesor personal para vigilar tu alquiler, detectar oportunidades de aumentar sus
              ingresos y resolver averías y papeles. Tú decides, siempre con una persona al otro lado.
            </p>
            <a className="btn" href="#calculadora">Calcula tu pensión inmobiliaria <span aria-hidden="true">→</span></a>
          </div>
          <Inbox />
        </div>
      </header>

      <section className="section-watch">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark"><span /> Más control, menos trabajo</div>
              <h2>La IA vigila tu piso después de comprarlo</h2>
            </div>
            <p>El trabajo administrativo se automatiza.<br />Las decisiones importantes siguen acompañadas por un asesor.</p>
          </div>
          <div className="grid3">
            {watch.map((w) => (
              <article key={w.title}>
                <div className="card-index">{w.index}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                {w.example && <blockquote>{w.example}</blockquote>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ink">
        <div className="wrap">
          <div className="section-heading light-heading">
            <div>
              <div className="eyebrow light"><span /> Tecnología humana</div>
              <h2>Una persona siempre al otro lado</h2>
            </div>
          </div>
          <div className="grid3">
            {flow.map((f) => (
              <article key={f.title}>
                <div className="flow-line"><span>{f.index}</span></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark"><span /> Descubrimiento inteligente</div>
              <h2>Cómo encontramos a quienes buscan ingresos con tranquilidad</h2>
            </div>
            <p>Prejubilados y jubilados de 55 años o más con ahorros líquidos que quieren proteger sus ingresos.</p>
          </div>
          <div className="grid2">
            {signals.map((s) => (
              <article key={s.title}>
                <div className="signal-top"><span>{s.index}</span><i aria-hidden="true">↗</i></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="calculadora" className="calc-section">
        <div className="wrap">
          <div className="calculator-layout">
            <div className="calc-copy">
              <div className="eyebrow dark"><span /> Calculadora inmobiliaria</div>
              <h2>¿Cuánto podría darte tu patrimonio?</h2>
              <p>Introduce tus ahorros y descubre una estimación mensual con un piso alquilado en Valencia.</p>
            </div>
            <Calculator />
          </div>
        </div>
      </section>

      <footer className="wrap">Concepto de servicio para PropHero, creado por Hayk Ohanjanyan.</footer>
    </main>
  );
}
