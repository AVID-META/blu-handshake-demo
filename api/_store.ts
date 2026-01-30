// demo in-memory store (api/_store.ts)
// NOTE: For production, replace with Redis or a database.
import { HandshakeContext } from './types';

const STORE = new Map<string, HandshakeContext>();
const INVITES = new Map<string, { email: string; token: string; expiresAt: number }>();

export const store = {
  get: (id: string) => STORE.get(id) ?? null,
  set: (id: string, v: HandshakeContext) => { STORE.set(id, v); },
  delete: (id: string) => { STORE.delete(id); },
  listInvites: () => Array.from(INVITES.values()),
  createInvite: (email: string, token: string, ttlMs = 1000 * 60 * 60) => {
    INVITES.set(token, { email, token, expiresAt: Date.now() + ttlMs });
  },
  validateInvite: (token: string) => {
    const i = INVITES.get(token);
    if (!i) return false;
    if (Date.now() > i.expiresAt) { INVITES.delete(token); return false; }
    return i;
  }
};
