export const parseEnv = () => {
    const argsLength = process.argv.slice(2).length;

    const args = process.argv.slice(2).map((a, i) => i % 2 ? i !== argsLength - 1 ? a + ', ' : a : a + ' is ');

    console.log('args', args. join(''));
};

parseEnv();

// function that parses command line arguments
// (given in format --propName value --prop2Name value2, you don't need to validate it)
// and prints them to the console in the format propName is value, prop2Name is value2