import { Component } from '@angular/core';
import { BlogList } from '../../components/blog-list/blog-list';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogList],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {}
