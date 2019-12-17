// Test away
import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from './Dashboard';

test("render controls and display", () => {
    const {getByTestId} = render(<Dashboard />);
    getByTestId('controls');
    getByTestId('display')
})