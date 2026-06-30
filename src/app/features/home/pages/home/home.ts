import { Component } from '@angular/core';
import { HeroSection, AboutSection, FeaturedCoursesSection, StatsSection, FeatureSection } from "../../components";
@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutSection, FeaturedCoursesSection, StatsSection, FeatureSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
