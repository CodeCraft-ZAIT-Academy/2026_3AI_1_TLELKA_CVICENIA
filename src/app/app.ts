import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-root',
 imports: [
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}