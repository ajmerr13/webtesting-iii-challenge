// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';

test("displays if gate is open/closed and if it is locked/unlocked", () => {
    const {getByText, getAllByText} = render(<Display />);
    getByText("Unlocked");
    getAllByText("Open")
});

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const {getByText} = render(<Display closed={true}/>);
    getByText('Closed')
});

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const {getByText} = render(<Display locked={true}/>);
    getByText("Locked")
});

test("when `locked` or `closed` use the `red-led` class", () => {
    const {getByTestId} = render(<Display locked={true} closed={true}/>);
    const lockedText = getByTestId('lock');
    const closedText = getByTestId('door');
    expect(lockedText.classList.contains('red-led')).toBe(true);
    expect(closedText.classList.contains('red-led')).toBe(true);
});

test("when `unlocked` or `open` use the `green-led` class", () => {
    const {getByTestId} = render(<Display locked={false} closed={false}/>);
    const lockedText = getByTestId('lock');
    const closedText = getByTestId('door');
    expect(lockedText.classList.contains('green-led')).toBe(true);
    expect(closedText.classList.contains('green-led')).toBe(true);
})