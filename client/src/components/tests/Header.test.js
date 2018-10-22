import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import setUpTest from '../../setUpTest';



it('should render the Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
})