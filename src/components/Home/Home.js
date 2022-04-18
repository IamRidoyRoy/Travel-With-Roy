import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button, Card, CardGroup, Carousel } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Home.css'


const auth = getAuth(app)
const Home = () => {

    const [user] = useAuthState(auth)
    return (
        <div className='home'>
            <div className='carousel'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/Banner-1.jpg')}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/Banner-2.jpg')}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/Banner-3.jpg')}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <h1>My Services</h1>
                <div className='container services'>
                    <CardGroup>
                        <Card className='card'>
                            <Card.Img variant="top" className='service-img' src={require("../images/travelGuide.jpg")} />
                            <Card.Body>
                                <Card.Title>Travel Guide</Card.Title>
                                <Card.Text>
                                    I am Ridoy Roy. One of the best travel guide in bangaldesh for foreign tourist.If you need an amazing guide please hire me!
                                </Card.Text>
                                <p>Price : $100 - $5000</p>
                            </Card.Body>
                            <Card.Footer>

                                {
                                    user?.uid ?
                                        <Link to='/checkout'><Button>Checkout</Button></Link>
                                        :
                                        <Link to='/register'><Button>Checkout</Button></Link>
                                }

                            </Card.Footer>
                        </Card>
                        <Card className='card'>
                            <Card.Img variant="top" className='service-img' src={require("../images/hotelBooking.jpg")} />
                            < Card.Body >
                                <Card.Title>Hotel Booking</Card.Title>
                                <Card.Text>
                                    I will book the best hotel for you.Just tell me your desire requirments.I will able to you you best services within your budget.
                                </Card.Text>
                                <p>Price : $100 - $5000</p>
                            </Card.Body>
                            <Card.Footer>
                                {
                                    user?.uid ?
                                        <Link to='/checkout'><Button>Checkout</Button></Link>
                                        :
                                        <Link to='/register'><Button>Checkout</Button></Link>
                                }
                            </Card.Footer>
                        </Card>
                        <Card className='card'>
                            <Card.Img variant="top" className='service-img' src={require("../images/Transport.jpg")} />
                            <Card.Body>
                                <Card.Title>Tranport Ticket</Card.Title>
                                <Card.Text>
                                    I will book transport ticket for you with 10% dicount.Because all transport system in bangaldesh give me this discout.So, I will able to proviide you a super ticket with less money!
                                </Card.Text>
                                <p>Price : $100 - $5000</p>
                            </Card.Body>
                            <Card.Footer>
                                {
                                    user?.uid ?
                                        <Link to='/checkout'><Button>Checkout</Button></Link>
                                        :
                                        <Link to='/register'><Button>Checkout</Button></Link>
                                }
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div >
    );
};

export default Home;