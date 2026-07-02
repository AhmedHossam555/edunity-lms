import { Component } from '@angular/core';
import { HeroSection, AboutSection, FeaturedCoursesSection, StatsSection, FeatureSection, CallToActionSection, ExamPreparationSection, TestimonialsSection, EventsSection } from "../../components";
@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutSection, FeaturedCoursesSection, StatsSection, FeatureSection, CallToActionSection, ExamPreparationSection, TestimonialsSection, EventsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
