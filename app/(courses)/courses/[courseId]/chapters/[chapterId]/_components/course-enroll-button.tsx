// "use client";

// import { Button } from "@/components/ui/button";
// import { formatPrice } from "@/lib/format";

// interface CourseEnrollButtonProps {
//   courseId: string;
//   price: number;
// }

// export const CourseEnrollButton = ({ courseId, price }: CourseEnrollButtonProps) => {
//   return (
//     <Button size="sm" className="w-full md:w-auto">
//       Enroll for {formatPrice(price)}
//     </Button>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";

interface CourseEnrollButtonProps {
  courseId: string;
  price: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const CourseEnrollButton = ({ courseId, price }: CourseEnrollButtonProps) => {

  // const handleEnroll = async () => {
  //   try {
  //     // ✅ 1. Call your backend (create order)
  //     const { data } = await axios.post(`/api/courses/${courseId}/checkout`);

  //     const options = {
  //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  //       amount: data.amount,
  //       currency: data.currency,
  //       order_id: data.orderId,
  //       name: "Course Purchase",

  //       // ✅ 2. Payment success handler
  //       handler: async function (response: any) {
  //         await axios.post("/api/verify-payment", {
  //           ...response,
  //           courseId,
  //         });

  //         alert("Payment successful ✅");
  //         window.location.reload(); // refresh to unlock course
  //       },
  //     };

  //     // ✅ 3. Open Razorpay popup
  //     const rzp = new window.Razorpay(options);
  //     rzp.open();

  //   } catch (error) {
  //     console.log(error);
  //     alert("Something went wrong");
  //   }
  // };
  const handleEnroll = async () => {
    try {
      const { data } = await axios.post(`/api/courses/${courseId}/checkout`);

      if (!data?.orderId) {
        alert("Unable to start payment");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "Course Purchase",

        method: {
          upi: true,   // ✅ enable UPI
          card: true,
          netbanking: true,
          wallet: true,
        },

        handler: async function (response: any) {
          await axios.post("/api/verify-payment", {
            ...response,
            courseId,
            amount:price,
          });

          alert("Payment successful ✅");
          window.location.reload();
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error: any) {
      console.log(error);

      if (error?.response?.data === "Already Purchased") {
        alert("You already purchased this course");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <Button
      size="sm"
      className="w-full md:w-auto"
      onClick={handleEnroll}
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};
