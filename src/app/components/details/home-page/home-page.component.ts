import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  styles = {imageDisplay:'block',cardDisplay: 'block'}
  stylesSmall = {imageDisplay:'block',cardDisplay: 'block',titleDisplay:'none',authorDisplay:'none',imageWidth:'100%',imageHeight:"150px"}

  stylesInline = {mediaDisplay:'none',imageDisplay:'left',authorMargin:'0',imageMargin:'1.5em',cardDisplay: 'inline-block',cardWidth:'65%',titleDisplay:'block',titleSize:'1em',authorDisplay:'block',imageWidth:'20%',imageHeight:"100px"}
  stylesInlineLeft = {categoryDisplay:'none',mediaDisplay:'none',imageDisplay:'left',authorMargin:'0',imageMargin:'1em',cardDisplay: 'inline-block',cardWidth:'60%',titleDisplay:'none',authorDisplay:'block',imageWidth:'30%',imageHeight:"75px"}

  constructor() { }

  ngOnInit() {
  }

}
