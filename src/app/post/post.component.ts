import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number = 0;
  @Input() postCreated_at: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.postTitle;
  }

  getContent() {
    return this.postContent;
  }

  loveIt()
  {
    this.postLoveIts++;
    console.log("this.postLoveIts" + this.postLoveIts);
  }

  dontLoveIt(){
    this.postLoveIts--;
    console.log("this.postLoveIts" + this.postLoveIts);
  }

}
