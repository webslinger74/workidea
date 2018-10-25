import React from 'react';
import { shallow, render } from 'enzyme';
import { MessageBoard } from '../../components/MessageBoard';
import setUpTest from '../../setUpTest';

const allmessages = [
                    { _id:1,  title:"mess 1",
                      message: 'message 1',
                      createdAt:123
                      },
                    { _id:2,
                      title:"mess 2",
                      message:'message 2',
                      createdAt:123
                    },
                    { _id: 3,
                      title:"mess 3",
                      message:"message 3",
                    createdAt:123}
                      ];



const getMessages = jest.fn();


it('should render the MessageBoard component', () => {
  const wrapper = shallow(<MessageBoard getMessages={getMessages} messages={allmessages} />)
  expect(wrapper).toMatchSnapshot();
    expect(getMessages).toHaveBeenCalledTimes(1);
    expect(getMessages).toHaveBeenCalledWith();
    
  });
      
it('it should return an array of messages', () => {
  const wrapper = shallow(<MessageBoard getMessages={getMessages} messages={allmessages} />)
   const ret = wrapper.instance().showMessages(allmessages);
    console.log(ret, "ret");

    expect(wrapper.contains(<div className="ste"/>));
    expect(wrapper.contains(<h3>mess 2544</h3>));
  });

  it('it should tell if showMessages was called', () => {
    
    const wrapper = shallow(<MessageBoard getMessages={getMessages} messages={allmessages} />)
    const instance = wrapper.instance();
    jest.spyOn(instance, 'showMessages');
    instance.showMessages(allmessages);
  expect(instance.showMessages).toHaveBeenCalledWith(allmessages);
    instance.showMessages(allmessages);
  expect(instance.showMessages).toHaveBeenCalledTimes(2);
  });
   
        




