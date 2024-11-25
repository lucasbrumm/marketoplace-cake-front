import { Component } from '@angular/core'
import { Cake } from '../cake/cake'
import { CakeService } from '../services/cake.service'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private cakeService: CakeService) {}

  cakeList: Cake[] = []
  searchTerm: string = ''
  newCake = {
    name: '',
    description: '',
    price: null,
    image: '',
  }

  ngOnInit() {
    this.getCakes()
  }

  getCakes() {
    this.cakeService.getAllCakes().subscribe((data) => {
      this.cakeList = data
    })
  }

  get filteredCakes() {
    return this.cakeList.filter((cake) =>
      cake.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  addCake() {
    // this.cakeService.createCake(cake).subscribe(() => {
    //   this.getCakes()
    // })
  }

  editCake() {}

  deleteCake() {}
}
