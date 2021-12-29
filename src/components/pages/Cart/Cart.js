import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../../shared/Navigation/Navigation';

const Cart = () => {
    const { user } = useFirebase();
    const [userCart, setUserCart] = useState([]);
    // const [totalPrice, setTotalPrice] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserCart(data));
    }, [user?.email]);
    console.log(userCart);
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <div className="col-md-8">
                        <div className="table-responsive">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        {/* <th>Added Date</th> */}
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userCart?.map((pr, index, price) => (
                                        
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td><img src={pr.product.imgLink} alt="img" width="20%" /></td>
                                            <td>{pr?.product.title}</td>
                                            
                                            <td>{pr?.product.price}</td>

                                            {/* <button
                                            onClick={() => {
                                                handleDelete(mo._id);
                                            }}
                                            className="btn bg-danger p-2"
                                        >
                                            Delete
                                        </button> */}
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Total Price </strong> </td>
                                        <td></td>
                                        <td  colSpan={2}> </td>
                                    </tr>
                                </tbody>

                            </Table>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;