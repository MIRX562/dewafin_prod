'use client';
import { useForm } from 'react-hook-form';
import CardWrapper from '../cardWrapper/CardWrapper';
import * as z from 'zod';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/formError/FormError';

import { login } from '@/actions/login';
import { useState, useTransition } from 'react';
import FormSuccess from '@/components/formSucces/FormSuccess';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
	const searchParams = useSearchParams();
	const urlError =
		searchParams.get('error') === 'OAuthAccountNotLinked'
			? 'Email already used with other provider'
			: '';
	const [success, setSuccess] = useState<string | undefined>('');
	const [error, setError] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError('');
		setSuccess('');

		startTransition(() => {
			login(values).then((data) => {
				setError(data?.error);
				// for 2FA
				// setSuccess(data?.success);
			});
		});
	};

	return (
		<CardWrapper
			headerLabel='Welcome Back'
			backButtonLabel="don't have an account?"
			backButtonHref='/auth/register'
			showSocial>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder='mail@example.com'
											type='email'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder='********'
											type='Password'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error || urlError} />
					<FormSuccess message={success} />
					<Button disabled={isPending} typeof='submit' className='w-full'>
						Login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
}
