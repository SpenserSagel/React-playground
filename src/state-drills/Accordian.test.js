import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian.js';

describe('accordian test', () =>{
    const sectionsProp = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ];

    it('renders empty by default', () => {
        const wrapper = shallow(<Accordian/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders closed sections by default', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('opens a section on button click', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp}/>);
        wrapper.find('button').at(0).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('closes a section when another is opened', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
        
    });
})