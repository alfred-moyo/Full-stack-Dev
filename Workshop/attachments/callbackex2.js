const fs = require('fs');

// Simulating an asynchronous operation
function readFileCallback(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return callback(err);
        callback(null, data);
    });
}

// Callback example
readFileCallback('file1.txt', (err, data1) => {
    if (err) {
        console.error('Error reading file1:', err);
        return;
    }
    
    console.log('Data from file1:', data1);

    readFileCallback('file2.txt', (err, data2) => {
        if (err) {
            console.error('Error reading file2:', err);
            return;
        }
        
        console.log('Data from file2:', data2);

        readFileCallback('file3.txt', (err, data3) => {
            if (err) {
                console.error('Error reading file3:', err);
                return;
            }
            
            console.log('Data from file3:', data3);
        });
    });
});
