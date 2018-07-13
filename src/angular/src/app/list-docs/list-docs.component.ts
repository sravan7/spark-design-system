import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-list-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Bare List
      </h2>

      <sprk-list listType="bare">
        <sprk-list-item>
          cats
        </sprk-list-item>
        <sprk-list-item>
          dogs
        </sprk-list-item>
      </sprk-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Indented List
      </h2>

      <sprk-list listType="indented">
        <sprk-list-item>
          fish
        </sprk-list-item>
        <sprk-list-item>
          birds
        </sprk-list-item>
      </sprk-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Unordered List
      </h2>

      <sprk-list listType="unordered">
        <sprk-list-item>
          trails
        </sprk-list-item>
        <sprk-list-item>
          roads
        </sprk-list-item>
      </sprk-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Ordered List
      </h2>

      <sprk-list listType="ordered">
        <sprk-list-item>
          sky
        </sprk-list-item>
        <sprk-list-item>
          sea
        </sprk-list-item>
      </sprk-list>
    </div>
  `,
  styles: ['']
})
export class ListDocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}