import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';
import setUpTest from '../../setUpTest';

it('should render the Login component', () => {
    const loginUser = jest.fn();
    const auth = {isAuthenticated:false};

         expect(shallow(<Login loginUser={loginUser} auth={auth}/>)).toMatchSnapshot();
            expect(loginUser).toHaveBeenCalledTimes(0);  // only  called on submit so should not be called
          })
