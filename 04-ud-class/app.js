var student = new Ext.create("CustomClasses.Student");
alert("student details" + student.getStudentDetails());

document.write("<br />After giving value for student name and id.<br />");

student = new Ext.create("CustomClasses.Student", "Ramachandra", 1000);
alert(student.getStudentDetails());
