import { Component, OnInit  } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  title = 'OpenGraphDemo';*/

  export class AppComponent implements OnInit {
    title = 'OpenGraphDemo';
    constructor(private metaService: Meta) {}
  
    ngOnInit() {
      // Fetch data from your API or database
      this.fetchData().then((data) => {
        // Update Open Graph tags with the fetched data
        this.metaService.updateTag({ property: 'og:title', content: data.title });
        this.metaService.updateTag({ property: 'og:type', content: 'article' });
        this.metaService.updateTag({ property: 'og:url', content: data.url });
        this.metaService.updateTag({ property: 'og:image', content: data.image });
        this.metaService.updateTag({ property: 'og:description', content: data.description });
      });
    }

    async fetchData() {
      // Replace this with the actual data fetching mechanism
      const data = await fetch('https://dummy.restapiexample.com/api/v1/employees');
      return data.json();
    }

}
