// WAP to read student details from the le named students.txt, student details are stored line by line with following comma 
// seperated elds (C) 
// ◦ StudentID
//  ◦ StudentName
//  ◦ StudentEnrollmentNumber
//  ◦ StudentMobileNumber
//  ◦ StudentDepartment
//  ◦ StudentSPI



const fs = require('fs');

const data = fs.readFileSync('lab5.txt', 'utf-8');
const lines = data.split('\n');

lines.forEach((line) => {
    const studentDetails = line.split(',');

    if (studentDetails.length === 6) {
        console.log('Student ID:', studentDetails[0]);
        console.log('Student Name:', studentDetails[1]);
        console.log('Student Enrollment Number:', studentDetails[2]);
        console.log('Student Mobile Number:', studentDetails[3]);
        console.log('Student Department:', studentDetails[4]);
        console.log('Student SPI:', studentDetails[5]);
        console.log();
    }
});

