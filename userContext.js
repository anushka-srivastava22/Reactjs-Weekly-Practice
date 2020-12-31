import React, { Component } from 'react'

const UserContext = React.createRef()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider , UserConsumer }
