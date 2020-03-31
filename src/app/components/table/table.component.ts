import { Component, OnInit, Input, AfterContentInit, SimpleChanges, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'customTable',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterContentInit {

    //@Input() tableHeaders : Array<any> = new Array<any>();
    @Input() tableData: Array<any>;
    @Output() clickedRow : EventEmitter<any> = new EventEmitter<any>();

    tableHeaders: Array<any>;
    tableRows: Array<any>;

    objectValues = Object.values;

    constructor() {
        this.tableData = new Array<any>();
        this.tableHeaders = new Array<any>();
        this.tableRows = new Array<any>();
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
      
        let runOnceHeaders = true;

        if (this.tableData && this.tableData.length > 0) {
            console.log(this.tableData);
            console.log("aqui");
            this.tableData.forEach(elem => {
                const keys = Object.keys(elem);
                let row = {};
                if (runOnceHeaders) {
                    keys.forEach(key => {
                        let header = {};
                        header['text'] = key;
                        header['value'] = key;
                        this.tableHeaders.push(header);
                    })
                }
                runOnceHeaders = false;
                keys.forEach(key => {
                    row[key] = elem[key];
                })
                this.tableRows.push(row);
            })
        }
        console.log(this.tableRows);
    }

    rowClicked(row){
        if(row){
            this.clickedRow.emit(row);
        }
    }

}
