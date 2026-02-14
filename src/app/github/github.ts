import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Repo } from '../models/repo.model';
import { GithubService } from '../services/github.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-github',
  imports: [FormsModule, CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './github.html',
  styleUrl: './github.scss'
})
export class Github implements AfterViewInit {

  username = '';
  repos: Repo[] | null = null;
  error: string | null = null;
  repoFields: string[] = ['name', 'stargazers', 'language'];
  dataSource = new MatTableDataSource<Repo>([]);

  constructor(private gitHubService: GithubService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  fetchRepos() {
    this.repos = null;
    this.error = null;

    this.gitHubService.getRepos(this.username).subscribe({
      next: (response) => {
        if(response.success) {
          this.repos = response.data;
          this.dataSource.data = this.repos;
          this.dataSource._updateChangeSubscription();
          this.error = null;
        }
        else {
          this.error = response.message || 'Unexpected error';
        }
      },
      error: (response) => {
        this.error = response.error?.message || 'Request failed';
      }
    })
  }
}
