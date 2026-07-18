import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../../interfaces';
import { CourseLevel } from '../../enums';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { TruncateTextPipe } from "../../../../shared";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.scss'],
  imports: [
    DecimalPipe,
    CurrencyPipe,
    TruncateTextPipe
],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCard {
  private _course!: ICourse;

  @Input()
  public set course(value: ICourse) {
    this._course = value;
    this.durationFormatted = this.formatDuration(value.duration);
    this.levelLabel = this.getLevelLabel(value.level);
  }

  public get course(): ICourse {
    return this._course;
  }

  @Input() public showSkeleton: boolean = false;
  @Input() public priority: boolean = false;
  @Input() public isDetailed: boolean = false;

  @Output() public courseClick = new EventEmitter<string>();
  @Output() public enrollClick = new EventEmitter<ICourse>();

  public durationFormatted: string = '';
  public levelLabel: string = '';

  private formatDuration(hours: number): string {
    if (hours >= 24) {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      return remainingHours > 0 ? `${days}d ${remainingHours}h` : `${days}d`;
    }
    return `${hours}h`;
  }

  private getLevelLabel(level: CourseLevel): string {
    const labels: Record<CourseLevel, string> = {
      [CourseLevel.Beginner]: 'Beginner',
      [CourseLevel.Intermediate]: 'Intermediate',
      [CourseLevel.Advanced]: 'Advanced',
      [CourseLevel.AllLevels]: 'All Levels'
    };
    return labels[level] || 'All Levels';
  }

  public onCourseClick(): void {
    this.courseClick.emit(this.course.id);
  }

  public onEnrollClick(event: Event): void {
    event.stopPropagation();
    this.enrollClick.emit(this.course);
  }

  public getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : (i < Math.ceil(rating) ? 0.5 : 0));
  }
}