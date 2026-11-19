const fs = require('fs');

// CREATE
fs.writeFile('student.txt', 'Name: Rahul\nAge: 21', (err) => {
    if (err) throw err;
    console.log('1. File created');

    // READ
    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('2. File content:\n' + data);

        // UPDATE
        fs.appendFile('student.txt', '\nCourse: Node.js', (err) => {
            if (err) throw err;
            console.log('3. File updated');

            // READ UPDATED CONTENT
            fs.readFile('student.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log('Updated content:\n' + data);

                // DELETE
                fs.unlink('student.txt', (err) => {
                    if (err) throw err;
                    console.log('4. File deleted');
                });
            });
        });
    });
});
