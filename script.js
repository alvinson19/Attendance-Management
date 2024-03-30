// Define an array of student data
var students = [
    { usn: "1MJ23CS001", name: "A LAVANYA" },
    { usn: "1MJ23CS002", name: "A S BINUSHA" },
    { usn: "1MJ23CS003", name: "AAKANKSHA ANIL KUMAR" },
    { usn: "1MJ23CS004", name: "ABDUL TOUHEED" },
    { usn: "1MJ23CS005", name: "ABHISHEK A" },
    { usn: "1MJ23CS006", name: "ABHISHEK K" },
    { usn: "1MJ23CS007", name: "ABHISHEK S S" },
    { usn: "1MJ23CS008", name: "ADITYA SURESH" },
    { usn: "1MJ23CS009", name: "AKASH" },
    { usn: "1MJ23CS010", name: "AKSHATA" },
    { usn: "1MJ23CS011", name: "AKSHAY H" },
    { usn: "1MJ23CS012", name: "ALVIN SONNY" },
    { usn: "1MJ23CS013", name: "AMULYA GOUDA" },
    { usn: "1MJ23CS014", name: "ANAGHASHREE" },
    { usn: "1MJ23CS015", name: "ANANYA SANJIV" },
    { usn: "1MJ23CS016", name: "ANIKETHA H N" },
    { usn: "1MJ23CS017", name: "ANKITA CHARAN" },
    { usn: "1MJ23CS018", name: "ANUSHREE D S" },
    { usn: "1MJ23CS019", name: "ARALUR DARSHANKUMAR" },
    { usn: "1MJ23CS020", name: "ARFA KUSUM" },
    { usn: "1MJ23CS021", name: "ARJUN SHARMA" },
    { usn: "1MJ23CS022", name: "ARUN ESHWAROOP" },
    { usn: "1MJ23CS023", name: "ASSEMA SULTHANA" },
    { usn: "1MJ23CS024", name: "AVIRAJ BHAWRHA" },
    { usn: "1MJ23CS025", name: "AYUSH KUMAR" },
    { usn: "1MJ23CS026", name: "BALAJI R" },
    { usn: "1MJ23CS027", name: "BAPUGOUDA" },
    { usn: "1MJ23CS028", name: "BASAVARAJ" },
    { usn: "1MJ23CS029", name: "BASAVARAJ B" },
    { usn: "1MJ23CS030", name: "BHARATH C" },
    { usn: "1MJ23CS031", name: "BARGAVI VR" },
    { usn: "1MJ23CS032", name: "BHAVANA DS" },
    { usn: "1MJ23CS033", name: "CHANDANA SHREE" },
    { usn: "1MJ23CS034", name: "CHANDAN D P" },
    { usn: "1MJ23CS035", name: "CHANNABASAVA" },
    { usn: "1MJ23CS036", name: "CHETAN KUMAR" },
    { usn: "1MJ23CS037", name: "CHETHANASHREE" },
    { usn: "1MJ23CS038", name: "CHIRANTH" },
    { usn: "1MJ23CS039", name: "CHRISTY SHEPHARD" },
    { usn: "1MJ23CS040", name: "D MANOHAR" },
    { usn: "1MJ23CS041", name: "D NEHA" },
    { usn: "1MJ23CS042", name: "DANISH" },
    { usn: "1MJ23CS043", name: "DARSHAN" },
    { usn: "1MJ23CS044", name: "DEBADITYA DAS" },
    { usn: "1MJ23CS045", name: "DEEKSHITA" },
    { usn: "1MJ23CS046", name: "DEEPTHI" },
    { usn: "1MJ23CS047", name: "DEERAJ ASHOK" },
    { usn: "1MJ23CS048", name: "DHANUSH D" },
    { usn: "1MJ23CS049", name: "DHANUSH JAIN" },
    { usn: "1MJ23CS050", name: "DHARSHAN V" },
    { usn: "1MJ23CS051", name: "DINESH MANGE" },
    { usn: "1MJ23CS052", name: "DISHA V O" },
    { usn: "1MJ23CS053", name: "VANDHANA" },
    { usn: "1MJ23CS054", name: "G M VISHWANATH" },
    { usn: "1MJ23CS055", name: "GAAZIL" },
    { usn: "1MJ23CS056", name: "GANESH N" },
    { usn: "1MJ23CS057", name: "GANESH VALLABH" },
    { usn: "1MJ23CS058", name: "GANESH TEJASWI" },
    { usn: "1MJ23CS059", name: "GEETHA G S" },
    { usn: "1MJ23CS060", name: "GORTY ANIKETH" },
    { usn: "1MJ23CS061", name: "GOWRI KRISHNAN NAIR" },
    { usn: "1MJ23CS062", name: "GURBASHISH SENA NAYAK" },
    { usn: "1MJ23CS063", name: "H D ANANYA" }
];

function updateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById("datetime");
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero
    var time = hours + ':' + minutes + ' ' + ampm;
    datetimeElement.textContent = now.toLocaleDateString() + ' ' + time;
    setTimeout(updateTime, 1000); // Update time every second
}

function generateReport() {
    var subject = document.getElementById("subject").value;
    var date = new Date().toLocaleDateString();
    var uncheckedStudents = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
    var report = "Absentees List for " + subject + " on " + date + ":\n\n";
    report += "USN No\t\tName\n";
    uncheckedStudents.forEach(function(student) {
        var usn = students[parseInt(student.getAttribute("data-rollno")) - 1].usn;
        var name = students[parseInt(student.getAttribute("data-rollno")) - 1].name;
        report += usn + "\t\t\t" + name + "\n";
    });
    var reportText = document.getElementById("reportText");
    reportText.value = report;
    document.getElementById("reportContainer").style.display = "block";
}

function copyReport() {
    var reportText = document.getElementById("reportText");
    reportText.select();
    document.execCommand("copy");
    alert("Report copied to clipboard!");
}

function createStudentList() {
    var studentList = document.getElementById("studentList");
    students.forEach(function(student, index) {
        var listItem = document.createElement("li");
        listItem.classList.add("student-item");
        var usn = student.usn;
        var name = student.name;
        listItem.innerHTML = `
            <input type="checkbox" data-rollno="${index + 1}">
            <label for="rollno${index + 1}">${usn} - ${name}</label>
        `;
        studentList.appendChild(listItem);
    });
}

// Call functions
updateTime();
createStudentList();
