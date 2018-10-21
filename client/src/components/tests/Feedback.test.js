import React from 'react';
import { shallow } from 'enzyme';
import Feedback from '../../components/Feedback';
import setUpTest from '../../setUpTest';


it('should render the Feedback component', () => {
    expect(shallow(<Feedback />)).toMatchSnapshot();
})


