import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterModule } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuList = ['Home', 'About', 'Contact']
}
