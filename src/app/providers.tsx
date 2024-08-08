'use client';

import { Provider } from 'jotai';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import { CursorProvider } from '@lib/cursor';

type Props = {} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children } = props;

	return (
		<Provider>
			<CursorProvider>{children}</CursorProvider>
		</Provider>
	);
};
Component.displayName = 'Providers';

export default Component;
