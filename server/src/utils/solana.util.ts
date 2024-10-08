// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { PublicKey, Keypair, Connection } from '@solana/web3.js';
import crypto from 'crypto';


export async function verifySignIn(input: any, output: any) {
  const publicKey = new PublicKey(output.account.publicKey);
  const signature = output.signature;
  
  const message = JSON.stringify(input);
  const signer = Keypair.fromSecretKey(Uint8Array.from(signature));
  
  const publicKeyFromSigner = new PublicKey(signer.publicKey);
  const isSamePublicKey = publicKey.equals(publicKeyFromSigner);
  
  // const isValidSignature = verifySignature(message, signature, publicKey);
  
  // return isSamePublicKey && isValidSignature;
  return isSamePublicKey ;
}


export function gravatarIconUrl(email, size = 200) {
    const hash = crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
}
