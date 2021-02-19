import React, { useState, useEffect } from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
var Text = styled(motion.p, {
    color: '#ffffff',
    fontFamily: '$inter',
	fontSize: '1vw',
    //fontWeight: 500,
    userSelect: 'none',
});

// Component
interface IParagraphProps {
    style?: MotionStyle,
}

export const Paragraph: React.FC<IParagraphProps> = props => {
    return (
        <Text style={{ ...props.style }}>{props.children}</Text>
    );
}