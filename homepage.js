//! Hellooooo Let's do a good job
// Im not sure where I'll need javascript in this website
// But this is fun
const Yay = 'grrrr'

// How do we even integrate Javascript to a web page ???

const { spawn } = require('child_process');
const path = require('path');

// String to pass to the python script
const data_to_pass_in = ['This is the answer'];

console.log('Data sent to python script:', data_to_pass_in);

const python_script_path = path.join(__dirname, 'Data', 'Data.py');

// Spawn the python process
const python_process = spawn('python',[python_script_path, JSON.stringify(data_to_pass_in)]);

// Handle stdout data
python_process.stdout.on('data', (data) => {
    console.log ('Data received from python script :', JSON.parse(data.toString()));
});

// Handle stderr data (errors)
python_process.stderr.on('data', (data) => {
    console.error('Error received from Python script:', JSON.parse(data.toString()));
});

// Handle process exit
python_process.on('exit', (code) => {
    console.log('Python process exited with code >{code}');
});