import React, { useState, useEffect } from 'react';
import { styled } from '../stitches.config';

import { Page } from '../Components/Page';
import { BaseButton } from '../Components/BaseButton';
import { Title } from '../Components/Title';

export const Home: React.FC = props => {
    return (
        <Page>
            <Title>Cum with me.</Title>
            <BaseButton>This is an example button.</BaseButton>
        </Page>
    );
}