import React, { useState, useEffect } from 'react';
import { styled } from '../stitches.config';

import { BaseButton } from '../Components/BaseButton';
import { Page } from '../Components/Page';
import { Title } from '../Components/Title';
import { Paragraph } from '../Components/Paragraph';
import { Parallax } from '../Components/Parallax';

export const Home: React.FC = props => {
	return (
		<Page>
			<Parallax>
				<Title>Come with me...</Title>
			</Parallax>
			<Paragraph>...And you'll be in a world of pure imagination.</Paragraph>
			<BaseButton>This is an example button.</BaseButton>
			<div style={{height:'250vh'}}></div>
		</Page>
	);
}