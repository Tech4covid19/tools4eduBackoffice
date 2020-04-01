import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterContentInit {

  @Input() dataSource : Array<any>;

  objectKeys = Object.keys;

  displayedColumns = [];

  constructor() { 

   }

  ngOnInit(): void {
  
  }

  ngAfterContentInit() {
    let runOnceHeaders = true;

    if (this.dataSource && this.dataSource.length > 0) {
        console.log("dataSource", this.dataSource);

        this.dataSource.forEach(elem => {
          console.log("elem", elem)
            const keys = Object.keys(elem);
            if (runOnceHeaders) {
                keys.forEach(key => {
                  
              /*       let header = {};
                    header['text'] = key;
                    header['value'] = key; */
                    this.displayedColumns.push(key);
                })
            }
            runOnceHeaders = false;
            console.log("display", this.displayedColumns)
         
         
           /*  keys.forEach(key => {
                row[key] = elem[key];
            })
            this.dataSource.push(row); */
        })
    }
   
}

}
