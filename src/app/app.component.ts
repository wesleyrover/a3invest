import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.modules';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, PagesModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a3invest';
}
