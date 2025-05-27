"use client";
import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";
import { FormContainerPropType } from "../../utils/types";

const initialState = {
  message: "",
};

function FormContainer({ action, children }: FormContainerPropType) {
  const [state, formAction] = useActionState(action, initialState);
  console.log(state);

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
