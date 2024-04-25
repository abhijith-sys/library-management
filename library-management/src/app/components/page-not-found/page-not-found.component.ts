import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
