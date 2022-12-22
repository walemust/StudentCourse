import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Course } from './course';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root',
})
export class AuthapiService {
  [x: string]: any;
  post<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private baseApiUrl: string = 'https:localhost:44340/api/Course';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    console.log('about to make request');
    return this.http.get<Course[]>(this.baseApiUrl + '/getallcourses').pipe(
      map((data) => {
        return data;
      }),
      tap((res) => console.log(res, 'checking'))
    );
  }

  // addCourses(newCourse: any): Observable<Course> {
  //   let options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   console.log(newCourse);
  //   const response = this.http.post<any>(
  //     `${this.baseApiUrl}/createcourse`,
  //     newCourse
  //   );
  //   console.log(response);
  //   return response;
  // }

  addCourses(newCourse: any): Observable<Course> {
    // return this.http.post<Course>(this.baseApiUrl + '/createcourse', newCourse);
    return this.http
      .post<Course>(this.baseApiUrl + '/createcourse', newCourse)
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(res, 'just added'))
      );
  }

  getCourse(matricNo: any): Observable<Course> {
    return this.http
      .get<Course>('http://localhost:44340/api/Course/getcoursebyid' + matricNo)
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res))),
        catchError(this.handleError)
      );
  }

  updateCourse(matricNo: any, newCourse: Course): Observable<Course> {
    return this.http
      .put<Course>(
        `http://localhost:44340/api/Course/updatecourse/${matricNo}`,
        newCourse
      )
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res))),
        catchError(this.handleError)
      );
  }

  deleteCourse(matricNo: any): Observable<Course> {
    return this.http
      .delete<Course>('http://localhost:44340/api/Employees/' + matricNo)
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Wale, An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  // GetStudentById(id: any): Observable<Signup> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
  //       'Access-Control-Allow-Headers': 'application/json',

  //       //'HTTP/1.1': '200 OK',
  //     }),
  //   };
  //   //addEmployee.id = '00000000-0000-0000-0000-000000000000';
  //   return this.http
  //     .post<Employee>('http://localhost:41712/api/Employees', addEmployee)
  //     .pipe(
  //       map((data) => {
  //         return data;
  //       }),
  //       tap((res) => console.log(JSON.stringify(res))),
  //       catchError(this.handleError)
  //     );
  // }

  // signUp(userObj: any) {
  //   console.log('***', userObj);
  //   return this.http.post<any>(`${this.baseURL}/register`, userObj);
  // }

  // logIn(loginObj: Login): Observable<ApiResponse> {
  //   let options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   console.log(loginObj)
  //   const response = this.http.post<any>(
  //     `${this.baseURL}/authenticate`,
  //     loginObj,
  //   );
  //   console.log(response)
  //   return response;
  // }
  // Register(userObj: any): Observable<Apiresponse> {
  //   let options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   console.log(userObj);
  //   const response = this.http.post<any>(`${this.baseURL}/register`, userObj);
  //   console.log(response);
  //   return response;
  // }

  // GetStudentById(id: any): Observable<Signup> {
  //   return this.http
  //     .get<Signup>(this.baseURL + '/getStudentById?Id=' + id)
  //     .pipe(
  //       map((data) => {
  //         return data;
  //       })
  //     );
  // }

  // Insert(insertObj: Course): Observable<Apiresponse> {
  //   let options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   console.log(insertObj);
  //   const response = this.http.post<any>(
  //     `${this.baseURL}/savecourse`,
  //     insertObj
  //   );
  //   console.log(response);
  //   return response;
  // }
  // Get(id: number): Observable<Apiresponse> {
  //   let options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   console.log(id);
  //   const response = this.http.get<any>(`${this.baseURL}/getcourse?id=${id}`);
  //   console.log(response);
  //   return response;
  // }

  // GetCourseCode(id: number): Observable<Apiresponse> {
  //   let options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   console.log(id);
  //   const response = this.http.get<any>(`${this.baseURL}/getcourse?id=${id}`);
  //   console.log(response);
  //   return response;
  // }
}
