import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Tabs'

describe(`Tabs Component`, () => {
  const tabsProp = [
    {name:'tab1',
    content:'some random stufffff1'},
    {name:'tab2',
    content:'some random stufffff2'},
    {name:'tab3',
    content:'some random stufffff3'}]

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('changes tabs', () =>{
      const wrapper = shallow(<Tabs tabs={tabsProp}/>);
      wrapper.find('button').at(1).simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();

  })
})