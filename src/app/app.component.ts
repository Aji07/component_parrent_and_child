import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'applicationform';

  list_prog = ['JAVA',
              'C++',
              'C',
              'PYTHON',
              'JAVASCRIPT'
              ];

    prog_details = [`Java is a widely used platform independent language. Java was developed by James Gosling.`, `C++ is
                    multi-paradigm and procedural oriented language. Developed by Bjarne Stroustrup.`,
                    `C is a procedural language and developed by Dennis Ritchie`,
                    `Python is a interpreted high level language developed by Guido van Rossum`,
                    `Javascript is a language that conforms the ECMAScript and developed by ECMAScript`
                  ];
    options: any;
    curr_info: any;
    prog_title: any;

    constructor() {}


    onClick(lang:any) {
        switch (lang) {
            case 'JAVA':
                this.options = 0;
                this.curr_info = this.prog_details[this.options];
                this.prog_title = this.list_prog[this.options];
                break;

            case 'C++':
                this.options = 1;
                this.curr_info =
                    this.prog_details[this.options];

                this.prog_title =
                    this.list_prog[this.options];
                break;
            case 'C':
                this.options = 2;
                this.curr_info =
                    this.prog_details[this.options];

                this.prog_title =
                    this.list_prog[this.options];
                break;
            case 'PYTHON':
                this.options = 3;
                this.curr_info =
                    this.prog_details[this.options];

                this.prog_title =
                    this.list_prog[this.options];
                break;
            case 'JAVASCRIPT':
                this.options = 4;
                this.curr_info =
                    this.prog_details[this.options];

                this.prog_title =
                    this.list_prog[this.options];
                break;
            default:
                break;
        }
    }

    addItem(newItem: string) {
      this.list_prog.push(newItem);
    }
}
