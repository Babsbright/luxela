import type { NextApiRequest, NextApiResponse } from 'next';

// This will be a mock for now, but in a real app, you'd probably fetch from a DB
const getProductPrice = (productName: string) => {
  const productPrices: { [key: string]: number } = {
    "Mamba uniform": 0.064,
    "B/W Wrangler": 0.064,
    "Cargo Pants": 0.064,
    "Track Pants": 0.06,
  };
  return productPrices[productName] || 0;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { items } = req.body;

    let totalAmount = 0;

    // Calculate the total by adding all item prices
    items.forEach((item: { name: string; quantity: number }) => {
      const itemPrice = getProductPrice(item.name);
      totalAmount += itemPrice * item.quantity;
    });

    // Optionally, you can add delivery cost here (in SOL)
    const deliveryCost = 0.01; // for example

    const finalAmount = totalAmount + deliveryCost;

    res.status(200).json({ totalAmount: finalAmount });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
