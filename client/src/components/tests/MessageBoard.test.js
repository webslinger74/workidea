import React from 'react';
import { shallow } from 'enzyme';
import { MessageBoard } from '../../components/MessageBoard';
import setUpTest from '../../setUpTest';

const allmessages = [{1:'message 1'},{2:'message 2'},{3:'message3'}];
const getMessages = jest.fn();

it('should render the MessageBoard component', () => {
    expect(shallow(<MessageBoard getMessages={getMessages} messages={allmessages} />)).toMatchSnapshot();
})
