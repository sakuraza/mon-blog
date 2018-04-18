import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Aliquip velit ex qui enim ad consequat veniam consequat in consectetur qui est excepteur nulla quis ullamco anim quis do non enim dolore voluptate ullamco esse tempor adipisicing ut elit qui incididunt velit incididunt dolore.'
    },
    {
      title: 'Mon  deuxieme post',
      content: 'Exercitation consectetur culpa in duis et amet sit do sunt aliqua nisi dolore voluptate ea voluptate deserunt dolor aliquip velit.'
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum fugiat veniam minim voluptate ex sed duis dolor deserunt non enim magna voluptate aute sunt laborum adipisicing ut in in cupidatat ea reprehenderit ut.'
    }
  ];

  constructor() {

  }
}
