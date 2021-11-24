const {UserModel} = require('./../models/UsersModel');

const UserController = {
    gohome : function(req, response){
        response.render( 'home');
    },
    addquote : function( request, response ){
        console.log( request.body );
        const id = Number(request.body.userId);
        const firstName = request.body.firstName;
        const lastName = request.body.lastName;
        const quote = request.body.userQuote;
        const created_at = new Date();
    
        // Run validations to see if the 'id' is not already in the list
        const newUser = {
            id,
            firstName,
            lastName,
            quote,
            created_at
        };
    
        console.log( newUser );
        UserModel
            .createUser( newUser )
            .then( result => {
                console.log( result );
                response.redirect( '/users/quotes' );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
                response.redirect( '/users/gohome' );
            })
    },
    quoteshome : function(req, response){
        UserModel
            .getQuotes()
            .then( result => {
                if( result === null ){
                    throw new Error( "Result: None" );
                }
                console.log("All quotes added: "+ result);
                response.render( 'quotesall', { found: true, user: result } );
                console.log("QQQQQQQQ "+ user);
            })
            .catch( err => {
                response.render( 'quotesall', { found: false } );
            })
    }

}

module.exports = {UserController};
