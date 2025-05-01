import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CubeComponent } from './components/cube/cube.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule to imports for two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
