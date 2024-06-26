import React from 'react';

type Props = {
	className?: string;
	style?: React.CSSProperties;
} & React.PropsWithChildren;

const Component: React.FC<Props> = () => {
	return <section></section>;
};

export default Component;
