import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToolsBack';

  dataSourcesTeste = [{"id" : 123, "texto" : "texto", "autor" : "maria"},{"id" : 2313, "texto" : "texto", "autor" : "jose"}];
}
