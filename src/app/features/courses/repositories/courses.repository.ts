import { Observable } from "rxjs";
import { ICourse } from "../interfaces";

export abstract class CoursesRepository {

  abstract getCourses(): Observable<ICourse[]>;

  abstract getCourse(id: string): Observable<ICourse>;

}