"use client";

import AccessDenied from "@/components/accessDeniedPage/AccessDenied";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";

type Props = {
	children: React.ReactNode;
	allowedRole: UserRole;
};

const RoleGate = ({ children, allowedRole }: Props) => {
	const role = useCurrentRole();
	if (role !== allowedRole) {
		return <AccessDenied />;
	}
	return <>{children}</>;
};

export default RoleGate;
