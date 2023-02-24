const dotenv = require( 'dotenv' )
const express = require( 'express' )
const cors = require( 'cors' )
const axios = require( 'axios' )

require( 'dotenv' ).config()
const app = express()
app.use( cors() )
app.use( express.json() )

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

app.get( '/api/books/:title', async ( request, response ) => {
    const title = request.params.title
    try {
        const found = await axios.get( `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${apiKey}` )
        response.json( found.data )
    } catch ( error ) {
        console.error( error );
    }
} )

module.exports = app