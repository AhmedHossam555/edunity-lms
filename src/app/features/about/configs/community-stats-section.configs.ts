import { StatIconKey } from '../enums';
import type { ICommunityStatsConfig } from '../interfaces';

/**
 * Single source of truth for every piece of copy/data that used to be
 * hard-coded inline in the template (stat numbers, labels, testimonial
 * header, and testimonial cards).
 */
export const COMMUNITY_STATS_CONFIG: ICommunityStatsConfig = {
  stats: [
    { id: StatIconKey.Trained, value: '3K+', label: 'Successfully Trained' },
    { id: StatIconKey.ClassesCompleted, value: '15K+', label: 'Classes Completed' },
    { id: StatIconKey.SatisfactionRate, value: '97K+', label: 'Satisfaction Rate' },
    { id: StatIconKey.StudentsCommunity, value: '102K+', label: 'Students Community' },
  ],

  testimonialsHeader: {
    tag: 'TESTIMONIAL',
    titleLines: ['Creating A Community Of', 'Life Long Learners.'],
  },

  testimonials: [
    {
      id: 'testimonial-1',
      reviewText:
        'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing',
      author: { name: 'Kathy Sullivan', role: 'CEO at ordian it' },
    },
    {
      id: 'testimonial-2',
      reviewText:
        'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing',
      author: { name: 'Elsie Stroud', role: 'CEO at Edwards' },
    },
    {
      id: 'testimonial-3',
      reviewText:
        'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing',
      author: { name: 'Kathy Sullivan', role: 'CEO at ordian it' },
    },
  ],
};
