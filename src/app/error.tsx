"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  // useEffect(() => {
  //   console.error(error);
  // }, [error]);

  function handleGoBack() {
    router.push("/");
  }
  return (
    <div>
      <h2>Ocorreu um erro!</h2>
      <h2>{error.message}</h2>
      <Button variant={"destructive"} size={"sm"} onClick={() => reset()}>
        Tentar Novamente
      </Button>
      <Button variant={"destructive"} size={"sm"} onClick={handleGoBack}>
        Voltar para o início
      </Button>
    </div>
  );
}
