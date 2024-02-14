import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-vista-individual',
  standalone: true,
  imports: [],
  templateUrl: './vista-individual.component.html',
  styleUrl: './vista-individual.component.css'
})
export class VistaIndividualComponent {
  id!: number;
  post!: Post;
      
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
          
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
}
