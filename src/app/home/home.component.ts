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
  newCake: Cake = {
    id: 0,
    name: '',
    description: '',
    price: '',
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
    // Validação simples para garantir que os campos estão preenchidos
    if (
      !this.newCake.name ||
      !this.newCake.description ||
      !this.newCake.price ||
      !this.newCake.image
    ) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    this.cakeService.createCake(this.newCake).subscribe(
      (createdCake) => {
        this.cakeList.push(createdCake)
        this.resetForm()

        alert('Bolo adicionado com sucesso!')
      },
      (error) => {
        console.error('Erro ao adicionar bolo:', error)
        alert('Ocorreu um erro ao adicionar o bolo. Tente novamente.')
      }
    )
  }

  editCake(cake: Cake) {
    this.newCake = { ...cake }
    this.addCake = () => {
      this.cakeService.updateCake(this.newCake).subscribe((updatedCake) => {
        const index = this.cakeList.findIndex((c) => c.id === updatedCake.id)
        if (index > -1) {
          this.cakeList[index] = updatedCake
          this.newCake = {
            id: 0,
            name: '',
            description: '',
            price: '',
            image: '',
          }
        }
        this.addCake = this.originalAddCake
      })
    }
  }
  originalAddCake = this.addCake.bind(this)

  deleteCake(id: number) {
    if (confirm('Tem certeza que deseja deletar este bolo?')) {
      this.cakeService.deleteCake(id).subscribe(() => {
        this.cakeList = this.cakeList.filter((cake) => cake.id !== id)
        console.log(`Bolo com ID ${id} foi deletado.`)
      })
    }
  }

  resetForm() {
    this.newCake = {
      id: 0,
      name: '',
      description: '',
      price: '',
      image: '',
    }
  }
}
