import React from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
var Button = styled(motion.button, {
	alignItems: 'center',
	background: '$vividblue',
	border: 'none',
	borderRadius: '4px',
	color: '#ffffff',
	cursor: 'pointer',
	display: 'inline-flex',
	fontFamily: '$inter',
	fontSize: '.675vw',
	fontWeight: 500,
	justifyContent: 'center',
	lineHeight: '2.375rem',
	padding: '0 1rem',
	textAlign: 'center',
	textDecoration: 'none',
	transition: '.07s linear',
	userSelect: 'none',
	verticalAlign: 'middle',

	'&:focus': {
		border: 'none',
		outline: 'none',
	},

	variants: {
		mode: {
			disabled: {
				background: '$disabledgray',
				color: '$black',
				cursor: 'default',
			},
			success: {
				background: '$vividgreen',

			}
		}
	}
});

// Component
interface IBaseButtonProps {
	id?: string
	isDisabled?: boolean,
	isLoading?: boolean,
	isSuccessful?: boolean,
	label?: string,
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
	style?: MotionStyle,
};

export const BaseButton: React.FC<IBaseButtonProps> = props => {
	const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

	function isDisabled(): boolean {
		var { isDisabled, isLoading } = props;
		return (isDisabled ?? false) || (isLoading ?? false);
	}

	function getStyleMode(): "success" | "disabled" | undefined {
		return props.isSuccessful
			? "success"
			: props.isDisabled
				? "disabled"
				: undefined;
	}

	return (
		<Button
		id={props.id}
		disabled={isDisabled()}
		mode={getStyleMode()}
		onClick={props.onClick}
		whileTap={{ scale: .985, transition: { duration: .0 } }}
		ref={buttonRef}
		style={{ ...props.style }}>
			{props.label || props.children}
		</Button>
	);
}