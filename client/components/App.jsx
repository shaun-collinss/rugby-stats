import React, { useState, useEffect } from 'react'

import { getWelcome } from '../api'

function App () {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then(res => {
        setWelcomeStatement(res.statement)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement}?:: Hi There</h1>
      <p>This should be some states and shit</p>
    </>
  )
}

export default App
