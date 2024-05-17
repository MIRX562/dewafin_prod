"use client";

import FormError from "@/components/common/forms/FormError";
import FormSuccess from "@/components/common/forms/FormSuccess";
import { emailVerification } from "@/server-actions/emailVerification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import CardWrapper from "./CardWrapper";

export default function EmailVerificationForm() {
  const searchParams = useSearchParams();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing Token");
      return;
    }
    emailVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Go to Login Page"
      headerLabel="Confirming your email verification"
    >
      <div className="flex w-full items-center justify-center">
        <RingLoader loading={!success && !error} color="#006bf9" />
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
}
