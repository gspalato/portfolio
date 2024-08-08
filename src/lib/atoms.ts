import { atom, createStore } from 'jotai';
import React from 'react';

export const store = createStore();

export const isTouchDeviceAtom = atom(false);
