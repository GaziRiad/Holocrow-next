"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Heading>Something went wrong!</Heading>
      <Button type="signup" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
