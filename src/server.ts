/**
 * @package Express ts example
 * @license MIT 
 * @version 0.1.0
 * @author lotfio lakehal
 * 
 */

 import path from "./config/path";

 console.log(path);


/*import express, { Application } from "express";
import path from "path";

const app: Application = express();

const port: number = 8080; // default port to listen

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "app/views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );*/