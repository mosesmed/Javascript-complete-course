const a = 10;

function b (){
    const z = 100;

    function c (){
        console.log(z);
    }

    return c;
}

const newVar = b();
newVar();

