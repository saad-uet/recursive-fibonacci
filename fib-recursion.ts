function fibonacci( upto, i = 0, j = 1 ){
    if ( upto < j ){
        return [ i ];
    }
    else if ( i > 0 ){
        return [ i, ...fibonacci( upto, j, i+j )];
    } else {
        return [ 0, 1, ...fibonacci( upto, 1, 2 ) ];
    }
}

let upto = 5;

console.log( fibonacci( 25 ) );