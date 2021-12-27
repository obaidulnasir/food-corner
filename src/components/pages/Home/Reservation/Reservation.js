import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Reservation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    // console.log(watch("example"));

    return (
        <div>
            <div className="my-5">
                <Container>
                    <div className="text-center my-5">
                        <p>RESERVATION</p>
                        <h3>BOOK YOUR TABLE</h3>
                    </div>
                    <div className="w-75 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-3">
                                <div className="col">
                                    <input {...register("name", { required: true })} type="text" className="form-control" placeholder="Name" aria-label="Name" />
                                </div>
                                <div className="col">
                                    <input {...register("email", { required: true })} type="email" className="form-control" placeholder="Email" aria-label="Email" />
                                </div>
                            </div>
                            <div className="row g-3 mt-2">
                                <div className="col">
                                    <input {...register("data", { required: true })} type="date" className="form-control" placeholder="Date" aria-label="Date" />
                                </div>
                                <div className="col">
                                    <input {...register("time", { required: true })} type="time" className="form-control" placeholder="time" aria-label="Time" />
                                </div>
                            </div>
                            <div className="row g-3 mt-2">
                                <div className="col">
                                    <input {...register("people", { required: true })} type="number" className="form-control" placeholder="People" aria-label="People" />
                                </div>
                                {errors.exampleRequired && <span>This field is required</span>}
                                <div className="col">
                                    <input style={{backgroundColor: "#BF2222",color:"#FFF", border: "none"}} type="submit" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
                {/* <div>
                    <button onClick={signInWithGoogle}> with google</button>
                </div> */}
            </div>
        </div>
    );
};

export default Reservation;