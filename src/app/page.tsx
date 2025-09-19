'use client';
import { toast } from 'sonner';

import { useMutation } from '@tanstack/react-query';

import { useTRPC } from '@/trpc/client';

import { Button } from '@heroui/react';

const Page = () => {
	const trpc = useTRPC();
	const invoke = useMutation(
		trpc.invoke.mutationOptions({
			onSuccess: () => {
				toast.success('Background Job Started');
			},
		})
	);
	return (
		<div className="mx-auto max-w-7xl p-4">
			<Button
				disabled={invoke.isPending}
				onPress={() => invoke.mutate({ text: 'Ahmed' })}
			>
				Invoke Background Job
			</Button>
		</div>
	);
};

export default Page;
