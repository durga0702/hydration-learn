import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {ngSkipHydration: 'true'},
})
export class HomeComponent {
  public photos:Array<any>=[];
  constructor(private service: Service){}
  ngOnInit(): void {
    this.service.getPhotos().subscribe((res)=>{
      this.photos = res;
      console.log(res.url)
    })
  }
}
