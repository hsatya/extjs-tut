Ext.define("CustomClasses.Student", {
  studentName: "Unknown",
  id: 0,

  constructor: function (studentName, id) {
    this.studentName = studentName;
    this.id = id;
  },

  getStudentDetails: function () {
    document.write("<br />Stdudent name is " + this.studentName);
    document.write("<br />Student id " + this.id);
  },
});
