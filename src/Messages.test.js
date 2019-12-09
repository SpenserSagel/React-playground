import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages.js';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe("Messages", () =>{
    it("RendersWithoutCrashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("RendersAsExpected", () => {
        const tree = renderer.create(<Messages name="Messages" unread={4}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("RendersWithNoUnread", () => {
        const tree = renderer.create(<Messages name="Messages" unread={0}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});