import React, { useState, useEffect } from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
var Header = styled(motion.h1, {
    color: '#ffffff',
    fontFamily: '$inter',
	fontSize: '4vw',
    fontWeight: 600,
    height: 'fit-to-content',
    marginBlockEnd: '0',
    marginBlockStart: '0',
    userSelect: 'none',
});

// Component
interface ITitleProps {
    style?: MotionStyle,
}

export const Title: React.FC<ITitleProps> = props => {
    return (
        <Header style={{ ...props.style }}>{props.children}</Header>
    );
}