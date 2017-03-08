import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './form-field/field-base';

@Component({
  moduleId: module.id,
  selector: 'app-form-control',
  templateUrl: 'form-control.component.html'
})
export class FormControlComponent implements OnInit {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() { }
}
