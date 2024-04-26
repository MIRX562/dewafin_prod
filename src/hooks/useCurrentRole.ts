import { useSession } from "next-auth/react";
// get current user role from sessionprovider
export const useCurrentRole = () => {
  const session = useSession();
  return session.data?.user.role;
};
