import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { postService } from '../post.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports: [ReactiveFormsModule],
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {
  form !: FormGroup;

  constructor(
    private postService: postService,
    private formBuilder: FormBuilder
  ) {}

 

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.form = this.formBuilder.group({
      titulo: [''],
      contenido: ['']
    });
  }

  submit(): void {
    if (this.form.valid) {
      const post = this.form.value;
      this.postService.create(post).subscribe(() => {
      });
    }
  }
}
