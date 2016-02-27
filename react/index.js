/* global DattCore,window */
/**
 * This front-end entry point only serves to render the layout component.
 */
'use strict'
let React = require('react')
let ReactDOM = require('react-dom')
let Layout = require('./layout.jsx')
let os = require('os')

let config = {
  dbName: 'yours-development',
  dbBasePath: os.tmpdir(),
  blockchainAPIURI: process.browser ? window.location.origin + '/blockchain-api/' : 'http://localhost:3030/blockchain-api/',
  rendezvous: {
    host: 'localhost',
    port: 3032,
    path: '/'
  }
}

// dattcore application - the p2p/db/logic of datt
let dattcore = DattCore.getGlobal(config)

let layout = <Layout apptitle='Yours' dattcore={dattcore}/>
ReactDOM.render(layout, document.getElementById('container'))
