import { Component, OnInit } from '@angular/core';
import { postService } from '../post.service';
@Component({
  standalone:true,
  selector: 'app-vista-individual',
  templateUrl: './vista-individual.component.html',
  styleUrls: ['./vista-individual.component.css']
})
export class VistaIndividualComponent implements OnInit {
  id!: number;
  post: any;

  constructor(
    private postService: postService
  ) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe(post => { 
      this.post = post;
    });
  }
}


