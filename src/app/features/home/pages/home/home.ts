import { Component } from '@angular/core';
import { HeroSection, AboutSection, FeaturedCoursesSection, StatsSection, FeatureSection, CallToActionSection, ExamPreparationSection, TestimonialsSection, EventsSection, InstructorsSection } from "../../components";
@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutSection, FeaturedCoursesSection, StatsSection, FeatureSection, CallToActionSection, ExamPreparationSection, TestimonialsSection, EventsSection, InstructorsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
