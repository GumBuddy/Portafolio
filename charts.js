/* ============================================================
   STECharts — gráficas SVG ligeras, sin librerías externas.
   Preparado para usarse en cualquier página del sitio.

   Uso:
     STECharts.bar(document.getElementById("miGrafica"), [
       { label: "Formateo",  value: 12 },
       { label: "Limpieza",  value: 8  },
       { label: "Virus",     value: 5  }
     ], { title: "Servicios del mes" });

     STECharts.donut(document.getElementById("otra"), [
       { label: "Laptops", value: 18 },
       { label: "PC",      value: 26 }
     ]);

   Todo se dibuja en SVG: escala bien en cualquier pantalla, se puede
   imprimir sin perder nitidez y no requiere descargar nada.
   ============================================================ */
window.STECharts = (function () {
  "use strict";

  const PALETA = ["#ff3d71", "#8b5cf6", "#4f8cff", "#f4f3ef", "#9d9db4"];
  const TINTA = "#f4f3ef";
  const TENUE = "#5d5d78";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function sinMovimiento() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ---- Barras horizontales: legibles con etiquetas largas,
         que es lo normal en nombres de servicios. ---- */
  function bar(destino, datos, opciones) {
    if (!destino || !datos || !datos.length) return;
    const op = opciones || {};
    const max = Math.max.apply(null, datos.map(d => d.value)) || 1;
    const filaAlto = 42;
    const anchoEtiqueta = op.labelWidth || 190;
    const alto = datos.length * filaAlto + 16;
    const ancho = 700;
    const anim = !sinMovimiento();

    const filas = datos.map((d, i) => {
      const largo = (d.value / max) * (ancho - anchoEtiqueta - 70);
      const y = i * filaAlto + 8;
      const color = PALETA[i % PALETA.length];
      return (
        '<text x="0" y="' + (y + 19) + '" fill="' + TINTA + '" font-size="14" ' +
          'font-family="Archivo, system-ui, sans-serif">' + esc(d.label) + '</text>' +
        '<rect x="' + anchoEtiqueta + '" y="' + y + '" height="26" rx="2" ' +
          'fill="' + color + '" width="' + (anim ? 0 : largo) + '">' +
          (anim
            ? '<animate attributeName="width" from="0" to="' + largo +
              '" dur="0.7s" begin="' + (i * 0.08) + 's" fill="freeze" ' +
              'calcMode="spline" keySplines="0.2 0.8 0.2 1"/>'
            : "") +
        "</rect>" +
        '<text x="' + (anchoEtiqueta + largo + 10) + '" y="' + (y + 19) + '" ' +
          'fill="' + TENUE + '" font-size="13" ' +
          'font-family="Courier Prime, monospace">' + esc(d.value) + "</text>"
      );
    }).join("");

    destino.innerHTML =
      (op.title ? '<div class="chart-title">' + esc(op.title) + "</div>" : "") +
      '<svg viewBox="0 0 ' + ancho + " " + alto + '" width="100%" ' +
        'role="img" aria-label="' + esc(op.title || "Gráfica de barras") + '">' +
        filas +
      "</svg>";
  }

  /* ---- Dona: para proporciones (tipos de equipo, por ejemplo) ---- */
  function donut(destino, datos, opciones) {
    if (!destino || !datos || !datos.length) return;
    const op = opciones || {};
    const total = datos.reduce((a, d) => a + d.value, 0) || 1;
    const r = 70, grosor = 26, cx = 100, cy = 100;
    const circ = 2 * Math.PI * r;
    let recorrido = 0;

    const arcos = datos.map((d, i) => {
      const frac = d.value / total;
      const dash = frac * circ;
      const offset = -recorrido * circ;
      recorrido += frac;
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" ' +
        'stroke="' + PALETA[i % PALETA.length] + '" stroke-width="' + grosor + '" ' +
        'stroke-dasharray="' + dash + " " + (circ - dash) + '" ' +
        'stroke-dashoffset="' + offset + '" transform="rotate(-90 ' + cx + " " + cy + ')"/>';
    }).join("");

    const leyenda = datos.map((d, i) =>
      '<span class="chart-key"><i style="background:' + PALETA[i % PALETA.length] + '"></i>' +
      esc(d.label) + " <b>" + Math.round((d.value / total) * 100) + "%</b></span>"
    ).join("");

    destino.innerHTML =
      (op.title ? '<div class="chart-title">' + esc(op.title) + "</div>" : "") +
      '<svg viewBox="0 0 200 200" width="200" role="img" ' +
        'aria-label="' + esc(op.title || "Gráfica de dona") + '">' + arcos + "</svg>" +
      '<div class="chart-legend">' + leyenda + "</div>";
  }

  return { bar: bar, donut: donut, palette: PALETA };
})();
