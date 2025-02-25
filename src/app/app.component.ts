import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { PageContentComponent } from "./components/page-content/page-content.component";
import { BreadcrumpComponent } from "./components/breadcrump/breadcrump.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, NavbarComponent, SidebarComponent, PageContentComponent, BreadcrumpComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicio2_5A_230237';
}
