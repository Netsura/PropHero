"use client";

import { useMemo, useState } from "react";

type Msg = { id: number; text: string; from: string; urgent: boolean };

const MESSAGES: Msg[] = [
  { id: 1, text: "Se ha fundido una bombilla del pasillo", from: "Piso 2B", urgent: false },
  { id: 2, text: "Sale agua del techo del baño", from: "Piso 4A", urgent: true },
  { id: 3, text: "La persiana del salón no sube bien", from: "Piso 1C", urgent: false },
  { id: 4, text: "Huelo a gas en la cocina", from: "Piso 3D", urgent: true },
];

export default function Inbox() {
  const [sorted, setSorted] = useState(false);
  const list = useMemo(
    () => (sorted ? [...MESSAGES].sort((a, b) => Number(b.urgent) - Number(a.urgent)) : MESSAGES),
    [sorted]
  );

  return (
    <div className="inbox" aria-label="Ejemplo de bandeja de inquilinos">
      <div className="inbox-head">
        <span>Mensajes de inquilinos</span>
        <button type="button" onClick={() => setSorted((s) => !s)}>
          {sorted ? "Ver orden original" : "Ordenar con IA"}
        </button>
      </div>
      <ul>
        {list.map((m) => (
          <li key={m.id} className={sorted && m.urgent ? "urgent" : ""}>
            <div>
              <strong>“{m.text}”</strong>
              <small>{m.from}</small>
            </div>
            {sorted && <span className={m.urgent ? "pill hot" : "pill"}>{m.urgent ? "Urgente" : "Puede esperar"}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
