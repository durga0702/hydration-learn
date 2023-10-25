import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../service.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public photos:Array<any>=[];
  constructor(private service: Service){}
  ngOnInit(): void {
    this.service.getPhotos().subscribe((res)=>{
      this.photos = res;
      console.log(res.url)
    })
  }
}
