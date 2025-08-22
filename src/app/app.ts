import { provideHttpClient, withFetch } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Nav } from './components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'portfolio-angular';
}
