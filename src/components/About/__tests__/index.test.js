import React from 'react';
//Retrieves render and cleanup functions from the react testing library
import { render, cleanup } from '@testing-library/react'
//imports the extend-expect library from jest-dom
import '@testing-library/jest-dom/extend-expect';
import About from '..';
// After each test we will not have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    // first test
    it('renders', () => {
        render(<About></About>);
    });
    // second test
    it('matches snapshot DOM node structure', () => {
        // render about
        const { asFragment } = render(<About></About>);
        expect(asFragment()).toMatchSnapshot();
    })
})