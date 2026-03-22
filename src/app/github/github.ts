import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Repo } from '../models/repo.model';
import { GithubService } from '../services/github.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-github',
  imports: [FormsModule, CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './github.html',
  styleUrl: './github.scss'
})
export class Github {
  // Search
  term = '';

  // Table
  repos: Repo[] = [];
  repoFields: string[] = ['name', 'stars', 'language'];

  // Pagination
  total = 0;
  pageIndex = 0;
  pageSize = 10;

  // UI state
  loading = false;
  error: string | null = null;
  hasSearched = false;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  private readonly destroy$ = new Subject<void>();

  constructor(private gitHubService: GithubService) {}

  get showEmptyState(): boolean {
    return this.hasSearched && !this.loading && !this.error && this.repos.length === 0;
  }

  fetchRepos() {
    if(!this.term) {
      return;
    }
    this.hasSearched = true;
    this.pageIndex = 0;

    if(this.paginator) {
      this.paginator.firstPage();
    }

    this.loadPage();
  }

  private loadPage() {
    this.loading = true;
    this.error = null;

    this.gitHubService
      .searchRepos(this.term, this.pageIndex, this.pageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if(!res.success || !res.data) {
            this.repos = [];
            this.total = 0;
            this.error = res.message || 'Unexpected error';
            this.loading = false;
            return;
          }

          this.repos = res.data.items;
          this.total = res.data.total;
          this.loading = false;
        },
        error: (err) => {
          this.repos = [];
          this.total = 0;
          this.error = err?.error?.message || 'Request failed';
          this.loading = false;
        }
      });
  }

  onPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPage();
  }
}
