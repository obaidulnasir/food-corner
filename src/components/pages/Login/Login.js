import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../shared/Navigation/Navigation';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {signInWithGoogle}=useFirebase();
    const location = useLocation();
  const history = useHistory();
    return (
        <div>
            <Navigation></Navigation>
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <button onClick={()=>signInWithGoogle(location, history)} className="btn btn-danger">
                            <i class="bi bi-google-circle"></i>
                            Login with Google
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;