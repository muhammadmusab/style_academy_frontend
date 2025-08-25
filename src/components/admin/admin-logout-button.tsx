"use client";
import * as action from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Fragment } from "react";
import { Toaster } from "sonner";

const AdminLogoutButton = () => {
  const { errorToast } = useToast();
  const logoutHandler = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      const res = await action.logoutAdmin();

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
      <button className="w-100 text-left bg-primary hover:bg-primary-foreground py-2 px-5 text-white" onClick={logoutHandler}>
        Logout
      </button>
    </Fragment>
  );
};

export default AdminLogoutButton;
