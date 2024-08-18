import React from 'react';
import { useAuth } from './hooks/useAuth';
import GoogleSignIn from './components/Authentication/GoogleSignIn';
import CommentsContainer from './components/Comments/CommentsContainer';

// ... rest of the file
const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="App">
      <header>
        <h1>Comment System</h1>
        {user ? (
          <p>Welcome, {user.displayName}</p>
        ) : (
          <GoogleSignIn />
        )}
      </header>
      <main>
        {user && <CommentsContainer />}
      </main>
    </div>
  );
};

export default App;