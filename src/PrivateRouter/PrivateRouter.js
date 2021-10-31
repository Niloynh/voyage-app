import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../AuthProvider/useAuth';

const PrivateRouter = ({children, ...rest}) => {
    const {user, isLoading} = useAuth()
    if(isLoading){
        return <Spinner animation="border" variant="danger" className="d-block mx-auto my-5"/>
    }
    return (
        <Route
            {...rest}
            render={({location}) =>user.email ?
            children
            :
            <Redirect
                to={{
                    pathname: '/login',
                    state: {from : location}
                }}
            >
            </Redirect>
        }
        >
            
        </Route>
    );
};

export default PrivateRouter;