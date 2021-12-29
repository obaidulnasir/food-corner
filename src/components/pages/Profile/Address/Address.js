import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';

const Address = () => {
    const{user} = useFirebase();
    const [address, setAddress] = useState({});
    const {
        register,
        handleSubmit,
        reset,
        formState, 
      } = useForm({
        mode: "onBlur"
      });
      const { isValid } = formState;

      useEffect(()=>{
          fetch(`http://localhost:5000/userAddress/${user?.email}`)
          .then(res=> res.json())
          .then(data=> setAddress(data))
          console.log(address?.email)
      }, [])
   

    const onSubmit = (data) => {
        fetch("http://localhost:5000/userAddress", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Address added successfully!!");
            reset();
          });
      };

   



    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    defaultValue={user?.displayName}
                                    placeholder="Your Name"
                                    {...register("userName", { required: true })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    defaultValue={user?.email}
                                    {...register("email", { required: true })}
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    * We'll never share your email with anyone else.
                                </small>
                            </div>
                           
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={address?.phone || "+880 "}
                                    placeholder=""
                                    {...register("phone", { required: true })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    defaultValue={address?.address || "" }
                                    placeholder="Your Full Address"
                                    {...register("address")}
                                ></textarea>
                                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            </div>
                            <input disabled={!isValid} className="btn btn-outline-dark my-2" type="submit" value="Submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Address;