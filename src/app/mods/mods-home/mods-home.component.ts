import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'Why is the sky is blue', content: 'The sky iss blue because ot is' },
    {title: 'Why does an orange taste likes ?', content: 'An orange tastes like orange' },
    {title: 'what color is that car', content: 'The car is an orange colors' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
