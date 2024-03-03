import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>
      comments works!
    </p>
    <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*ZjYSm_q36J4KChdn" 
    alt="photo">
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
