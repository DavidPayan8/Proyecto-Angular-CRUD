import { Component, OnInit } from '@angular/core';
import { postService } from '../post.service';

@Component({
  standalone:true,
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  posts: any[] = []; // Array para almacenar los posts
  constructor(private postService: postService) {}

  ngOnInit(): void {
    this.listarPosts();
  }

  listarPosts(): void {
    console.log(this.postService.getAll())
    this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  borrarPost(id: number): void {
    this.postService.delete(id).subscribe(() => {
      this.listarPosts();
    });
  }
}
