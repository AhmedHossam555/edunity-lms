import { inject } from '@angular/core';
import { NavigationService } from './navigation.service';
import { INavigationCommand } from '../domain';

export function useNavigation() {
  const navigationService = inject(NavigationService);
  const navigate = (command: INavigationCommand) => navigationService.navigate(command);
  return { navigate };
}

