import Link from 'next/link';
import React, {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	HTMLProps,
} from 'react';

import cn from '@lib/classes';

type Props = (
	| ({
			element?: 'button';
	  } & DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
	  >)
	| ({ element?: 'a' } & React.ComponentProps<typeof Link>)
) & { className?: string } & React.PropsWithChildren;

const Component: React.FC<Props> = (props: Props) => {
	const { children, className, element = 'button', ...rest } = props;

	const classNames = cn(
		'exclude rounded-full bg-neutral-50/25 py-1.5 px-3.5 text-sm shadow-[0_10px_5px_-2.5px_#00000020,inset_0_4px_16px_#FFFFFF50] transition-colors hover:bg-neutral-50/30 active:bg-neutral-50/40 dark:bg-neutral-700 dark:shadow-[0_10px_5px_-2.5px_#00000020,inset_0_4px_16px_rgba(150,150,150,0.5)]',
		className,
	);

	if (element === 'button')
		return (
			<button {...(rest as any)} className={classNames}>
				{children}
			</button>
		);
	else if (element === 'a')
		return (
			<Link {...(rest as any)} className={classNames}>
				{children}
			</Link>
		);
};
Component.displayName = 'NeuomorphicButton';

export default Component;
