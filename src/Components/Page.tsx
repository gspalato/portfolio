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
            }
        },
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            }
        },
        justify: {
            start: {
                justifyContent: 'flex-start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'flex-end',
            }
        },
        align: {
            start: {
                alignItems: 'flex-start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'flex-end',
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
            <ContentContainer direction="column" justify="center" align="center">
                {props.children}
            </ContentContainer>
        </React.Fragment>
    );
}