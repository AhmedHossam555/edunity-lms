import { Injectable } from "@angular/core";
import { RegisterRequest } from "../models";
import { AuthRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly repository: AuthRepository
  ) {}

  register(request: RegisterRequest) {

    const payload = {

      ...request,

      email: request.email.trim().toLowerCase()
    };

    return this.repository.register(payload);
  }
}