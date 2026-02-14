import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'http://localhost:8080/api/github/repos/search';
  private http = inject(HttpClient);

  getRepos(username: string): Observable<ApiResponse<Repo[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.apiUrl}/${username}`).pipe(
      map(response => ({
        ...response,
        data: response.data.map(repo => ({
          ...repo,
          stargazersCount: repo.stargazers_count
        }))
      }))
    );
  }
}
