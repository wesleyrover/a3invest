import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.modules';
import { AdsenseComponent } from 'ng2-adsense';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, PagesModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {      
      try {
       
        //console.error("ads", window.adsbygoogle);
        //(window["adsbygoogle"] = window.adsbygoogle || []).push({});
        //(window[0] = window[0] || [0]).push({});
        //adding 2nd time as we add two ads in the Html
        //(window[0] = window[0] || []).push({}); 
      } catch (e) {
        console.error("ads", e);
      }
    }, 900);
  }
  
  title = 'a3invest';
}
