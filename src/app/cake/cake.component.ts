import { Component, inject } from '@angular/core'
import { CakeService } from '../services/cake.service'
import { Cake } from './cake'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cake',
  imports: [],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css',
})
export class CakeComponent {
  constructor(private cakeService: CakeService) {}

  route: ActivatedRoute = inject(ActivatedRoute)
  cake!: Cake

  ngOnInit() {
    this.getCake()
  }

  getCake() {
    this.cakeService
      .getCake(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.cake = data
      })
  }
}
