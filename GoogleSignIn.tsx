import React from 'react';
import { signInWithGoogle } from '../../services/firebase';

const GoogleSignIn: React.FC = () => {
  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;