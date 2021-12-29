import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {signInWithGoogle}=useFirebase();
    const location = useLocation();
  const history = useHistory();
    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <button onClick={()=>signInWithGoogle(location, history)} className="btn btn-danger">
                            <i class="bi bi-google-circle"></i>
                            Login with Google
                        </button>
                        <br /><br /><br /><br /><br /><br />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;