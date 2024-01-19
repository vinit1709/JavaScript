// Immediately Invoked Function Expressions (IIFE)

// IIFE use for immediately function execution
(function chai() {
    // named iife
    console.log(`DB Connected`);
})();   // after end function must write ';'

( (name) => {
    // unnamed iife
    console.log(`DB Connected Two ${name}`);
})('vinit');