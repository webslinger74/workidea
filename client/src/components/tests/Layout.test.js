import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';
import setUpTest from '../../setUpTest';


it('should render the Layout component', () => {
    expect(shallow(<Layout />)).toMatchSnapshot();
})
