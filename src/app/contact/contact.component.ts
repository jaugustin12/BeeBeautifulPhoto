import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup;
  loading = false;
  success;
  serverErrorMessages;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      package: null,
      message: [null, [Validators.required, Validators.minLength(20)]],
    });
  }

  get email() {
    return this.emailForm.get('email');
  }

  get message() {
    return this.emailForm.get('message');
  }

  async submitHandler() {
    this.loading = true;

    const emailForm = this.emailForm.value;
    await this.http.post(environment.apiBaseUrl + '/email', emailForm).subscribe(
      res => {
        this.success = true;
      },
      err => {
        this.success = false;
        this.serverErrorMessages = JSON.stringify(err.message);
      });
    this.loading = false;
  }


tryAgain() {
  this.success = null;
  this.loading = false;
}


}
