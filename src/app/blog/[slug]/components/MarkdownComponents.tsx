import { Code } from 'bright';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const MDXComponents: { [key: string]: React.FC<any> } = {
	a: ({ children, ...props }) => {
		return (
			<Link {...props} href={props.href || ''}>
				{children}
			</Link>
		);
	},
	img: ({ children, props }) => {
		// You need to do some work here to get the width and height of the image.
		// See the details below for my solution.
		return <Image {...props} />;
	},
	// any other components you want to use in your markdown
	pre: Code,
};
