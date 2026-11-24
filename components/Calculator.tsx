"use client";

import { useState } from "react";

const ANNUAL_NET_YIELD = 0.04;

export default function Calculator() {
  const [savings, setSavings] = useState<number>(200000);
  const monthly = Math.round((Math.max(savings || 0, 0) * ANNUAL_NET_YIELD) / 12);

  return (
    <div className="calc">
      <label htmlFor="savings">Tus ahorros (€)</label>
      <input
        id="savings"
        type="number"
        inputMode="numeric"
        min={0}
        step={5000}
        value={Number.isNaN(savings) ? "" : savings}
        onChange={(e) => setSavings(e.target.valueAsNumber)}
      />
      <p className="result" aria-live="polite">
        ≈ {monthly.toLocaleString("es-ES")} € al mes
      </p>
      <p className="note">
        Estimación orientativa con una rentabilidad neta del 4 % anual. No es una promesa de ingresos ni garantiza
        cobros mensuales o venta. Un asesor de PropHero debería revisar la operación y el mercado real.
      </p>
    </div>
  );
}
