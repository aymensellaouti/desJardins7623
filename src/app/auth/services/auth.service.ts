import { Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../../config/api.config";
import { BehaviorSubject, Observable, Subject, map, tap } from "rxjs";
import { User } from "../dto/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.user$.pipe(map((user) => !user));
    const user = localStorage.getItem("user");
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((loginResponseDto: LoginResponseDto) => {
        localStorage.setItem("token", loginResponseDto.id);
        const user: User = new User(loginResponseDto.userId, credentials.email);
        localStorage.setItem("user", JSON.stringify(user));
        /* Informer mes abonnés qu'un user est la  */
        this.userSubject$.next(user);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.userSubject$.next(null);
  }
}
