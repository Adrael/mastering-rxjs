import { Component, Input } from '@angular/core';
import {BaseCodeComponent} from '../base-code/base-code.component';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent extends BaseCodeComponent {
  @Input() public title = 'Signature';
}
