/**
 * Identifies each stat card in the "Community" banner.
 * Used as the shared key between the config (values/labels) and the
 * icon lookup (SVG markup), so the two never drift out of sync.
 */
export enum StatIconKey {
  Trained = 'trained',
  ClassesCompleted = 'classesCompleted',
  SatisfactionRate = 'satisfactionRate',
  StudentsCommunity = 'studentsCommunity',
}