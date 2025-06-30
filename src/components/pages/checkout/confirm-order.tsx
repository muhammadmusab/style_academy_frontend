import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
const asyncStripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
const ConfirmOrderButton = ({ paymentMode }: { paymentMode: string }) => {
  const router = useRouter();
  const handler = async () => {
    try {
      const stripe = await asyncStripe;
      const res = await fetch("/api/stripe", {
        method: "POST",
        body: JSON.stringify({
          amount: 1,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const { sessionId } = await res.json();

      const { error } = (await stripe?.redirectToCheckout({
        sessionId,
      })) as any;
      console.log(error);
      if (error) {
        router.push("/error");
      }
    } catch (err) {
      console.log(err);
      router.push("/error");
    }
  };
  return (
    <button
      onClick={handler}
      className="transition-all bg-primary font-roboto font-bold text-white py-4 text-center md:px-[30px] hover:bg-primary-foreground mt-[20px] w-full"
    >
      Confirm Order
    </button>
  );
};

export default ConfirmOrderButton;
