export type Role = 'VENDOR' | 'ADMIN' | 'GUEST';

export interface UserSession {
  sessionId: string;
  userId: string;
  boundEndpoint: string;
  roles: Role[];
  issuedAt: number;
  expiresAt: number;
}

export interface HandshakeContext {
  handshakeId: string;
  stage: 'INIT' | 'RESOLVING' | 'SYNCING' | 'DECRYPTING' | 'AUTHORIZED';
  progress: number;
  logs: string[];
}

export interface HandshakeInitRequest {
  email: string;
  clientFingerprint: string;
}

export interface HandshakeVerifyRequest {
  handshakeId: string;
  securityToken: string;
  signature?: string;
  timestamp?: number;
  nonce?: string;
}

export interface VerifyResponse {
  jwt: string;
  session: UserSession;
  redirectUrl?: string;
}