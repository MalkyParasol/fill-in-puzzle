import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss'
})
export class CubeComponent implements OnInit {
  @Input() rowIndex!: number;
  @Input() colIndex!: number;
  clickCount = 0; // Track the number of clicks
  colors = ['white', 'black', 'gray']; // Cycle through these colors

  ngOnInit() {
    this.loadState();
  }

  loadState() {
    const storedState = localStorage.getItem(`cube-${this.rowIndex}-${this.colIndex}`);
    if (storedState !== null) {
      this.clickCount = parseInt(storedState, 10);
    }
  }

  saveState() {
    localStorage.setItem(`cube-${this.rowIndex}-${this.colIndex}`, this.clickCount.toString());
  }

  clicking() {
    this.clickCount = (this.clickCount + 1) % this.colors.length; // Cycle between 0, 1, 2
    this.saveState(); // Save to localStorage
  }

  get backgroundColor(): string {
    return this.colors[this.clickCount];
  }
}
