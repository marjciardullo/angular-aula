import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listData } from '../list';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'],
})
export class ListDetailsComponent implements OnInit {
  item;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // method that is called the moment an object is loaded
    this.route.paramMap.subscribe((params) => {
      this.item = listData[params.get('index')];
    });
  }
}
