import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar-items',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <li><a>Learning</a></li>
    <li>
      <a>Parent</a>
      <ul class="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </li>
    <li><a>Item 3</a></li>
  `,
  styles: ``,
})
export class NavbarItemsComponent {}
