import {Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {MatFormFieldControl} from "@angular/material";
import {Contact} from "../Contact";
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {FocusMonitor} from "@angular/cdk/a11y";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'app-contact-selector',
  templateUrl: './contact-selector.component.html',
  styleUrls: ['./contact-selector.component.less'],
  providers:[{provide: MatFormFieldControl, useExisting: ContactSelectorComponent}]
})
export class ContactSelectorComponent
  implements
    OnInit,
    OnDestroy,
    ControlValueAccessor,
    MatFormFieldControl<Contact> {

  public searchForm: FormGroup = new FormGroup({
    search: new FormControl()
  });

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>
    ) {
    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });

  }

  ngOnInit() {
  }

  readonly autofilled: boolean;
  controlType: string = 'app-contact-selector';
  errorState: boolean = false;
  focused: boolean = false;
  @Input() id: string;
  readonly stateChanges: Subject<void> = new Subject<void>();
  private _value: Contact | null;

  @Input()
  get value(): Contact | null {
    return this._value;
  }

  set value(contact: Contact | null) {
    this._value = contact;

    this.stateChanges.next();
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string;

  get empty(): boolean {
    return !this.value;
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  private _disabled = false;

  onContainerClick(event: MouseEvent): void {
    this.focused = true;

    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  @HostBinding('attr.aria-describedby') describedBy = '';

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
