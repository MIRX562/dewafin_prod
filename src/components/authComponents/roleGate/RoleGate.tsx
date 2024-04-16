'use client';

import FormError from '@/components/formError/FormError';
import { useCurrentRole } from '@/hooks/useCurrentRole';
import { UserRole } from '@prisma/client';
import React from 'react';

type Props = {
	children: React.ReactNode;
	allowedRole: UserRole;
};

const RoleGate = ({ children, allowedRole }: Props) => {
	const role = useCurrentRole();
	if (role !== allowedRole) {
		return <FormError message='You Do Not Have Access To View This Content' />;
	}
	return <>{children}</>;
};

export default RoleGate;
