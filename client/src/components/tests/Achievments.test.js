import { shallow, mount, render } from 'enzyme';

import Achievements from '../Achievments';
import React from 'react';
import setUpTest from '../../setUpTest';



it('expects to render the Achievments component', () => {
    expect(shallow(<Achievements />)).toMatchSnapshot();
})

