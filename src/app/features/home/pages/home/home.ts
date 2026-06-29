import { Component } from '@angular/core';
import { HeroSection, AboutSection, FeaturedCoursesSection } from "../../components";
@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutSection, FeaturedCoursesSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
