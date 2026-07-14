import { ToastType } from '../enums/toast-type.enum';

export interface ToastModel {
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly type: ToastType;
  readonly duration: number;
  readonly closable: boolean;
  readonly createdAt: number;
}