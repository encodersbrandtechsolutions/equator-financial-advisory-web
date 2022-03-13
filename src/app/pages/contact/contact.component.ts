import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  showSuccessAlert = false;
  showErrorAlert = false;
  form = this.fb.group({
    name: ['Rahul Rajpal', Validators.required],
    age: [
      31,
      [Validators.required, Validators.pattern('[0-9]{2}'), Validators.min(18)],
    ],
    contactNumber: [
      9340423746,
      [Validators.required, Validators.pattern('[0-9]{10}')],
    ],
    companyName: ['Aarav Infotech', [Validators.required]],
    netSalary: [200000, [Validators.required, Validators.min(0)]],
    workingSince: [
      2015,
      [Validators.min(1970), Validators.max(new Date().getFullYear())],
    ],
    currentLoansEmi: [20000, [Validators.required, Validators.min(0)]],
    requiredLoanAmount: [500000, [Validators.required, Validators.min(0)]],
    location: ['Indore', Validators.required],
  });

  submitting = false;

  date: Date = new Date();

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get age(): FormControl {
    return this.form.get('age') as FormControl;
  }

  get contactNumber(): FormControl {
    return this.form.get('contactNumber') as FormControl;
  }

  get companyName(): FormControl {
    return this.form.get('companyName') as FormControl;
  }

  get netSalary(): FormControl {
    return this.form.get('netSalary') as FormControl;
  }

  get workingSince(): FormControl {
    return this.form.get('workingSince') as FormControl;
  }

  get currentLoansEmi(): FormControl {
    return this.form.get('currentLoansEmi') as FormControl;
  }

  get requiredLoanAmount(): FormControl {
    return this.form.get('requiredLoanAmount') as FormControl;
  }

  get location(): FormControl {
    return this.form.get('location') as FormControl;
  }

  subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private handlerService: HandlerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.handlerService.updateTitle(data['pageTitle']);
    });
  }

  sendEnquiry() {
    if (this.form.valid) {
      this.submitting = true;
      this.subscription = this.handlerService
        .sendEnquiry(this.form.value)
        .subscribe(
          (res) => {
            this.submitting = false;
            this.showSuccessAlert = true;
            this.form.reset();
          },
          () => {
            this.submitting = false;
            this.showErrorAlert = true;
          }
        );
    }
  }

  convertToNumber(control: FormControl) {
    isNaN(control.value)
      ? control?.setValue('')
      : control?.setValue(control.value);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
