import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

it('render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

// it('render button correctly', () => {
//     const {getByTestID} =  render(<Button label='Click me!'/>);
//     expect(getByTestID('button')).toHaveTextContent('Click me!');
// })


