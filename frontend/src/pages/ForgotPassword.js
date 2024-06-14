import React from 'react'
import { Helmet } from 'react-helmet-async'

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title> {/* Set a descriptive title */}
        <meta
          name="description"
          content=" Log In to Mo Store Now "
        />
        {/* Add a relevant description */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {/* Ensure proper mobile responsiveness */}
        {/* Add additional meta tags as needed */}
      </Helmet>
      <div>ForgotPassword</div>
    </>
  
  )
}

export default ForgotPassword