const a = 20;

function b (){
    const z = 15;
    console.log(a);
}

const c = 10;

b();

// Javascript is a sychorous single threaded language
// Javascript runs its code line by line
// An execution context is created immediately a javascript runs
// An execution context has two components. Memory component and Code execution component
// Javascript codes runs in two phases. Memory allocation phase, code execution phase
// A new execution context is created each time a function is called
// All execution context are created in the call stack
// Call stack manages the creation and deletion of execution context
// There are two types of execution contexts. Global execution context & Function execution context