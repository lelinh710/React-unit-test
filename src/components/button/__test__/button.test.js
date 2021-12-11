import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-render';

afterEach(cleanup);

it('render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

// it('render button correctly', () => {
//     const {getByTestID} =  render(<Button label='Click me!'/>);
//     expect(getByTestID('button')).toHaveTextContent('Click me!');
// })

// it('render button correctly', () => {
//     const {getByTestID} =  render(<Button label='save'/>);
//     expect(getByTestID('button')).toHaveTextContent('save');
// })

it('match snapshot', () => {
    const tree = renderer.createRenderer(<Button label='save'/>).toJSON();
    expect(tree).toMatchSnapshot();
})

