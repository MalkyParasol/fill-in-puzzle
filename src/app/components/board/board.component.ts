import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  lines: number = 10; // Default row count
  columns: number = 10; // Default column count

  ngOnInit() {
    this.loadBoardSize();
  }

  createArray(size: number): number[] {
    return Array.from({ length: size }, (_, i) => i);
  }

  loadBoardSize() {
    const savedLines = localStorage.getItem('board-lines');
    const savedColumns = localStorage.getItem('board-columns');

    if (savedLines !== null) this.lines = parseInt(savedLines, 10);
    if (savedColumns !== null) this.columns = parseInt(savedColumns, 10);
  }

  saveBoardSize() {
    localStorage.setItem('board-lines', this.lines.toString());
    localStorage.setItem('board-columns', this.columns.toString());
  }

  updateBoard() {
    if (this.lines < 1) this.lines = 1;
    if (this.columns < 1) this.columns = 1;
    this.saveBoardSize();
  }

  restartBoard() {
    // Remove only cube-related data, but keep board size
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('cube-')) {
        localStorage.removeItem(key);
      }
    });
    window.location.reload();
  }
}
