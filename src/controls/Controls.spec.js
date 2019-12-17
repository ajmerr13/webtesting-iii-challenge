// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

test("provide buttons to toggle the `closed` and `locked` states", () => {
    const {getByTestId} = render(<Controls />);
    getByTestId(/lockButton/i);
    getByTestId(/actionButton/i)
});

test("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const {getByText} = render(<Dashboard />);
    const actionButton = getByText("Close Gate");
    const lockButton = getByText('Lock Gate');
    fireEvent.click(actionButton);
    getByText("Open Gate")
    fireEvent.click(lockButton);
    getByText('Unlock Gate');
});

test("the closed toggle button is disabled if the gate is locked", () => {
    const toggleLocked = jest.fn();
    const {getByText} = render(<Controls  toggleLocked={toggleLocked}/>);
    const lockButton = getByText('Lock Gate');
    fireEvent.click(lockButton);
    expect(toggleLocked).not.toHaveBeenCalled();
});

test("the locked toggle button is disabled if the gate is open", () => {
    const toggleClosed = jest.fn();
    const {getByText} = render(<Controls locked={true} toggleClosed={toggleClosed}/>);
    const actionButton = getByText("Close Gate");
    fireEvent.click(actionButton);
    expect(toggleClosed).not.toHaveBeenCalled()
})