import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
        <div id="error-page">
          <h1 className='title-error'>404</h1>
          <p className='specifics-error'>Oups! La page que vous demandez n'existe pas.</p>
          <Link to='/' className='link-home'>
            <p>Retourner sur la page d’accueil</p>
          </Link>
        </div>
    </>
  );
}