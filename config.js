module.exports = {
  // Porta per Render — Render assegna automaticamente PORT
  listenPort: process.env.PORT || 3000,

  // URL del server — Render fornisce automaticamente l’hostname
  // es: https://tuo-progetto.onrender.com
  publicDomain: process.env.RENDER_EXTERNAL_URL || "http://localhost:3000",

  // STUN server gratuiti (Google)
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
    { urls: "stun:stun2.l.google.com:19302" },
  ],

  // TURN opzionale: disattivato per la versione gratuita
  useTurn: false,
  turnConfig: {
    urls: [],
  },

  // Logging basico
  logLevel: "info",
};
