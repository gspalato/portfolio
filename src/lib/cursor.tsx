'use client';

import { motion } from 'framer-motion';
import React, { createContext, HTMLProps, useContext, useState } from 'react';

export type CursorProps = {} & any;

export type CursorComponentDictionary = {
	[key in string]: React.ComponentType<CursorProps>;
};

type CursorContextType = {
	currentCursorKey: string | null;
	_setCurrentCursorKey: (key: string | null) => void;
};

export const CursorContext = createContext<CursorContextType>(
	{} as CursorContextType,
);

export const useCursor = () => useContext(CursorContext);

type CursorProviderProps = {} & React.PropsWithChildren;

export const CursorProvider: React.FC<CursorProviderProps> = (props) => {
	const [currentCursorKey, _setCurrentCursorKey] = useState<string | null>(
		null,
	);

	const value: CursorContextType = {
		currentCursorKey,
		_setCurrentCursorKey,
	};

	return (
		<CursorContext.Provider value={value}>
			{props.children}
		</CursorContext.Provider>
	);
};

type MouseHandlers = {
	onMouseEnter: (e: any) => void;
	onMouseLeave: (e: any) => void;
};

export const useCustomCursor = <T extends CursorComponentDictionary>(
	dictionary: T,
	key: keyof typeof dictionary | null,
): MouseHandlers => {
	const { _setCurrentCursorKey } = useCursor();

	const onMouseEnter = (e: any) => {
		_setCurrentCursorKey(key as string | null);
	};

	const onMouseLeave = (e: any) => {
		_setCurrentCursorKey(null);
	};

	return { onMouseEnter, onMouseLeave };
};

export const Cursors = {
	['test']: () => (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
			className='flex h-10 w-14 items-center justify-center rounded-lg bg-[#777]/20 p-3 backdrop-blur-md'
		>
			TEST
		</motion.div>
	),
};
