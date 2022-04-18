import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'>
            <div className='singleBlog'>
                <h1>Difference between authorization and authentication.</h1>
                <p>Answer:authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.

                    In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users. </p>
            </div >
            <div className='singleBlog'>
                <h1>Why are you using `firebase`? What other options do you have to implement authentication?</h1>
                <p>Answer: Deliver and receive messages in a more reliable way across platforms. Authentication: Have a lot less friction with acclaimed authentication. Hosting: Deliver web content faster. Remote Configuration: Customize your app on the go.
                    You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. </p>
            </div>
            <div className='singleBlog'>
                <h1>What other services does `firebase` provide other than authentication</h1>
                <p>Answer: <br />
                    Parse – Open Source Backend Platform; <br />
                    Back4app – Parse Hosting Platform; <br />
                    Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise; <br />
                    Backendless – Mobile Backend and API Services Platform;  <br />
                    Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects; </p>
            </div>

        </div>
    );
};

export default Blogs;