import React from 'react';
import { shallow } from 'enzyme';
import Guide from './guide';

it('should render correctly with no props', () => {
    const component = shallow(<Guide></Guide>)
    expect(component).toMatchSnapshot();
})