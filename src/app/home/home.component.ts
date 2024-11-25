import { Component } from '@angular/core'
import { Cake } from '../cake/cake'
import { CakeService } from '../services/cake.service'
import { HttpClientModule, provideHttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private cakeService: CakeService) {}

  cakeList: Cake[] = []

  ngOnInit() {
    this.getCakes()
  }

  getCakes() {
    this.cakeService.getAllCakes().subscribe((data) => {
      this.cakeList = data
    })
  }
}
