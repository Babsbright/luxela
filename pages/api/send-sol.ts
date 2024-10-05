import { Connection, Keypair, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Solana connection and Keypair from environment variables
const connection = new Connection(process.env.SOLANA_CLUSTER!, 'confirmed');
const secretKey = Uint8Array.from(JSON.parse(process.env.SOLANA_PRIVATE_KEY!));
const keypair = Keypair.fromSecretKey(secretKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { recipientAddress, amount } = req.body;

    try {
      const recipient = new PublicKey(recipientAddress);

      // Create a transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: keypair.publicKey,
          toPubkey: recipient,
          lamports: amount * LAMPORTS_PER_SOL, // amount in lamports (1 SOL = 1e9 lamports)
        })
      );

      // Send and confirm the transaction
      const signature = await connection.sendTransaction(transaction, [keypair]);
      await connection.confirmTransaction(signature);

      res.status(200).json({ message: 'Payment successful', signature });
    } catch (error) {
      // Cast the error to `Error` type to safely access the message property
      if (error instanceof Error) {
        res.status(500).json({ error: 'Payment failed', details: error.message });
      } else {
        res.status(500).json({ error: 'Payment failed', details: String(error) });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
