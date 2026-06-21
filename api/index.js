// api/index.js
export default import('../dist/agro-teba-international/server/server.mjs').then(
  (module) => module.reqHandler,
);
