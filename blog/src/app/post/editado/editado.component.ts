import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editado',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './editado.component.html',
  styleUrl: './editado.component.css'
})
export class EditadoComponent {
  id!: number;
  post!: Post;
  form!: FormGroup;
      
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
        
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
      

  get f(){
    return this.form.controls;
  }
      
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Editado');
         this.router.navigateByUrl('post/listado');
    })
  }
  
}

