/*
  Profile Component (Musician Theme)
  ----------------------------------
  Displays a profile card for a musician. It receives the musician's
  info (name, occupation, funFact, bio, imageUrl) as props from the
  parent component.

  A "Show Bio" button uses the useState hook to toggle whether the
  short bio is visible — demonstrating state-driven conditional
  rendering, just like the StudentCard component.
*/

import React, { useState } from 'react';

function Profile(props) {
  // PROPS: read-only data passed in from the parent (App.jsx).
  // This component displays them but never modifies them.
  const { name, occupation, funFact, bio, imageUrl } = props;

  // STATE: showBio starts as false (bio hidden on first render).
  // setShowBio is the only way to update it — calling it makes
  // React re-render the component with the new value.
  const [showBio, setShowBio] = useState(false);

  // Flip the state to its opposite value when the button is clicked.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    // Card container: dark "stage" background with a purple glow
    <div style={{
      maxWidth: '350px',
      padding: '24px',
      borderRadius: '16px',
      fontFamily: 'Georgia, serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#1a1a2e',
      color: '#eaeaea',
      boxShadow: '0 0 20px rgba(138, 43, 226, 0.4)',
      border: '1px solid #4b2e83'
    }}>

      {/* Musician's photo, from the imageUrl prop */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '14px',
          border: '3px solid #8a2be2'
        }}
      />

      {/* Name (prop) as the heading */}
      <h2 style={{ margin: '0', fontSize: '24px', color: '#c9a7ff' }}>
        {name}
      </h2>

      {/* Occupation (prop), e.g. "Rapper & Record Producer" */}
      <p style={{ margin: '6px 0', fontSize: '16px', fontStyle: 'italic' }}>
        {occupation}
      </p>

      {/* Fun fact (prop), always visible */}
      <p style={{ margin: '10px 0', fontSize: '14px', color: '#b8b8d1' }}>
        🎵 Fun fact: {funFact}
      </p>

      {/* Button that updates state. Its label depends on the
          current value of showBio. */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '10px 18px',
        fontSize: '14px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#8a2be2',
        color: 'white',
        fontWeight: 'bold'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* CONDITIONAL RENDERING: the bio paragraph only appears
          when showBio is true. */}
      {showBio && (
        <p style={{
          marginTop: '16px',
          fontSize: '14px',
          lineHeight: '1.5',
          color: '#dcd6f7'
        }}>
          {bio}
        </p>
      )}
    </div>
  );
}

export default Profile;
