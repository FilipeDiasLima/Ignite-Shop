import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lineItems } = req.body;

  const lineItemsData = JSON.parse(lineItems);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!lineItemsData || lineItemsData.length === 0) {
    return res.status(400).json({ error: "Price not found" });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}`,
    mode: "payment",
    line_items: lineItemsData,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
