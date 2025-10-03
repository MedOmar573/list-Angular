import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
   text="";
  todos:{ id: number; tache: string }[] =[];
  ajouter=()=>{
    let nvt={id:this.todos.length+1,tache:this.text};
    this.todos.push(nvt);
    this.text="";
  }
  supp=(id:Number)=>{
    this.todos = this.todos.filter(todo => todo.id!== id);
  
  }
  mod=(id:Number)=>{

    let x=this.todos.find(tac=>tac.id==id)!;
    x.tache=this.text;
    this.text="";
  }
}
