import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../../shared/Navigation/Navigation';
import Address from './Address/Address';
import MyOrder from './MyOrder/MyOrder';

const Profile = () => {
    const { user } = useFirebase();
    let { path, url } = useRouteMatch();

    return (
        <div>
            <Navigation></Navigation>
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        {
                            user?.photoURL ? <img src={user?.photoURL} className="img-fluid rounded" alt="profileImg" /> :
                                <div><i className="bi bi-person-circle fs-2"></i></div>
                        }
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link to={`${url}/address`}>
                                <button type="button" className="btn btn-warning">Address</button>
                            </Link>
                            {/* <Link to={`${url}/myCart`}>
                                <button type="button" className="btn btn-warning">My Cart</button>
                            </Link> */}
                            <Link to={`${url}/myOrder`}>
                                <button type="button" className="btn btn-warning">My Order</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path={`${path}/address`}>
                                <Address></Address>
                            </Route>
                            {/* <Route exact path={`${path}/myCart`}>
                                <Cart></Cart>
                            </Route> */}
                            <Route exact path={`${path}/myOrder`}>
                                <MyOrder></MyOrder>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;