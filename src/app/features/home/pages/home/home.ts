import { Component } from '@angular/core';
import { HeroSection, AboutSection } from "../../components";

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
