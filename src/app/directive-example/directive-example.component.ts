import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  showParagraph: boolean = false;
  paragraph: string = "This is paragraph";
  buttonMessage: string = "Display Details";
  timeStamp: string[] = [];
  pipe: DatePipe = new DatePipe('en-US');
  ngOnInit(): void {
  }
  constructor() {
    this.showParagraph = false;
  }


  onClickButton(): void {
    if (this.showParagraph) {
      this.showParagraph = false;
      this.timeStamp.push(this.provideDateStamp());
      this.buttonMessage = "Display Details";
    } else {
      this.showParagraph = true;
      this.timeStamp.push(this.provideDateStamp());
      this.buttonMessage = "Hide Details";
    }
  }

  provideDateStamp(): string {
    return this.buttonMessage + " " + this.pipe.transform(Date.now(), 'dd/MM/yyyy hh:mm') + "___" + (Math.random() * 10).toFixed().toString();
  }


}
