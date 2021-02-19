import React, { useState, useEffect } from 'react';
import { styled } from '../stitches.config';

// Styles
var BackgroundContainer = styled('div', {
    background: '$black',
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
});
var ContentContainer = styled('div', {
    background: 'transparent',
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 10,

    variants: {
        flex: {
            default: {
                display: 'flex',
            },
            center: {
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
            }
        }
    }
});


// Component
interface IPageProps {

};

export const Page: React.FC<IPageProps> = props => {
    return (
        <React.Fragment>
            <BackgroundContainer>
                
            </BackgroundContainer>
            <ContentContainer flex="center">
                {props.children}
            </ContentContainer>
        </React.Fragment>
    );
}