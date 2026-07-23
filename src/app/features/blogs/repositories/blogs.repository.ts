import { Observable } from 'rxjs';
import { IBlog } from '../interfaces';

export abstract class BlogsRepository {

  abstract getBlogs(): Observable<IBlog[]>;

  abstract getBlog(id: string): Observable<IBlog>;

}