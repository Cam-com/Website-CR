//! Hellooooo Let's do a good job
// Im not sure where I'll need javascript in this website
// But this is fun
const Yay = 'grrrr'

//How do we even integrate Javascript to a web page ???

const spawner = require('child_process').spawn;

//String
const data_to_pass_in = 'This is the answer';

console.log('Data send to python script:', data_to_pass_in);

const python_process = spawner('python',['./Data.ipynb', data_to_pass_in]);

python_process.stdout.on('data', data => {
    console.log ('Data received from python script', data.toString());
});