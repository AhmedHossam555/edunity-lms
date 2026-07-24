import { Component } from '@angular/core';
import { BlogList } from '../../components/blog-list/blog-list';
import { PageBanner } from "@app/shared";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogList, PageBanner],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {}
