import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import './App.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Authenticator />
                <h2>My App Content hello here</h2>
            </header>
        </div>
    );
}

export default withAuthenticator(App);