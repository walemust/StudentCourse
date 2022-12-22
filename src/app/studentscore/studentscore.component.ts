import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthapiService } from '../authapi.service';
import { Course } from '../course';
import { Signup } from '../signup';

@Component({
  selector: 'app-studentscore',
  templateUrl: './studentscore.component.html',
  styleUrls: ['./studentscore.component.css'],
})
export class StudentscoreComponent implements OnInit {
  Courses: any;

  newCourse: Course = {
    matricNo: '',
    courseCode: '',
    score: 0,
  };

  score: any;
  index: any;
  res: any;
  public result: [] = [];

  calForm!: FormGroup;
  insertObj: any;
  //courseList:StudentCourse[] = [];

  // let sum = 0;

  // console.log(sum);

  constructor(
    private authapi: AuthapiService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authapi.getAllCourses().subscribe({
      next: (res) => {
        this.Courses = res;

        console.log('one course', this.Courses);
      },
      error: (response) => {
        console.log(response, ';;;;;;;;;;;;;;');
      },
    });

    this.index = 0;

    this.calForm = this.formBuilder.group({
      score: ['', Validators.required],
      course: ['', Validators.required],
      matricNo: ['', Validators.required],
    });

    // this.activatedRoute.paramMap.subscribe({
    //   next: (params) => {
    //     const id: any = params.get('id');
    //     if (id) {
    //       this.authapi.GetStudentById(id).subscribe({
    //         next: (res) => {
    //           console.log(res.firstName, 'CHECKING STUDENT FIRST NAME');
    //           this.displayUser = res;
    //         },
    //       });
    //     }
    //   },
    // });

    // this.score = 0;
    // //localStorage.clear();
    // this.Courses = [];
    // var stored = localStorage.getItem('courses');
    // console.log(stored);
    // var id = window.location.pathname.replace('/home/', '');
    //var db = '';
    // this.authapi.Get(parseInt(id)).subscribe((res) => {
    //   //console.log(res.courses)
    //   db = res.courses;
    // });

    // this.authapi.Get(parseInt(id)).subscribe((res) => {
    //   this.result = res.courses;
    //   console.log('###', this.result);
    //   var courses =
    //     stored !== null ? [...JSON.parse(stored), ...this.result] : this.result;
    //   for (let index = 0; index < courses.length; index++) {
    //     console.log(courses[index]);
    //     this.Courses.push(courses[index]);
    //   }
    // });

    //let db = this.result;
    // console.log('#', this.result);
    //var courses = stored !== null ? JSON.parse(stored) : this.authapi.Get(parseInt(id));
    // var studentCourses = JSON.parse(
    //   JSON.stringify(localStorage.getItem('courses'))
    // );
    // console.log(studentCourses);
    // for (var i of studentCourses) {
    //   console.log(studentCourses[i])
    //   this.Courses.push(studentCourses[i]);
    // }

    this.index = this.Courses.length + 1;
  }

  addCourses() {
    this.newCourse.courseCode = this.calForm.value.course;
    this.newCourse.matricNo = this.calForm.value.matricNo;
    this.newCourse.score = Number(this.calForm.value.score);

    console.log(this.newCourse, '***');
    this.authapi.addCourses(this.newCourse).subscribe({
      next: (course) => {
        this.res = course;
        console.log('344', this.res);

        if (this.res.code === 0) {
          alert(this.res.message);
        } else {
          alert(this.res.message);
        }
      },
    });
    console.log(this.newCourse);
  }

  updateCourse() {
    this.authapi
      .updateCourse(this.newCourse.matricNo, this.newCourse)
      .subscribe({
        next: (_response) => {
          this.route.navigate(['']);
        },
      });
  }

  // async Updateemployees() {
  //   var employeeupdate = await this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
  // }

  deleteCourse(matricNo: any) {
    this.authapi.deleteCourse(matricNo).subscribe({
      next: (_response) => {
        this.route.navigate(['employees']);
      },
    });
  }

  // addCourses() {
  //   this.newCourse = {
  //     courseCode: (<HTMLInputElement>document.getElementById('course_code'))
  //       .value,
  //     score: parseInt(
  //       (<HTMLInputElement>document.getElementById('score')).value
  //     ),
  //     matricNo: (<HTMLInputElement>document.getElementById('matric_no')).value,
  //   };

  //   console.log('yeaaah!!', this.newCourse);
  //   if (this.newCourse) {
  //     console.log('yeaaah!!', this.newCourse);
  //     let course = this.newCourse;
  //     this.Courses = [course, ...this.Courses];
  //     //this.Courses.push(course);
  //     this.index++;
  //     (<HTMLInputElement>document.getElementById('course_code')).value = '';
  //     (<HTMLInputElement>document.getElementById('score')).value = '';
  //     (<HTMLInputElement>document.getElementById('unit')).value = '';
  //     //this.newCourse =
  //   } else {
  //     alert('Please enter courses');
  //   }
  // }

  // remove(matricNo: string) {
  //   this.Courses = this.Courses.filter(
  //     (course) => course.matricNo !== matricNo
  //   );
  // }

  // calcuateCgpa() {
  //   let totalScore = this.Courses.map(
  //     (course) => course.unit * course.point
  //   ).reduce((acc, curr) => acc + curr, 0);
  //   let totalUnits = this.Courses.map((course) => course.unit).reduce(
  //     (acc, curr) => acc + curr,
  //     0
  //   );
  //   let gpa = totalScore / totalUnits;
  //   this.score = gpa.toFixed(2);
  // }

  // save() {
  //   console.log(this.Courses);
  //   console.log(window.location.pathname);
  //   const key = 'courses';
  //   // const value = localStorage.getItem(key);
  //   localStorage.setItem(key, JSON.stringify(this.Courses));
  //   // JSON.parse(localStorage.getItem(key))
  //   //var userCourses = localStorage.getItem(key)
  //   if (window.location.pathname.includes('home')) {
  //     //var storedCourses = userCourses !== null ? JSON.parse(userCourses) : this.newCourse;
  //     //call a service to insert
  //     var id = window.location.pathname.replace('/home/', '');
  //     console.log(id);
  //     this.insertObj.userId = parseInt(id);
  //     this.insertObj.courses = this.Courses;
  //     this.authapi.Insert(this.insertObj).subscribe((resp) => {
  //       alert(resp.message);
  //       localStorage.clear();
  //     });
  //   } else {
  //     alert('You need to login befire you can save');
  //   }
  //   //console.log(window.location.href)
  // }
  getScorePoint() {
    console.log('inside function getScorePoint');
    console.log(this.score, 'the scored entered');
    console.log('inside function getScorePoint');
    this.score = parseInt(
      (<HTMLInputElement>document.getElementById('score')).value
    );
    if (this.score >= 70) {
      console.log(`${this.score} This function returns 5 for this score`);
      return 5;
    }
    if (this.score >= 60) {
      console.log(`${this.score} This function returns 4 for this score`);
      return 4;
    }
    if (this.score >= 50) {
      console.log(`${this.score} This function returns 3 for this score`);
      return 3;
    }
    if (this.score >= 45) {
      console.log(`${this.score} This function returns 2 for this score`);
      return 2;
    }
    if (this.score >= 40) {
      console.log(`${this.score} This function returns 1 for this score`);
      return 1;
    }
    return 0;
  }
}
