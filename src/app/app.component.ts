import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rob-e-folio';
  ngOnInit() {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] =
          i[r] ||
          function() {
            (i[r].q = i[r].q || []).push(arguments);
          };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        'script',
        'https://www.google-analytics.com/analytics.js',
        'ga'
      );

      ga('create', 'G-3X3H01EGH0', 'auto');
      ga('send', 'pageview');
    `;
    document.head.appendChild(script);
  }
}
