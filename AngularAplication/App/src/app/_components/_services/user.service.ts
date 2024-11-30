import { Injectable } from "@angular/core";
import { User } from "src/app/_models/user";
import { environment } from "src/environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { firstValueFrom } from "rxjs";

@Injectable ({
    providedIn: 'root',
})
export class UserService {
    baseUrl: string = environment.apiUrl;
    user: User | undefined;
    
    constructor(private http: HttpClient) {
        console.log('Object', this.baseUrl);
    }
    
    getGitUser(username: string) {
        return this.http.get(this.baseUrl + "users/" + username).pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    
    setUser(user: User | undefined) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}
