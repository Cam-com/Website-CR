const { spawn } = require('child_process');
const path = require('path');


// String to pass to the python script
const data_to_pass_in = {
    data_sent: 'This is the answer',
    data_returned: undefined
};


console.log('Data sent to python script:', data_to_pass_in);

const python_script_path = path.join(__dirname, 'Data', 'Data_Cleaned_1.py');

// Spawn the python process
const python_process = spawn('python',[python_script_path, JSON.stringify(data_to_pass_in)]);

// Handle stdout data
python_process.stdout.on('data', (data) => {
    try {
        const jsonData = JSON.parse(data.toString());
        console.log('Data received from Python script:', jsonData);
    } catch (error) {
        console.error('Error parsing JSON from Python script:', error);
        console.error('Raw data:', data.toString());
    }
});

// Handle stderr data (errors)
python_process.stderr.on('data', (data) => {
    console.error('Error received from Python script:', JSON.parse(data.toString()));
});

// Handle process exit
python_process.on('exit', (code) => {
    console.log('Python process exited with code >{code}');
});

var CARD = Vocabulary.html.querySelector('#CARD');
var CARDcontent = Vocabulary.html.querySelector('#CARD p')

CARDcontent.innerHTML = "Voici le texte qui est maintenant affiché dans le paragraphe.<br>L'ancien texte a été supprimé" ; 