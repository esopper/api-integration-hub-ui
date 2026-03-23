import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { Repo } from '../models/repo.model';
import { PageResponse } from '../models/page-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = `${environment.apiBaseUrl}/api/github/repos/search`;
  private http = inject(HttpClient);

  searchRepos(
    term: string, 
    pageIndex: number, 
    pageSize: number, 
    sort?: string, 
    order?: string
  ): Observable<ApiResponse<PageResponse<Repo>>> {
    let params = new HttpParams()
      .set('term', term ?? '')
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize);

    if (sort) {
      params = params.set('sort', sort);
    }

    if (order) {
      params = params.set('order', order);
    }

    return this.http.get<ApiResponse<PageResponse<Repo>>>(this.apiUrl, { params });
  }
}
