import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
var Header = styled(motion.h1, {
    color: '#ffffff',
    fontFamily: '$inter',
	fontSize: '4vw',
    fontWeight: 600,
    userSelect: 'none',
});

// Component
interface ITitleProps {

}

export const Title: React.FC<ITitleProps> = props => {
    return (
        <Header>{props.children}</Header>
    );
}