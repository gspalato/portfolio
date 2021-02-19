import React, { useState, useEffect } from 'react';
import { styled } from '../stitches.config';

// Styles
var Button = styled('button', {
    alignItems: 'center',
    background: '$vividblue',
    border: 'none',
    borderRadius: '4px',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: '$paragraphFont',
    fontSize: '1.35vh',
    fontWeight: 500,
    justifyContent: 'center',
    letterSpacing: '0.2px',
    lineHeight: '2.375rem',
    padding: '0 1rem',
    textAlign: 'center',
    textDecoration: 'none',
    transition: '.07s linear',
    userSelect: 'none',
    verticalAlign: 'middle',

    '&:hover': {
        
    },
    '&:focus': {
        border: 'none',
        outline: 'none',
    },
    '&:active': {
        transform: 'scale(0.975)', 
    },

    variants: {
        mode: {
            disabled: {
                background: '$disabledgray',
                color: '$black',
                cursor: 'default',
                '&:hover': {
                    boxShadow: 'none'
                },
                '&:focus': {
                    
                },
                '&:active': {
                    boxShadow: 'none',
                }
            }
        }
    }
});

// Component
interface IBaseButtonProps {
    disabled?: boolean,
    id?: string,
    isLoading?: boolean,
    label?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

export const BaseButton: React.FC<IBaseButtonProps> = props => {
    const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

    function isDisabled() {
        var { disabled, isLoading } = props;
        return disabled || isLoading;
    }

    return (
        <Button
        id={props.id}
        disabled={isDisabled()}
        mode={isDisabled() ? "disabled" : undefined}
        onClick={props.onClick}
        ref={buttonRef}>
            {props.label || props.children}
        </Button>
    );
}