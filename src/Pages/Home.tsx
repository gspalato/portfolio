import React, { useState, useEffect } from 'react';
import { styled } from '../stitches.config';

import { Page } from '../Components/Page';
import { BaseButton } from '../Components/BaseButton';

export const Home: React.FC = props => {
    return (
        <Page>
            <BaseButton>This is an example button.</BaseButton>
        </Page>
    );
}