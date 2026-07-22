var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegename = "FiSaT";

    $scope.totalStudents = 1200;

    $scope.totalFaculty = 120;

    $scope.students = [
        "Shahid",
        "John",
        "Allen",
        "Shaun"
    ];

    $scope.fees = 25600;

    $scope.today = new Date();

    $scope.departments=[
        "cse","MCA","MBA","EEE","BCA","IMCA"

    ];

    $scope.selectedDepartment ="MCA";

    $scope.addStudent = function () {

        $scope.totalStudents++;

    };

});