import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { postService } from '../post.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  id!: number;
  form!: FormGroup;
  titulo!:string;
  contenido!:string;

  constructor(
    private formBuilder: FormBuilder,
    private postService: postService,
  ) {}

  ngOnInit(): void {
    // Simplemente llamamos a inicializarFormulario con un objeto vacío
    this.inicializarFormulario({});
  }

  inicializarFormulario(post: any): void {
    this.form = this.formBuilder.group({
      titulo: [post.titulo],
      contenido: [post.contenido]
    });
  }

  submit(): void {
    if (this.form.valid) {
      const post = this.form.value;
      this.postService.update(this.id, post).subscribe(() => {
      });
    }
  }
}

