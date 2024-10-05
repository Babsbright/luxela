import { NextApiRequest, NextApiResponse } from "next";
import {
  Connection,
  Keypair,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

const connection = new Connection("https://api.mainnet-beta.solana.com");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { recipientAddress, amount } = req.body;

    if (!recipientAddress || !amount) {
      return res.status(400).json({ error: "Recipient address and amount are required." });
    }

    try {
      const payer = Keypair.fromSecretKey(
        new Uint8Array([
          82, 105, 101, 117, 217, 223, 56, 174, 30, 233,
          166, 49, 64, 244, 62, 90, 134, 214, 79, 71,
          105, 213, 110, 35, 118, 175, 221, 175, 14, 42,
          182, 150, 83, 144, 74, 43, 123, 206, 228, 186,
          170, 2, 227, 214, 71, 83, 75, 112, 206, 236,
          196, 132, 229, 243, 142, 180, 163, 113, 150, 139,
          222, 10, 247, 175,
        ])
      );
      
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: payer.publicKey,
          toPubkey: recipientAddress,
          lamports: amount * 1e9, // Convert SOL to lamports
        })
      );

      const signature = await sendAndConfirmTransaction(connection, transaction, [payer]);
      res.status(200).json({ message: "Payment successful", signature });
    } catch (error) {
      console.error("Transaction error:", error);
      res.status(500).json({ error: "Transaction failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
