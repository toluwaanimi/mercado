import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  url : any  = '';

  constructor() { }

  ngOnInit() {
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();


      reader.onload = (event) => { //
        // called once readAsDataURL is completed
        this.url = (event.target as FileReader).result;

      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url

    }
  }

}
