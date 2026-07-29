import { Injectable } from "@angular/core";
import { AuthApi } from "../api";
import { RegisterRequest } from "../models";

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {

  constructor(
    private readonly api: AuthApi
  ) {}

  register(request: RegisterRequest) {
    return this.api.register(request);
  }
}