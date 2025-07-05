"use client";
import * as action from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Fragment } from "react";
import { Toaster } from "sonner";

const LogoutButton = () => {
  const { errorToast } = useToast();
  const logoutHandler = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      const res = await action.logout();

      if (!res.success) {
        errorToast(res.data);
      }
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  return (
    <Fragment>
      <Toaster position="top-right" />
      <button className="w-100 text-left" onClick={logoutHandler}>
        Logout
      </button>
    </Fragment>
  );
};

export default LogoutButton;
