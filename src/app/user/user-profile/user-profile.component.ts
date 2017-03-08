import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FieldBase, Image, TextArea, TextBox } from './dynamic-form/form-field/index';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;

  fields: FieldBase<any>[] = [
    new Image({
      src: 'assets/imgs/angular2-small.png'
    }),
    new TextBox({
      label: '头像：',
      placeholder: '上传头像',
      type: 'file'
    }),
    new TextBox({
      label: '用户名：',
      placeholder: '用户名'
    }),
    new TextBox({
      label: '常用邮箱：',
      placeholder: '常用邮箱'
    }),
    new TextBox({
      label: '密码：',
      type: 'password',
      placeholder: '密码，至少8位'
    }),
    new TextBox({
      label: '重复密码：',
      type: 'password',
      placeholder: '重复密码'
    }),
    new TextArea({
      label: '个人简介：',
      placeholder: '个人简介，最多140字，不能放链接。',
      rows: 3
    })
  ];

  constructor() { }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields);
  }

  toFormGroup(fields: FieldBase<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

}
