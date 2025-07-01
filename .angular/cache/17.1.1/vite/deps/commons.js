import {
  MatInput,
  MatInputModule
} from "./chunk-S4TBFZ2I.js";
import {
  MatTableModule
} from "./chunk-P7PMGLBI.js";
import {
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-UQLYKSRK.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-2WOLSTIU.js";
import {
  CdkPortal,
  CdkPortalOutlet,
  DomPortalOutlet,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  Overlay,
  OverlayConfig,
  OverlayModule,
  TemplatePortal
} from "./chunk-XO5S7MHZ.js";
import {
  CdkScrollable,
  CdkScrollableModule,
  ViewportRuler
} from "./chunk-QIFVKV55.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-LXJFQAOH.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CEHR4ITP.js";
import {
  CdkMonitorFocus,
  CdkObserveContent,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  LEFT_ARROW,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  Platform,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _MatInternalFormField,
  coerceBooleanProperty,
  hasModifierKey,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  normalizePassiveListenerOptions
} from "./chunk-LVADQ3D6.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-7VIRKP6O.js";
import "./chunk-SSL6Q6EV.js";
import {
  HttpClient
} from "./chunk-SFPRWHFH.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-HE5HYWF7.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  QueryList,
  Self,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  __async,
  asapScheduler,
  booleanAttribute,
  delay,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  forwardRef,
  fromEvent,
  inject,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  timer,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-NJ6MIA53.js";

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c0 = ["input"];
var _c1 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate"
  };
}
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatCheckbox),
  multi: true
};
var MatCheckboxChange = class {
};
var nextUniqueId = 0;
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var _MatCheckbox = class _MatCheckbox {
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(_elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    this._animationClasses = {
      uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
      uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
      checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
      checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
      indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
      indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
    };
    this.ariaLabel = "";
    this.ariaLabelledby = null;
    this.labelPosition = "after";
    this.name = null;
    this.change = new EventEmitter();
    this.indeterminateChange = new EventEmitter();
    this._onTouched = () => {
    };
    this._currentAnimationClass = "";
    this._currentCheckState = TransitionCheckState.Init;
    this._controlValueAccessorChangeFn = () => {
    };
    this._validatorChangeFn = () => {
    };
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this._uniqueId = `mat-mdc-checkbox-${++nextUniqueId}`;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = value;
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (!this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationMode === "NoopAnimations") {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
};
_MatCheckbox.ɵfac = function MatCheckbox_Factory(t) {
  return new (t || _MatCheckbox)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
};
_MatCheckbox.ɵcmp = ɵɵdefineComponent({
  type: _MatCheckbox,
  selectors: [["mat-checkbox"]],
  viewQuery: function MatCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(MatRipple, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._labelElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ripple = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-checkbox"],
  hostVars: 14,
  hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
      ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked);
    }
  },
  inputs: {
    ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
    ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [InputFlags.None, "aria-describedby", "ariaDescribedby"],
    id: "id",
    required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [InputFlags.HasDecoratorInputTransform, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
    color: "color",
    checked: [InputFlags.HasDecoratorInputTransform, "checked", "checked", booleanAttribute],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    indeterminate: [InputFlags.HasDecoratorInputTransform, "indeterminate", "indeterminate", booleanAttribute]
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["matCheckbox"],
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
    provide: NG_VALIDATORS,
    useExisting: _MatCheckbox,
    multi: true
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 15,
  vars: 19,
  consts: [["mat-internal-form-field", "", 3, "labelPosition", "click"], [1, "mdc-checkbox"], ["checkbox", ""], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "indeterminate", "disabled", "id", "required", "tabIndex", "blur", "click", "change"], ["input", ""], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"], ["label", ""]],
  template: function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function MatCheckbox_Template_div_click_0_listener($event) {
        return ctx._preventBubblingFromLabel($event);
      });
      ɵɵelementStart(1, "div", 1, 2)(3, "div", 3);
      ɵɵlistener("click", function MatCheckbox_Template_div_click_3_listener() {
        return ctx._onTouchTargetClick();
      });
      ɵɵelementEnd();
      ɵɵelementStart(4, "input", 4, 5);
      ɵɵlistener("blur", function MatCheckbox_Template_input_blur_4_listener() {
        return ctx._onBlur();
      })("click", function MatCheckbox_Template_input_click_4_listener() {
        return ctx._onInputClick();
      })("change", function MatCheckbox_Template_input_change_4_listener($event) {
        return ctx._onInteractionEvent($event);
      });
      ɵɵelementEnd();
      ɵɵelement(6, "div", 6);
      ɵɵelementStart(7, "div", 7);
      ɵɵnamespaceSVG();
      ɵɵelementStart(8, "svg", 8);
      ɵɵelement(9, "path", 9);
      ɵɵelementEnd();
      ɵɵnamespaceHTML();
      ɵɵelement(10, "div", 10);
      ɵɵelementEnd();
      ɵɵelement(11, "div", 11);
      ɵɵelementEnd();
      ɵɵelementStart(12, "label", 12, 13);
      ɵɵprojection(14);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(2);
      ɵɵproperty("labelPosition", ctx.labelPosition);
      ɵɵadvance(4);
      ɵɵclassProp("mdc-checkbox--selected", ctx.checked);
      ɵɵproperty("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled ? -1 : ctx.tabIndex);
      ɵɵattribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("name", ctx.name)("value", ctx.value);
      ɵɵadvance(7);
      ɵɵproperty("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      ɵɵadvance();
      ɵɵproperty("for", ctx.inputId);
    }
  },
  dependencies: [MatRipple, _MatInternalFormField],
  styles: ['.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}}.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color);background-color:var(--mdc-checkbox-selected-focus-icon-color)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default}.mat-mdc-checkbox label:empty{display:none}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatCheckbox = _MatCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": `_animationMode === 'NoopAnimations'`,
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label"
         #label
         [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}}.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color);background-color:var(--mdc-checkbox-selected-focus-icon-color)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default}.mat-mdc-checkbox label:empty{display:none}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
    }]
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatCheckboxRequiredValidator),
  multi: true
};
var _MatCheckboxRequiredValidator = class _MatCheckboxRequiredValidator extends CheckboxRequiredValidator {
};
_MatCheckboxRequiredValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatCheckboxRequiredValidator_BaseFactory;
  return function MatCheckboxRequiredValidator_Factory(t) {
    return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_MatCheckboxRequiredValidator)))(t || _MatCheckboxRequiredValidator);
  };
})();
_MatCheckboxRequiredValidator.ɵdir = ɵɵdefineDirective({
  type: _MatCheckboxRequiredValidator,
  selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_CHECKBOX_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MatCheckboxRequiredValidator = _MatCheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR],
      standalone: true
    }]
  }], null, null);
})();
var __MatCheckboxRequiredValidatorModule = class __MatCheckboxRequiredValidatorModule {
};
__MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) {
  return new (t || __MatCheckboxRequiredValidatorModule)();
};
__MatCheckboxRequiredValidatorModule.ɵmod = ɵɵdefineNgModule({
  type: __MatCheckboxRequiredValidatorModule,
  imports: [MatCheckboxRequiredValidator],
  exports: [MatCheckboxRequiredValidator]
});
__MatCheckboxRequiredValidatorModule.ɵinj = ɵɵdefineInjector({});
var _MatCheckboxRequiredValidatorModule = __MatCheckboxRequiredValidatorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatCheckboxRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckboxRequiredValidator],
      exports: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
var _MatCheckboxModule = class _MatCheckboxModule {
};
_MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) {
  return new (t || _MatCheckboxModule)();
};
_MatCheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: _MatCheckboxModule,
  imports: [MatCheckbox, MatCommonModule],
  exports: [MatCheckbox, MatCommonModule]
});
_MatCheckboxModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCheckbox, MatCommonModule, MatCommonModule]
});
var MatCheckboxModule = _MatCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/menu.mjs
var _c02 = ["mat-menu-item", ""];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 3);
    ɵɵelement(1, "polygon", 4);
    ɵɵelementEnd();
  }
}
var _c12 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c22 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵlistener("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._handleKeydown($event));
    })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.closed.emit("click"));
    })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4._onAnimationStart($event));
    })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5._onAnimationDone($event));
    });
    ɵɵelementStart(1, "div", 1);
    ɵɵprojection(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);
    ɵɵattribute("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
  }
}
var _c3 = ["*"];
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var _MatMenuItem = class _MatMenuItem {
  constructor(_elementRef, _document, _focusMonitor, _parentMenu, _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._document = _document;
    this._focusMonitor = _focusMonitor;
    this._parentMenu = _parentMenu;
    this._changeDetectorRef = _changeDetectorRef;
    this.role = "menuitem";
    this.disabled = false;
    this.disableRipple = false;
    this._hovered = new Subject();
    this._focused = new Subject();
    this._highlighted = false;
    this._triggersSubmenu = false;
    _parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef?.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef?.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
};
_MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
  return new (t || _MatMenuItem)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(MAT_MENU_PANEL, 8), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatMenuItem.ɵcmp = ɵɵdefineComponent({
  type: _MatMenuItem,
  selectors: [["", "mat-menu-item", ""]],
  hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
  hostVars: 8,
  hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatMenuItem_click_HostBindingHandler($event) {
        return ctx._checkDisabled($event);
      })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
        return ctx._handleMouseEnter();
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
      ɵɵclassProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
    }
  },
  inputs: {
    role: "role",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute]
  },
  exportAs: ["matMenuItem"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  attrs: _c02,
  ngContentSelectors: _c22,
  decls: 5,
  vars: 3,
  consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["class", "mat-mdc-menu-submenu-icon", "viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
  template: function MatMenuItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c12);
      ɵɵprojection(0);
      ɵɵelementStart(1, "span", 0);
      ɵɵprojection(2, 1);
      ɵɵelementEnd();
      ɵɵelement(3, "div", 1);
      ɵɵtemplate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
      ɵɵadvance();
      ɵɵconditional(4, ctx._triggersSubmenu ? 4 : -1);
    }
  },
  dependencies: [MatRipple],
  encapsulation: 2,
  changeDetection: 0
});
var MatMenuItem = _MatMenuItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-mdc-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_PANEL]
    }, {
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var _MatMenuContent = class _MatMenuContent {
  constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
    this._template = _template;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._document = _document;
    this._changeDetectorRef = _changeDetectorRef;
    this._attached = new Subject();
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._componentFactoryResolver, this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef?.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    if (this._outlet) {
      this._outlet.dispose();
    }
  }
};
_MatMenuContent.ɵfac = function MatMenuContent_Factory(t) {
  return new (t || _MatMenuContent)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ApplicationRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatMenuContent.ɵdir = ɵɵdefineDirective({
  type: _MatMenuContent,
  selectors: [["ng-template", "matMenuContent", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_MENU_CONTENT,
    useExisting: _MatMenuContent
  }])]
});
var MatMenuContent = _MatMenuContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: ApplicationRef
  }, {
    type: Injector
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var matMenuAnimations = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: trigger("transformMenu", [state("void", style({
    opacity: 0,
    transform: "scale(0.8)"
  })), transition("void => enter", animate("120ms cubic-bezier(0, 0, 0.2, 1)", style({
    opacity: 1,
    transform: "scale(1)"
  }))), transition("* => void", animate("100ms 25ms linear", style({
    opacity: 0
  })))]),
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: trigger("fadeInItems", [
    // TODO(crisbeto): this is inside the `transformMenu`
    // now. Remove next time we do breaking changes.
    state("showing", style({
      opacity: 1
    })),
    transition("void => *", [style({
      opacity: 0
    }), animate("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])
  ])
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;
var menuPanelUid = 0;
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var _MatMenu = class _MatMenu {
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        this._classList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        this._classList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  constructor(_elementRef, _ngZone, defaultOptions, _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._elevationPrefix = "mat-elevation-z";
    this._baseElevation = 8;
    this._directDescendantItems = new QueryList();
    this._classList = {};
    this._panelAnimationState = "void";
    this._animationDone = new Subject();
    this.closed = new EventEmitter();
    this.close = this.closed;
    this.panelId = `mat-menu-panel-${menuPanelUid++}`;
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusSubscription?.unsubscribe();
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {
  }
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {
  }
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
    event.stopPropagation();
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._firstItemFocusSubscription?.unsubscribe();
    this._firstItemFocusSubscription = this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      let menuPanel = null;
      if (this._directDescendantItems.length) {
        menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
      }
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * Sets the menu panel elevation.
   * @param depth Number of parent menus that come before the menu.
   */
  setElevation(depth) {
    const elevation = Math.min(this._baseElevation + depth, 24);
    const newElevation = `${this._elevationPrefix}${elevation}`;
    const customElevation = Object.keys(this._classList).find((className) => {
      return className.startsWith(this._elevationPrefix);
    });
    if (!customElevation || customElevation === this._previousElevation) {
      if (this._previousElevation) {
        this._classList[this._previousElevation] = false;
      }
      this._classList[newElevation] = true;
      this._previousElevation = newElevation;
    }
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    const classes = this._classList;
    classes["mat-menu-before"] = posX === "before";
    classes["mat-menu-after"] = posX === "after";
    classes["mat-menu-above"] = posY === "above";
    classes["mat-menu-below"] = posY === "below";
    this._changeDetectorRef?.markForCheck();
  }
  /** Starts the enter animation. */
  _startAnimation() {
    this._panelAnimationState = "enter";
  }
  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    this._panelAnimationState = "void";
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event) {
    this._animationDone.next(event);
    this._isAnimating = false;
  }
  _onAnimationStart(event) {
    this._isAnimating = true;
    if (event.toState === "enter" && this._keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
};
_MatMenu.ɵfac = function MatMenu_Factory(t) {
  return new (t || _MatMenu)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(MAT_MENU_DEFAULT_OPTIONS), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatMenu.ɵcmp = ɵɵdefineComponent({
  type: _MatMenu,
  selectors: [["mat-menu"]],
  contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MAT_MENU_CONTENT, 5);
      ɵɵcontentQuery(dirIndex, MatMenuItem, 5);
      ɵɵcontentQuery(dirIndex, MatMenuItem, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lazyContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._allItems = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  viewQuery: function MatMenu_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function MatMenu_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
    }
  },
  inputs: {
    backdropClass: "backdropClass",
    ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
    ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [InputFlags.None, "aria-describedby", "ariaDescribedby"],
    xPosition: "xPosition",
    yPosition: "yPosition",
    overlapTrigger: [InputFlags.HasDecoratorInputTransform, "overlapTrigger", "overlapTrigger", booleanAttribute],
    hasBackdrop: [InputFlags.HasDecoratorInputTransform, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
    panelClass: [InputFlags.None, "class", "panelClass"],
    classList: "classList"
  },
  outputs: {
    closed: "closed",
    close: "close"
  },
  exportAs: ["matMenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_MENU_PANEL,
    useExisting: _MatMenu
  }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", "mat-mdc-elevation-specific", 3, "id", "ngClass", "keydown", "click"], [1, "mat-mdc-menu-content"]],
  template: function MatMenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
    }
  },
  dependencies: [NgClass],
  styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],
  encapsulation: 2,
  data: {
    animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
  },
  changeDetection: 0
});
var MatMenu = _MatMenu;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      standalone: true,
      imports: [NgClass],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel mat-mdc-elevation-specific"
    [id]="panelId"
    [ngClass]="_classList"
    (keydown)="_handleKeydown($event)"
    (click)="closed.emit('click')"
    [@transformMenu]="_panelAnimationState"
    (@transformMenu.start)="_onAnimationStart($event)"
    (@transformMenu.done)="_onAnimationDone($event)"
    tabindex="-1"
    role="menu"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_DEFAULT_OPTIONS]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var _MatMenuTrigger = class _MatMenuTrigger {
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    if (menu === this._menu) {
      return;
    }
    this._menu = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
  }
  constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, _menuItemInstance, _dir, _focusMonitor, _ngZone) {
    this._overlay = _overlay;
    this._element = _element;
    this._viewContainerRef = _viewContainerRef;
    this._menuItemInstance = _menuItemInstance;
    this._dir = _dir;
    this._focusMonitor = _focusMonitor;
    this._ngZone = _ngZone;
    this._overlayRef = null;
    this._menuOpen = false;
    this._closingActionsSubscription = Subscription.EMPTY;
    this._hoverSubscription = Subscription.EMPTY;
    this._menuCloseSubscription = Subscription.EMPTY;
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._handleTouchStart = (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    };
    this._openedBy = void 0;
    this.restoreFocus = true;
    this.menuOpened = new EventEmitter();
    this.onMenuOpen = this.menuOpened;
    this.menuClosed = new EventEmitter();
    this.onMenuClose = this.menuClosed;
    this._scrollStrategy = scrollStrategy;
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
    _element.nativeElement.addEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
    this._element.nativeElement.removeEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    this._hoverSubscription.unsubscribe();
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    const menu = this.menu;
    if (this._menuOpen || !menu) {
      return;
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
    overlayRef.attach(this._getPortal(menu));
    if (menu.lazyContent) {
      menu.lazyContent.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
    this._initMenu(menu);
    if (menu instanceof MatMenu) {
      menu._startAnimation();
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /** Closes the menu. */
  closeMenu() {
    this.menu?.close.emit();
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    if (!this._overlayRef || !this.menuOpen) {
      return;
    }
    const menu = this.menu;
    this._closingActionsSubscription.unsubscribe();
    this._overlayRef.detach();
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this.triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    if (menu instanceof MatMenu) {
      menu._resetAnimation();
      if (menu.lazyContent) {
        menu._animationDone.pipe(
          filter((event) => event.toState === "void"),
          take(1),
          // Interrupt if the content got re-attached.
          takeUntil(menu.lazyContent._attached)
        ).subscribe({
          next: () => menu.lazyContent.detach(),
          // No matter whether the content got re-attached, reset the menu.
          complete: () => this._setIsMenuOpen(false)
        });
      } else {
        this._setIsMenuOpen(false);
      }
    } else {
      this._setIsMenuOpen(false);
      menu?.lazyContent?.detach();
    }
  }
  /**
   * This method sets the menu state to open and focuses the first item if
   * the menu was opened via the keyboard.
   */
  _initMenu(menu) {
    menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    this._setMenuElevation(menu);
    menu.focusFirstItem(this._openedBy || "program");
    this._setIsMenuOpen(true);
  }
  /** Updates the menu elevation based on the amount of parent menus that it has. */
  _setMenuElevation(menu) {
    if (menu.setElevation) {
      let depth = 0;
      let parentMenu = menu.parentMenu;
      while (parentMenu) {
        depth++;
        parentMenu = parentMenu.parentMenu;
      }
      menu.setElevation(depth);
    }
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this.triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = this._overlay.create(config);
      this._overlayRef.keydownEvents().subscribe();
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
        const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
        if (this._ngZone) {
          this._ngZone.run(() => menu.setPositionClasses(posX, posY));
        } else {
          menu.setPositionClasses(posX, posY);
        }
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this.triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => active !== this._menuItemInstance), filter(() => this._menuOpen)) : of();
    return merge(backdrop, parentClose, hover, detachments);
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
      return;
    }
    this._hoverSubscription = this._parentMaterialMenu._hovered().pipe(filter((active) => active === this._menuItemInstance && !active.disabled), delay(0, asapScheduler)).subscribe(() => {
      this._openedBy = "mouse";
      if (this.menu instanceof MatMenu && this.menu._isAnimating) {
        this.menu._animationDone.pipe(take(1), delay(0, asapScheduler), takeUntil(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu());
      } else {
        this.openMenu();
      }
    });
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
};
_MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) {
  return new (t || _MatMenuTrigger)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MAT_MENU_SCROLL_STRATEGY), ɵɵdirectiveInject(MAT_MENU_PANEL, 8), ɵɵdirectiveInject(MatMenuItem, 10), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(NgZone));
};
_MatMenuTrigger.ɵdir = ɵɵdefineDirective({
  type: _MatMenuTrigger,
  selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
  hostAttrs: [1, "mat-mdc-menu-trigger"],
  hostVars: 3,
  hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
        return ctx._handleMousedown($event);
      })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
    }
  },
  inputs: {
    _deprecatedMatMenuTriggerFor: [InputFlags.None, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
    menu: [InputFlags.None, "matMenuTriggerFor", "menu"],
    menuData: [InputFlags.None, "matMenuTriggerData", "menuData"],
    restoreFocus: [InputFlags.None, "matMenuTriggerRestoreFocus", "restoreFocus"]
  },
  outputs: {
    menuOpened: "menuOpened",
    onMenuOpen: "onMenuOpen",
    menuClosed: "menuClosed",
    onMenuClose: "onMenuClose"
  },
  exportAs: ["matMenuTrigger"],
  standalone: true
});
var MatMenuTrigger = _MatMenuTrigger;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger",
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_SCROLL_STRATEGY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_PANEL]
    }, {
      type: Optional
    }]
  }, {
    type: MatMenuItem,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: NgZone
  }], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var _MatMenuModule = class _MatMenuModule {
};
_MatMenuModule.ɵfac = function MatMenuModule_Factory(t) {
  return new (t || _MatMenuModule)();
};
_MatMenuModule.ɵmod = ɵɵdefineNgModule({
  type: _MatMenuModule,
  imports: [CommonModule, MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger],
  exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger]
});
_MatMenuModule.ɵinj = ɵɵdefineInjector({
  providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [CommonModule, MatRippleModule, MatCommonModule, OverlayModule, CdkScrollableModule, MatCommonModule]
});
var MatMenuModule = _MatMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger],
      exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/tabs.mjs
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c03 = ["*"];
var _c13 = ["tabListContainer"];
var _c23 = ["tabList"];
var _c32 = ["tabListInner"];
var _c4 = ["nextPaginator"];
var _c5 = ["previousPaginator"];
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
var _c6 = (a0) => ({
  animationDuration: a0
});
var _c7 = (a0, a1) => ({
  value: a0,
  params: a1
});
var _c8 = ["tabBodyWrapper"];
var _c9 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {
}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkPortalOutlet", tab_r5.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate(tab_r5.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4, 5);
    ɵɵlistener("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r17);
      const tab_r5 = restoredCtx.$implicit;
      const i_r6 = restoredCtx.$index;
      const ctx_r16 = ɵɵnextContext();
      const _r0 = ɵɵreference(1);
      return ɵɵresetView(ctx_r16._handleClick(tab_r5, _r0, i_r6));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r17);
      const i_r6 = restoredCtx.$index;
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18._tabFocusChanged($event, i_r6));
    });
    ɵɵelement(2, "span", 6)(3, "div", 7);
    ɵɵelementStart(4, "span", 8)(5, "span", 9);
    ɵɵtemplate(6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 10)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const _r10 = ɵɵreference(1);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("mdc-tab--active", ctx_r1.selectedIndex === i_r6);
    ɵɵproperty("id", ctx_r1._getTabLabelId(i_r6))("ngClass", tab_r5.labelClass)("disabled", tab_r5.disabled)("fitInkBarToContent", ctx_r1.fitInkBarToContent);
    ɵɵattribute("tabIndex", ctx_r1._getTabIndex(i_r6))("aria-posinset", i_r6 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r6))("aria-selected", ctx_r1.selectedIndex === i_r6)("aria-label", tab_r5.ariaLabel || null)("aria-labelledby", !tab_r5.ariaLabel && tab_r5.ariaLabelledby ? tab_r5.ariaLabelledby : null);
    ɵɵadvance(3);
    ɵɵproperty("matRippleTrigger", _r10)("matRippleDisabled", tab_r5.disabled || ctx_r1.disableRipple);
    ɵɵadvance(3);
    ɵɵconditional(6, tab_r5.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tab-body", 11);
    ɵɵlistener("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r24 = ɵɵnextContext();
      return ɵɵresetView(ctx_r24._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26._setTabBodyWrapperHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r19 = ctx.$implicit;
    const i_r20 = ctx.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("mat-mdc-tab-body-active", ctx_r4.selectedIndex === i_r20);
    ɵɵproperty("id", ctx_r4._getTabContentId(i_r20))("ngClass", tab_r19.bodyClass)("content", tab_r19.content)("position", tab_r19.position)("origin", tab_r19.origin)("animationDuration", ctx_r4.animationDuration)("preserveContent", ctx_r4.preserveContent);
    ɵɵattribute("tabindex", ctx_r4.contentTabIndex != null && ctx_r4.selectedIndex === i_r20 ? ctx_r4.contentTabIndex : null)("aria-labelledby", ctx_r4._getTabLabelId(i_r20))("aria-hidden", ctx_r4.selectedIndex !== i_r20);
  }
}
var _c10 = ["mat-tab-nav-bar", ""];
var _c11 = ["mat-tab-link", ""];
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var _MatTabContent = class _MatTabContent {
  constructor(template) {
    this.template = template;
  }
};
_MatTabContent.ɵfac = function MatTabContent_Factory(t) {
  return new (t || _MatTabContent)(ɵɵdirectiveInject(TemplateRef));
};
_MatTabContent.ɵdir = ɵɵdefineDirective({
  type: _MatTabContent,
  selectors: [["", "matTabContent", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB_CONTENT,
    useExisting: _MatTabContent
  }])]
});
var MatTabContent = _MatTabContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var _MatTabLabel = class _MatTabLabel extends CdkPortal {
  constructor(templateRef, viewContainerRef, _closestTab) {
    super(templateRef, viewContainerRef);
    this._closestTab = _closestTab;
  }
};
_MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
  return new (t || _MatTabLabel)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MAT_TAB, 8));
};
_MatTabLabel.ɵdir = ɵɵdefineDirective({
  type: _MatTabLabel,
  selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB_LABEL,
    useExisting: _MatTabLabel
  }]), ɵɵInheritDefinitionFeature]
});
var MatTabLabel = _MatTabLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TAB]
    }, {
      type: Optional
    }]
  }], null);
})();
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var _MatTab = class _MatTab {
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  constructor(_viewContainerRef, _closestTabGroup) {
    this._viewContainerRef = _viewContainerRef;
    this._closestTabGroup = _closestTabGroup;
    this.disabled = false;
    this._explicitContent = void 0;
    this.textLabel = "";
    this._contentPortal = null;
    this._stateChanges = new Subject();
    this.position = null;
    this.origin = null;
    this.isActive = false;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
};
_MatTab.ɵfac = function MatTab_Factory(t) {
  return new (t || _MatTab)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MAT_TAB_GROUP, 8));
};
_MatTab.ɵcmp = ɵɵdefineComponent({
  type: _MatTab,
  selectors: [["mat-tab"]],
  contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatTabLabel, 5);
      ɵɵcontentQuery(dirIndex, MatTabContent, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateLabel = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._explicitContent = _t.first);
    }
  },
  viewQuery: function MatTab_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
    }
  },
  hostAttrs: ["hidden", ""],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    textLabel: [InputFlags.None, "label", "textLabel"],
    ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
    ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
    labelClass: "labelClass",
    bodyClass: "bodyClass"
  },
  exportAs: ["matTab"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB,
    useExisting: _MatTab
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function MatTab_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2
});
var MatTab = _MatTab;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      standalone: true,
      host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        "hidden": ""
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TAB_GROUP]
    }, {
      type: Optional
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }]
  });
})();
var ACTIVE_CLASS = "mdc-tab-indicator--active";
var NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
var MatInkBar = class {
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach((item) => item.deactivateInkBar());
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
};
function mixinInkBarItem(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._fitToContent = false;
    }
    /** Whether the ink bar should fit to the entire tab or just its content. */
    get fitInkBarToContent() {
      return this._fitToContent;
    }
    set fitInkBarToContent(v) {
      const newValue = coerceBooleanProperty(v);
      if (this._fitToContent !== newValue) {
        this._fitToContent = newValue;
        if (this._inkBarElement) {
          this._appendInkBarElement();
        }
      }
    }
    /** Aligns the ink bar to the current item. */
    activateInkBar(previousIndicatorClientRect) {
      const element = this.elementRef.nativeElement;
      if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
        element.classList.add(ACTIVE_CLASS);
        return;
      }
      const currentClientRect = element.getBoundingClientRect();
      const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      element.classList.add(NO_TRANSITION_CLASS);
      this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
      element.getBoundingClientRect();
      element.classList.remove(NO_TRANSITION_CLASS);
      element.classList.add(ACTIVE_CLASS);
      this._inkBarContentElement.style.setProperty("transform", "");
    }
    /** Removes the ink bar from the current item. */
    deactivateInkBar() {
      this.elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
    }
    /** Initializes the foundation. */
    ngOnInit() {
      this._createInkBarElement();
    }
    /** Destroys the foundation. */
    ngOnDestroy() {
      this._inkBarElement?.remove();
      this._inkBarElement = this._inkBarContentElement = null;
    }
    /** Creates and appends the ink bar element. */
    _createInkBarElement() {
      const documentNode = this.elementRef.nativeElement.ownerDocument || document;
      this._inkBarElement = documentNode.createElement("span");
      this._inkBarContentElement = documentNode.createElement("span");
      this._inkBarElement.className = "mdc-tab-indicator";
      this._inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
      this._inkBarElement.appendChild(this._inkBarContentElement);
      this._appendInkBarElement();
    }
    /**
     * Appends the ink bar to the tab host element or content, depending on whether
     * the ink bar should fit to content.
     */
    _appendInkBarElement() {
      if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Ink bar element has not been created and cannot be appended");
      }
      const parentElement = this._fitToContent ? this.elementRef.nativeElement.querySelector(".mdc-tab__content") : this.elementRef.nativeElement;
      if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Missing element to host the ink bar");
      }
      parentElement.appendChild(this._inkBarElement);
    }
  };
}
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = (element) => ({
    left: element ? (element.offsetLeft || 0) + "px" : "0",
    width: element ? (element.offsetWidth || 0) + "px" : "0"
  });
  return method;
}
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
var _MatTabLabelWrapperMixinBase = mixinInkBarItem(class {
});
var _MatTabLabelWrapper = class _MatTabLabelWrapper extends _MatTabLabelWrapperMixinBase {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    this.disabled = false;
  }
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
};
_MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
  return new (t || _MatTabLabelWrapper)(ɵɵdirectiveInject(ElementRef));
};
_MatTabLabelWrapper.ɵdir = ɵɵdefineDirective({
  type: _MatTabLabelWrapper,
  selectors: [["", "matTabLabelWrapper", ""]],
  hostVars: 3,
  hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", !!ctx.disabled);
      ɵɵclassProp("mat-mdc-tab-disabled", ctx.disabled);
    }
  },
  inputs: {
    fitInkBarToContent: "fitInkBarToContent",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatTabLabelWrapper = _MatTabLabelWrapper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      inputs: ["fitInkBarToContent"],
      host: {
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var passiveEventListenerOptions2 = normalizePassiveListenerOptions({
  passive: true
});
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var _MatPaginatedTabHeader = class _MatPaginatedTabHeader {
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    this._scrollDistance = 0;
    this._selectedIndexChanged = false;
    this._destroyed = new Subject();
    this._showPaginationControls = false;
    this._disableScrollAfter = true;
    this._disableScrollBefore = true;
    this._stopScrolling = new Subject();
    this.disablePagination = false;
    this._selectedIndex = 0;
    this.selectFocusedIndex = new EventEmitter();
    this.indexFocused = new EventEmitter();
    _ngZone.runOutsideAngular(() => {
      fromEvent(_elementRef.nativeElement, "mouseleave").pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._stopInterval();
      });
    });
  }
  ngAfterViewInit() {
    fromEvent(this._previousPaginator.nativeElement, "touchstart", passiveEventListenerOptions2).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("before");
    });
    fromEvent(this._nextPaginator.nativeElement, "touchstart", passiveEventListenerOptions2).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("after");
    });
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._viewportRuler.change(150);
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
    this._keyManager.updateActiveItem(this._selectedIndex);
    this._ngZone.onStable.pipe(take(1)).subscribe(realign);
    merge(dirChange, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(
      startWith(this._items),
      switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
        tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
        return () => {
          resizeObserver.disconnect();
        };
      }))),
      // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      skip(1),
      // Skip emissions where all the elements are invisible since we don't want
      // the header to try and re-render with invalid measurements. See #25574.
      filter((entries) => entries.some((e) => e.contentRect.width > 0 && e.contentRect.height > 0))
    );
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const isEnabled = this._tabListInner.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._changeDetectorRef.markForCheck();
      }
      this._showPaginationControls = isEnabled;
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
};
_MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
  return new (t || _MatPaginatedTabHeader)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatPaginatedTabHeader.ɵdir = ɵɵdefineDirective({
  type: _MatPaginatedTabHeader,
  inputs: {
    disablePagination: [InputFlags.HasDecoratorInputTransform, "disablePagination", "disablePagination", booleanAttribute],
    selectedIndex: [InputFlags.HasDecoratorInputTransform, "selectedIndex", "selectedIndex", numberAttribute]
  },
  outputs: {
    selectFocusedIndex: "selectFocusedIndex",
    indexFocused: "indexFocused"
  },
  features: [ɵɵInputTransformsFeature]
});
var MatPaginatedTabHeader = _MatPaginatedTabHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    indexFocused: [{
      type: Output
    }]
  });
})();
var _MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this.disableRipple = false;
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
};
_MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
  return new (t || _MatTabHeader)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabHeader.ɵcmp = ɵɵdefineComponent({
  type: _MatTabHeader,
  selectors: [["mat-tab-header"]],
  contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatTabLabelWrapper, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabHeader_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c13, 7);
      ɵɵviewQuery(_c23, 7);
      ɵɵviewQuery(_c32, 7);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListInner = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nextPaginator = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-header"],
  hostVars: 4,
  hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    }
  },
  inputs: {
    disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c03,
  decls: 13,
  vars: 10,
  consts: [["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "matRippleDisabled", "disabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-mdc-tab-labels"], ["tabListInner", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "matRippleDisabled", "disabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
  template: function MatTabHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 0, 1);
      ɵɵlistener("click", function MatTabHeader_Template_button_click_0_listener() {
        return ctx._handlePaginatorClick("before");
      })("mousedown", function MatTabHeader_Template_button_mousedown_0_listener($event) {
        return ctx._handlePaginatorPress("before", $event);
      })("touchend", function MatTabHeader_Template_button_touchend_0_listener() {
        return ctx._stopInterval();
      });
      ɵɵelement(2, "div", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 3, 4);
      ɵɵlistener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
        return ctx._handleKeydown($event);
      });
      ɵɵelementStart(5, "div", 5, 6);
      ɵɵlistener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
        return ctx._onContentChanges();
      });
      ɵɵelementStart(7, "div", 7, 8);
      ɵɵprojection(9);
      ɵɵelementEnd()()();
      ɵɵelementStart(10, "button", 9, 10);
      ɵɵlistener("mousedown", function MatTabHeader_Template_button_mousedown_10_listener($event) {
        return ctx._handlePaginatorPress("after", $event);
      })("click", function MatTabHeader_Template_button_click_10_listener() {
        return ctx._handlePaginatorClick("after");
      })("touchend", function MatTabHeader_Template_button_touchend_10_listener() {
        return ctx._stopInterval();
      });
      ɵɵelement(12, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
      ɵɵadvance(3);
      ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      ɵɵadvance(7);
      ɵɵclassProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
    }
  },
  dependencies: [MatRipple, CdkObserveContent],
  styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],
  encapsulation: 2
});
var MatTabHeader = _MatTabHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      standalone: true,
      imports: [MatRipple, CdkObserveContent],
      template: `<!-- TODO: this also had \`mat-elevation-z4\`. Figure out what we should do with it. -->
<button class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     tabindex="-1"
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     [disabled]="_disableScrollBefore || null"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</button>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationMode === 'NoopAnimations'">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<!-- TODO: this also had \`mat-elevation-z4\`. Figure out what we should do with it. -->
<button class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     [disabled]="_disableScrollAfter || null"
     tabindex="-1"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</button>
`,
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: trigger("translateTab", [
    // Transitions to `none` instead of 0, because some browsers might blur the content.
    state("center, void, left-origin-center, right-origin-center", style({
      transform: "none"
    })),
    // If the tab is either on the left or right, we additionally add a `min-height` of 1px
    // in order to ensure that the element has a height before its state changes. This is
    // necessary because Chrome does seem to skip the transition in RTL mode if the element does
    // not have a static height and is not rendered. See related issue: #9465
    state("left", style({
      transform: "translate3d(-100%, 0, 0)",
      minHeight: "1px",
      // Normally this is redundant since we detach the content from the DOM, but if the user
      // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
      visibility: "hidden"
    })),
    state("right", style({
      transform: "translate3d(100%, 0, 0)",
      minHeight: "1px",
      visibility: "hidden"
    })),
    transition("* => left, * => right, left => center, right => center", animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),
    transition("void => left-origin-center", [style({
      transform: "translate3d(-100%, 0, 0)",
      visibility: "hidden"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),
    transition("void => right-origin-center", [style({
      transform: "translate3d(100%, 0, 0)",
      visibility: "hidden"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])
  ])
};
var _MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
    super(componentFactoryResolver, viewContainerRef, _document);
    this._host = _host;
    this._centeringSub = Subscription.EMPTY;
    this._leavingSub = Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition(this._host._position))).subscribe((isCentering) => {
      if (isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
};
_MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
  return new (t || _MatTabBodyPortal)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(forwardRef(() => MatTabBody)), ɵɵdirectiveInject(DOCUMENT));
};
_MatTabBodyPortal.ɵdir = ɵɵdefineDirective({
  type: _MatTabBodyPortal,
  selectors: [["", "matTabBodyHost", ""]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var MatTabBodyPortal = _MatTabBodyPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: MatTabBody,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MatTabBody)]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _MatTabBody = class _MatTabBody {
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor(_elementRef, _dir, changeDetectorRef) {
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._dirChangeSubscription = Subscription.EMPTY;
    this._translateTabComplete = new Subject();
    this._onCentering = new EventEmitter();
    this._beforeCentering = new EventEmitter();
    this._afterLeavingCenter = new EventEmitter();
    this._onCentered = new EventEmitter(true);
    this.animationDuration = "500ms";
    this.preserveContent = false;
    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
    this._translateTabComplete.pipe(distinctUntilChanged((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe((event) => {
      if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
        this._onCentered.emit();
      }
      if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
        this._afterLeavingCenter.emit();
      }
    });
  }
  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the tab from the left or right before centering.
   */
  ngOnInit() {
    if (this._position == "center" && this.origin != null) {
      this._position = this._computePositionFromOrigin(this.origin);
    }
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._translateTabComplete.complete();
  }
  _onTranslateTabStarted(event) {
    const isCentering = this._isCenterPosition(event.toState);
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition(position) {
    return position == "center" || position == "left-origin-center" || position == "right-origin-center";
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */
  _computePositionFromOrigin(origin) {
    const dir = this._getLayoutDirection();
    if (dir == "ltr" && origin <= 0 || dir == "rtl" && origin > 0) {
      return "left-origin-center";
    }
    return "right-origin-center";
  }
};
_MatTabBody.ɵfac = function MatTabBody_Factory(t) {
  return new (t || _MatTabBody)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatTabBody.ɵcmp = ɵɵdefineComponent({
  type: _MatTabBody,
  selectors: [["mat-tab-body"]],
  viewQuery: function MatTabBody_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkPortalOutlet, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalHost = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-body"],
  inputs: {
    _content: [InputFlags.None, "content", "_content"],
    origin: "origin",
    animationDuration: "animationDuration",
    preserveContent: "preserveContent",
    position: "position"
  },
  outputs: {
    _onCentering: "_onCentering",
    _beforeCentering: "_beforeCentering",
    _afterLeavingCenter: "_afterLeavingCenter",
    _onCentered: "_onCentered"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 6,
  consts: [["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
  template: function MatTabBody_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵlistener("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
        return ctx._onTranslateTabStarted($event);
      })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
        return ctx._translateTabComplete.next($event);
      });
      ɵɵtemplate(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("@translateTab", ɵɵpureFunction2(3, _c7, ctx._position, ɵɵpureFunction1(1, _c6, ctx.animationDuration)));
    }
  },
  dependencies: [MatTabBodyPortal, CdkScrollable],
  styles: ['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}'],
  encapsulation: 2,
  data: {
    animation: [matTabsAnimations.translateTab]
  }
});
var MatTabBody = _MatTabBody;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        "class": "mat-mdc-tab-body"
      },
      standalone: true,
      imports: [MatTabBodyPortal, CdkScrollable],
      template: '<div class="mat-mdc-tab-body-content" #content\n     [@translateTab]="{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }"\n     (@translateTab.start)="_onTranslateTabStarted($event)"\n     (@translateTab.done)="_translateTabComplete.next($event)"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n',
      styles: ['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _afterLeavingCenter: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _portalHost: [{
      type: ViewChild,
      args: [CdkPortalOutlet]
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    origin: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    preserveContent: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var nextId = 0;
var ENABLE_BACKGROUND_INPUT = true;
var _MatTabGroup = class _MatTabGroup {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  /**
   * Background color of the tab group.
   * @deprecated The background color should be customized through Sass theming APIs.
   * @breaking-change 20.0.0 Remove this input
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    if (!ENABLE_BACKGROUND_INPUT) {
      throw new Error(`mat-tab-group background color must be set through the Sass theming API`);
    }
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(_elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._tabs = new QueryList();
    this._indexToSelect = 0;
    this._lastFocusedTabIndex = null;
    this._tabBodyWrapperHeight = 0;
    this._tabsSubscription = Subscription.EMPTY;
    this._tabLabelSubscription = Subscription.EMPTY;
    this._fitInkBarToContent = false;
    this.stretchTabs = true;
    this.dynamicHeight = false;
    this._selectedIndex = null;
    this.headerPosition = "above";
    this.disablePagination = false;
    this.disableRipple = false;
    this.preserveContent = false;
    this.selectedIndexChange = new EventEmitter();
    this.focusChange = new EventEmitter();
    this.animationDone = new EventEmitter();
    this.selectedTabChange = new EventEmitter(true);
    this._isServer = !inject(Platform).isBrowser;
    this._groupId = nextId++;
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(i) {
    return `mat-tab-label-${this._groupId}-${i}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(i) {
    return `mat-tab-content-${this._groupId}-${i}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this.animationDone.emit();
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
};
_MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
  return new (t || _MatTabGroup)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_TABS_CONFIG, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabGroup.ɵcmp = ɵɵdefineComponent({
  type: _MatTabGroup,
  selectors: [["mat-tab-group"]],
  contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatTab, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._allTabs = _t);
    }
  },
  viewQuery: function MatTabGroup_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c8, 5);
      ɵɵviewQuery(_c9, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabBodyWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabHeader = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-group"],
  hostVars: 10,
  hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap("mat-" + (ctx.color || "primary"));
      ɵɵstyleProp("--mat-tab-animation-duration", ctx.animationDuration);
      ɵɵclassProp("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
    }
  },
  inputs: {
    color: "color",
    fitInkBarToContent: [InputFlags.HasDecoratorInputTransform, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
    stretchTabs: [InputFlags.HasDecoratorInputTransform, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
    dynamicHeight: [InputFlags.HasDecoratorInputTransform, "dynamicHeight", "dynamicHeight", booleanAttribute],
    selectedIndex: [InputFlags.HasDecoratorInputTransform, "selectedIndex", "selectedIndex", numberAttribute],
    headerPosition: "headerPosition",
    animationDuration: "animationDuration",
    contentTabIndex: [InputFlags.HasDecoratorInputTransform, "contentTabIndex", "contentTabIndex", numberAttribute],
    disablePagination: [InputFlags.HasDecoratorInputTransform, "disablePagination", "disablePagination", booleanAttribute],
    disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
    preserveContent: [InputFlags.HasDecoratorInputTransform, "preserveContent", "preserveContent", booleanAttribute],
    backgroundColor: "backgroundColor"
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    focusChange: "focusChange",
    animationDone: "animationDone",
    selectedTabChange: "selectedTabChange"
  },
  exportAs: ["matTabGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB_GROUP,
    useExisting: _MatTabGroup
  }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c03,
  decls: 9,
  vars: 6,
  consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], [1, "mat-mdc-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "id", "ngClass", "disabled", "fitInkBarToContent", "click", "cdkFocusChange"], ["tabNode", ""], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "ngClass", "content", "position", "origin", "animationDuration", "preserveContent", "_onCentered", "_onCentering"], ["class", "mdc-tab mat-mdc-tab mat-mdc-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 3, "id", "mdc-tab--active", "ngClass", "disabled", "fitInkBarToContent"], ["role", "tabpanel", 3, "id", "mat-mdc-tab-body-active", "ngClass", "content", "position", "origin", "animationDuration", "preserveContent"]],
  template: function MatTabGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "mat-tab-header", 0, 1);
      ɵɵlistener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
        return ctx._focusChanged($event);
      })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
        return ctx.selectedIndex = $event;
      });
      ɵɵrepeaterCreate(2, MatTabGroup_For_3_Template, 8, 16, "div", 12, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵtemplate(4, MatTabGroup_Conditional_4_Template, 1, 0);
      ɵɵelementStart(5, "div", 2, 3);
      ɵɵrepeaterCreate(7, MatTabGroup_For_8_Template, 1, 12, "mat-tab-body", 13, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
      ɵɵadvance(2);
      ɵɵrepeater(ctx._tabs);
      ɵɵadvance(2);
      ɵɵconditional(4, ctx._isServer ? 4 : -1);
      ɵɵadvance();
      ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      ɵɵadvance(2);
      ɵɵrepeater(ctx._tabs);
    }
  },
  dependencies: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, NgClass, MatRipple, CdkPortalOutlet, MatTabBody],
  styles: ['.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}'],
  encapsulation: 2
});
var MatTabGroup = _MatTabGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      standalone: true,
      imports: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, NgClass, MatRipple, CdkPortalOutlet, MatTabBody],
      template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab; let i = $index) {\n    <div class="mdc-tab mat-mdc-tab mat-mdc-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(i)"\n        [attr.tabIndex]="_getTabIndex(i)"\n        [attr.aria-posinset]="i + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId(i)"\n        [attr.aria-selected]="selectedIndex === i"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === i"\n        [ngClass]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, i)"\n        (cdkFocusChange)="_tabFocusChanged($event, i)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationMode === \'NoopAnimations\'"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab; let i = $index) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId(i)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(i)"\n                 [attr.aria-hidden]="selectedIndex !== i"\n                 [class.mat-mdc-tab-body-active]="selectedIndex === i"\n                 [ngClass]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [origin]="tab.origin"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)">\n    </mat-tab-body>\n  }\n</div>\n',
      styles: ['.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TABS_CONFIG]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }],
    color: [{
      type: Input
    }],
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    dynamicHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var MatTabChangeEvent = class {
};
var nextUniqueId2 = 0;
var _MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  /** Background color of the tab nav. */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode, defaultConfig) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._fitInkBarToContent = new BehaviorSubject(false);
    this.stretchTabs = true;
    this.disableRipple = false;
    this.color = "primary";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      this.updateActiveLink();
    });
    super.ngAfterContentInit();
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
    }
    super.ngAfterViewInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        this._changeDetectorRef.markForCheck();
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        return;
      }
    }
    this.selectedIndex = -1;
    this._inkBar.hide();
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
};
_MatTabNav.ɵfac = function MatTabNav_Factory(t) {
  return new (t || _MatTabNav)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_TABS_CONFIG, 8));
};
_MatTabNav.ɵcmp = ɵɵdefineComponent({
  type: _MatTabNav,
  selectors: [["", "mat-tab-nav-bar", ""]],
  contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatTabLink, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabNav_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c13, 7);
      ɵɵviewQuery(_c23, 7);
      ɵɵviewQuery(_c32, 7);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListInner = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nextPaginator = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
  hostVars: 17,
  hostBindings: function MatTabNav_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx._getRole());
      ɵɵstyleProp("--mat-tab-animation-duration", ctx.animationDuration);
      ɵɵclassProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    fitInkBarToContent: [InputFlags.HasDecoratorInputTransform, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
    stretchTabs: [InputFlags.HasDecoratorInputTransform, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
    animationDuration: "animationDuration",
    backgroundColor: "backgroundColor",
    disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
    color: "color",
    tabPanel: "tabPanel"
  },
  exportAs: ["matTabNavBar", "matTabNav"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c10,
  ngContentSelectors: _c03,
  decls: 13,
  vars: 8,
  consts: [["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "matRippleDisabled", "disabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-mdc-tab-links"], ["tabListInner", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "matRippleDisabled", "disabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
  template: function MatTabNav_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 0, 1);
      ɵɵlistener("click", function MatTabNav_Template_button_click_0_listener() {
        return ctx._handlePaginatorClick("before");
      })("mousedown", function MatTabNav_Template_button_mousedown_0_listener($event) {
        return ctx._handlePaginatorPress("before", $event);
      })("touchend", function MatTabNav_Template_button_touchend_0_listener() {
        return ctx._stopInterval();
      });
      ɵɵelement(2, "div", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 3, 4);
      ɵɵlistener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
        return ctx._handleKeydown($event);
      });
      ɵɵelementStart(5, "div", 5, 6);
      ɵɵlistener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
        return ctx._onContentChanges();
      });
      ɵɵelementStart(7, "div", 7, 8);
      ɵɵprojection(9);
      ɵɵelementEnd()()();
      ɵɵelementStart(10, "button", 9, 10);
      ɵɵlistener("mousedown", function MatTabNav_Template_button_mousedown_10_listener($event) {
        return ctx._handlePaginatorPress("after", $event);
      })("click", function MatTabNav_Template_button_click_10_listener() {
        return ctx._handlePaginatorClick("after");
      })("touchend", function MatTabNav_Template_button_touchend_10_listener() {
        return ctx._stopInterval();
      });
      ɵɵelement(12, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
      ɵɵadvance(10);
      ɵɵclassProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
    }
  },
  dependencies: [MatRipple, CdkObserveContent],
  styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"],
  encapsulation: 2
});
var MatTabNav = _MatTabNav;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [MatRipple, CdkObserveContent],
      template: `<!-- TODO: this also had \`mat-elevation-z4\`. Figure out what we should do with it. -->
<button class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     tabindex="-1"
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     [disabled]="_disableScrollBefore || null"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</button>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<!-- TODO: this also had \`mat-elevation-z4\`. Figure out what we should do with it. -->
<button class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     [disabled]="_disableScrollAfter || null"
     tabindex="-1"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</button>
`,
      styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_TABS_CONFIG]
    }]
  }], {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    animationDuration: [{
      type: Input
    }],
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var _MatTabLinkMixinBase = mixinInkBarItem(class {
});
var _MatTabLink = class _MatTabLink extends _MatTabLinkMixinBase {
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    super();
    this._tabNavBar = _tabNavBar;
    this.elementRef = elementRef;
    this._focusMonitor = _focusMonitor;
    this._destroyed = new Subject();
    this._isActive = false;
    this.disabled = false;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.id = `mat-tab-link-${nextUniqueId2++}`;
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = parseInt(tabIndex) || 0;
    if (animationMode === "NoopAnimations") {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    _tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
  _getTabIndex() {
    if (this._tabNavBar.tabPanel) {
      return this._isActive && !this.disabled ? 0 : -1;
    } else {
      return this.disabled ? -1 : this.tabIndex;
    }
  }
};
_MatTabLink.ɵfac = function MatTabLink_Factory(t) {
  return new (t || _MatTabLink)(ɵɵdirectiveInject(MatTabNav), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabLink.ɵcmp = ɵɵdefineComponent({
  type: _MatTabLink,
  selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
  hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-mdc-focus-indicator"],
  hostVars: 11,
  hostBindings: function MatTabLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatTabLink_focus_HostBindingHandler() {
        return ctx._handleFocus();
      })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
      ɵɵclassProp("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
    }
  },
  inputs: {
    active: [InputFlags.HasDecoratorInputTransform, "active", "active", booleanAttribute],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [InputFlags.HasDecoratorInputTransform, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
    id: "id"
  },
  exportAs: ["matTabLink"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c11,
  ngContentSelectors: _c03,
  decls: 5,
  vars: 2,
  consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
  template: function MatTabLink_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelement(0, "span", 0)(1, "div", 1);
      ɵɵelementStart(2, "span", 2)(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
    }
  },
  dependencies: [MatRipple],
  styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatTabLink = _MatTabLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Component,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "class": "mdc-tab mat-mdc-tab-link mat-mdc-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_getTabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      },
      standalone: true,
      imports: [MatRipple],
      template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n',
      styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}']
    }]
  }], () => [{
    type: MatTabNav
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var _MatTabNavPanel = class _MatTabNavPanel {
  constructor() {
    this.id = `mat-tab-nav-panel-${nextUniqueId2++}`;
  }
};
_MatTabNavPanel.ɵfac = function MatTabNavPanel_Factory(t) {
  return new (t || _MatTabNavPanel)();
};
_MatTabNavPanel.ɵcmp = ɵɵdefineComponent({
  type: _MatTabNavPanel,
  selectors: [["mat-tab-nav-panel"]],
  hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
  hostVars: 2,
  hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matTabNavPanel"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function MatTabNavPanel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var MatTabNavPanel = _MatTabNavPanel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-mdc-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var _MatTabsModule = class _MatTabsModule {
};
_MatTabsModule.ɵfac = function MatTabsModule_Factory(t) {
  return new (t || _MatTabsModule)();
};
_MatTabsModule.ɵmod = ɵɵdefineNgModule({
  type: _MatTabsModule,
  imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
  exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
});
_MatTabsModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatTabsModule = _MatTabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

// dist/commons/fesm2022/commons.mjs
var _c04 = ["svgField"];
function StatemachineviewComponent__svg_line_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "line", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("x1", ctx_r1.drawingTransitionOrigin().x)("y1", ctx_r1.drawingTransitionOrigin().y)("x2", ctx_r1.drawingTransitionDestination().x)("y2", ctx_r1.drawingTransitionDestination().y);
  }
}
var _c14 = (a0, a1) => ({
  "deterministic": a0,
  "highlightState": a1
});
function StatemachineviewComponent__svg_g_8__svg_circle_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle", 16);
  }
  if (rf & 2) {
    const state_r4 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c14, !state_r4.isDeterministic() && ctx_r5.showDeterministicStates, state_r4.highlight));
    ɵɵattribute("r", ctx_r5.outerCircleRadius)("cx", state_r4.origin.x)("cy", state_r4.origin.y);
  }
}
function StatemachineviewComponent__svg_g_8__svg_circle_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle");
  }
  if (rf & 2) {
    const state_r4 = ɵɵnextContext().$implicit;
    ɵɵattribute("r", state_r4.r - 5)("cx", state_r4.x)("cy", state_r4.y);
  }
}
function StatemachineviewComponent__svg_g_8__svg_line_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "line", 17);
  }
  if (rf & 2) {
    const state_r4 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵattribute("x1", state_r4.origin.x - state_r4.r - ctx_r7.START_TRANSITION_ARROW_LENGTH)("x2", state_r4.origin.x - state_r4.r - ctx_r7.ARROW_LENGTH)("y1", state_r4.origin.y)("y2", state_r4.origin.y);
  }
}
var _c24 = (a1, a2, a3) => ({
  outerCircle: true,
  isActive: a1,
  startConnection: a2,
  endConnection: a3
});
var _c33 = (a1, a2) => ({
  innerCircle: true,
  isActive: a1,
  endConnection: a2
});
function StatemachineviewComponent__svg_g_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, StatemachineviewComponent__svg_g_8__svg_circle_1_Template, 1, 7, "circle", 9);
    ɵɵelementStart(2, "g", 10);
    ɵɵlistener("mouseup", function StatemachineviewComponent__svg_g_8_Template__svg_g_mouseup_2_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.onEntireCircleMouseUp($event, state_r4));
    })("mousedown", function StatemachineviewComponent__svg_g_8_Template__svg_g_mousedown_2_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.onEntireCircleMouseDown($event, state_r4));
    })("mouseenter", function StatemachineviewComponent__svg_g_8_Template__svg_g_mouseenter_2_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.onCircleEnter($event, state_r4));
    })("mouseleave", function StatemachineviewComponent__svg_g_8_Template__svg_g_mouseleave_2_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.onCircleLeave($event, state_r4));
    });
    ɵɵelementStart(3, "g", 11);
    ɵɵlistener("mouseup", function StatemachineviewComponent__svg_g_8_Template__svg_g_mouseup_3_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.onOuterCircleMouseUp($event, state_r4));
    })("mousedown", function StatemachineviewComponent__svg_g_8_Template__svg_g_mousedown_3_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.onOuterCircleMouseDown($event, state_r4));
    })("mouseenter", function StatemachineviewComponent__svg_g_8_Template__svg_g_mouseenter_3_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.onOuterCircleEnter($event, state_r4));
    })("mouseleave", function StatemachineviewComponent__svg_g_8_Template__svg_g_mouseleave_3_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.onOuterCircleLeave($event, state_r4));
    });
    ɵɵelement(4, "circle");
    ɵɵtemplate(5, StatemachineviewComponent__svg_g_8__svg_circle_5_Template, 1, 3, "circle", 12);
    ɵɵelementEnd();
    ɵɵelementStart(6, "circle", 13);
    ɵɵlistener("mouseup", function StatemachineviewComponent__svg_g_8_Template__svg_circle_mouseup_6_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.onInnerCircleMouseUp($event, state_r4));
    })("mousedown", function StatemachineviewComponent__svg_g_8_Template__svg_circle_mousedown_6_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.onInnerCircleMouseDown($event, state_r4));
    })("mouseenter", function StatemachineviewComponent__svg_g_8_Template__svg_circle_mouseenter_6_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.onInnerCircleEnter($event, state_r4));
    })("mouseleave", function StatemachineviewComponent__svg_g_8_Template__svg_circle_mouseleave_6_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r23 = ɵɵnextContext();
      return ɵɵresetView(ctx_r23.onInnerCircleLeave($event, state_r4));
    })("contextmenu", function StatemachineviewComponent__svg_g_8_Template__svg_circle_contextmenu_6_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const state_r4 = restoredCtx.$implicit;
      const ctx_r24 = ɵɵnextContext();
      return ɵɵresetView(ctx_r24.openStateEditDialog(state_r4, $event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(7, "text", 14);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵtemplate(9, StatemachineviewComponent__svg_g_8__svg_line_9_Template, 1, 4, "line", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const state_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !state_r4.isDeterministic() && ctx_r2.showDeterministicStates || state_r4.highlight);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction3(14, _c24, ctx_r2.isActiveState(state_r4), ctx_r2.showStartConnection(state_r4) || state_r4.outerCircleHovered, ctx_r2.showEndConnection(state_r4)));
    ɵɵadvance();
    ɵɵattribute("cx", state_r4.x)("cy", state_r4.y)("r", state_r4.r);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isFinalState(state_r4));
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction2(18, _c33, ctx_r2.isActiveState(state_r4), ctx_r2.showEndConnection(state_r4) || state_r4.innerCircleHovered));
    ɵɵattribute("cx", state_r4.x)("cy", state_r4.y)("r", state_r4.r * 0.5);
    ɵɵadvance();
    ɵɵattribute("x", state_r4.x)("y", state_r4.y);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", state_r4.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isStartState(state_r4));
  }
}
function StatemachineviewComponent__svg_g_9__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "path", 23);
    ɵɵlistener("contextmenu", function StatemachineviewComponent__svg_g_9__svg_path_4_Template__svg_path_contextmenu_0_listener($event) {
      ɵɵrestoreView(_r31);
      const transition_r25 = ɵɵnextContext().$implicit;
      const ctx_r29 = ɵɵnextContext();
      return ɵɵresetView(ctx_r29.editTransition(transition_r25, $event));
    })("mousedown", function StatemachineviewComponent__svg_g_9__svg_path_4_Template__svg_path_mousedown_0_listener($event) {
      ɵɵrestoreView(_r31);
      const transition_r25 = ɵɵnextContext().$implicit;
      const ctx_r32 = ɵɵnextContext();
      return ɵɵresetView(ctx_r32.onAdjustableCircleMouseDown($event, transition_r25));
    })("mouseup", function StatemachineviewComponent__svg_g_9__svg_path_4_Template__svg_path_mouseup_0_listener($event) {
      ɵɵrestoreView(_r31);
      const transition_r25 = ɵɵnextContext().$implicit;
      const ctx_r34 = ɵɵnextContext();
      return ɵɵresetView(ctx_r34.onAdjustableCircleMouseUp($event, transition_r25));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext();
    const i_r26 = ctx_r36.index;
    const transition_r25 = ctx_r36.$implicit;
    ɵɵproperty("id", "transition" + i_r26);
    ɵɵattribute("d", transition_r25.path());
  }
}
function StatemachineviewComponent__svg_g_9__svg_text_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const label_r37 = ctx.$implicit;
    const transition_r25 = ɵɵnextContext().$implicit;
    ɵɵattribute("x", label_r37.x)("y", label_r37.y)("font-family", transition_r25.fontFamily)("font-size", transition_r25.fontSize);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", label_r37.text, " ");
  }
}
function StatemachineviewComponent__svg_g_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "path", 18);
    ɵɵelementStart(2, "path", 19);
    ɵɵlistener("mousedown", function StatemachineviewComponent__svg_g_9_Template__svg_path_mousedown_2_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const transition_r25 = restoredCtx.$implicit;
      const ctx_r40 = ɵɵnextContext();
      return ɵɵresetView(ctx_r40.onAdjustableCircleMouseDown($event, transition_r25));
    })("mouseup", function StatemachineviewComponent__svg_g_9_Template__svg_path_mouseup_2_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const transition_r25 = restoredCtx.$implicit;
      const ctx_r42 = ɵɵnextContext();
      return ɵɵresetView(ctx_r42.onAdjustableCircleMouseUp($event, transition_r25));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "path", 20);
    ɵɵlistener("contextmenu", function StatemachineviewComponent__svg_g_9_Template__svg_path_contextmenu_3_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const transition_r25 = restoredCtx.$implicit;
      const ctx_r43 = ɵɵnextContext();
      return ɵɵresetView(ctx_r43.editTransition(transition_r25, $event));
    })("mousedown", function StatemachineviewComponent__svg_g_9_Template__svg_path_mousedown_3_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const transition_r25 = restoredCtx.$implicit;
      const ctx_r44 = ɵɵnextContext();
      return ɵɵresetView(ctx_r44.onAdjustableCircleMouseDown($event, transition_r25));
    })("mouseup", function StatemachineviewComponent__svg_g_9_Template__svg_path_mouseup_3_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const transition_r25 = restoredCtx.$implicit;
      const ctx_r45 = ɵɵnextContext();
      return ɵɵresetView(ctx_r45.onAdjustableCircleMouseUp($event, transition_r25));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, StatemachineviewComponent__svg_g_9__svg_path_4_Template, 1, 2, "path", 21)(5, StatemachineviewComponent__svg_g_9__svg_text_5_Template, 2, 5, "text", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const transition_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    ɵɵadvance();
    ɵɵattribute("d", transition_r25.arrow());
    ɵɵadvance();
    ɵɵattribute("d", transition_r25.path());
    ɵɵadvance();
    ɵɵproperty("id", "transition" + i_r26);
    ɵɵattribute("d", transition_r25.path());
    ɵɵadvance();
    ɵɵproperty("ngIf", transition_r25.highlight);
    ɵɵadvance();
    ɵɵproperty("ngForOf", transition_r25.labels());
  }
}
var _c42 = (a1, a2) => ({
  tapeInput: true,
  accepting: a1,
  notAccepting: a2
});
function MenuComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function MenuComponent_button_33_Template_button_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r7);
      const aufgabe_r5 = restoredCtx.$implicit;
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.createInstanceFromJSON(aufgabe_r5));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const aufgabe_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", aufgabe_r5.title, " ");
  }
}
function MenuComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function MenuComponent_button_36_Template_button_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r10);
      const aufgabe_r8 = restoredCtx.$implicit;
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.createInstanceFromJSON(aufgabe_r8));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const aufgabe_r8 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", aufgabe_r8.title, " ");
  }
}
var _c52 = ["videoRef"];
var Point = class _Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static get zero() {
    return new _Point(0, 0);
  }
  distance(point) {
    const deltaX = this.x - point.x;
    const deltaY = this.y - point.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  // Moves this point into the direction of the given point, by a specific amount.
  moveToPoint(point, amount) {
    const distance = this.distance(point);
    const newDistance = distance - amount;
    const vecP1P2x = point.x - this.x;
    const vecP1P2y = point.y - this.y;
    let unitVecX = 0;
    let unitVecY = 0;
    if (distance != 0) {
      unitVecX = vecP1P2x / distance;
      unitVecY = vecP1P2y / distance;
    }
    const newPointX = point.x - newDistance * unitVecX;
    const newPointY = point.y - newDistance * unitVecY;
    return new _Point(newPointX, newPointY);
  }
  addPoint(point) {
    return new _Point(this.x + point.x, this.y + point.y);
  }
  get perpendicular() {
    return new _Point(this.y, -this.x);
  }
  toJSON() {
    return {
      x: this.x,
      y: this.y
    };
  }
};
var _Arrow = class _Arrow {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.lowerLeft = new Point(0, 0);
    this.upperLeft = new Point(0, this.height);
    this.centerRight = new Point(this.width, this.height / 2);
    this.refX = 0;
    this.refY = this.centerRight.y;
  }
  path() {
    return this.lowerLeft.x + " " + this.lowerLeft.y + ", " + this.upperLeft.x + " " + this.upperLeft.y + ", " + this.centerRight.x + " " + this.centerRight.y;
  }
};
_Arrow.transition = new _Arrow(7.5 * 2, 5 * 2);
var Arrow = _Arrow;
var _StatemachineService = class _StatemachineService {
  constructor(dialog) {
    this.dialog = dialog;
    this.automatonChangedSubject = new Subject();
    this.onAutomatonChanged = this.automatonChangedSubject.asObservable();
    this.showDeterministicStates = false;
    this.testCaseViewIsVisible = true;
    this.loadFromBrowserCacheOnInit();
  }
  loadFromBrowserCacheOnInit() {
    try {
      const savedData = localStorage.getItem("endlicherautomat");
      if (savedData && this.stateMachine) {
        const json = JSON.parse(savedData);
        this.stateMachine = this.stateMachine.createInstanceFromJSON(json);
        console.log("Automatisch aus Browser-Cache geladen");
        this.automatonChangedSubject.next();
      }
    } catch (error) {
      console.error("Fehler beim automatischen Laden aus Browser-Cache:", error);
    }
  }
  get input() {
    return this.stateMachine.input;
  }
  get states() {
    return this.stateMachine.getAllStates();
  }
  isFinalState(state2) {
    return this.stateMachine.isFinalState(state2);
  }
  isStartState(state2) {
    return this.stateMachine.isStartState(state2);
  }
  addState(x, y) {
    const newState = this.stateMachine.addState(x, y);
    this.automatonChangedSubject.next();
    return newState;
  }
  deleteState(state2) {
    this.stateMachine.deleteState(state2);
    this.automatonChangedSubject.next();
  }
  addTransition(source, destination) {
    const transition2 = source.addTransition(destination);
    this.automatonChangedSubject.next();
    return transition2;
  }
  removeTransition(transition2) {
    transition2.delete();
    this.automatonChangedSubject.next();
  }
  get transitions() {
    return this.stateMachine.getAllTransitions();
  }
  openStateEditDialog(state2, dialog) {
    const dialogRef = state2.openEditDialog(dialog);
    dialogRef.afterClosed().subscribe(() => {
      this.automatonChangedSubject.next();
    });
    return dialogRef;
  }
  openTransitionEditDialog(source, destination, dialog) {
    const dialogRef = source.addTransition(destination).openTransitionDialog(dialog);
    dialogRef.afterClosed().subscribe(() => {
      this.automatonChangedSubject.next();
    });
    return dialogRef;
  }
  isActiveState(state2) {
    return this.stateMachine.activeStates(this.stateMachine.input).has(state2);
  }
  isDeterministic() {
    return this.stateMachine.isDeterministic();
  }
  isStartStateDefined() {
    return this.stateMachine.startState != void 0;
  }
  createNewInstance() {
    this.stateMachine = this.stateMachine.createNewInstance();
    this.automatonChangedSubject.next();
    localStorage.removeItem("endlicherautomat");
  }
  loadFromBrowserCache() {
    try {
      this.stateMachine = this.stateMachine.loadFromBrowserCache();
      this.automatonChangedSubject.next();
      console.log("Manuell aus Browser-Cache geladen");
    } catch (error) {
      console.error("Fehler beim Laden aus Browser-Cache:", error);
      alert("Fehler beim Laden aus dem Browser-Cache. Möglicherweise sind keine gespeicherten Daten vorhanden.");
    }
  }
  saveToBrowserCache() {
    try {
      this.stateMachine.saveToBrowserCache();
      console.log("In Browser-Cache gespeichert");
    } catch (error) {
      console.error("Fehler beim Speichern in Browser-Cache:", error);
    }
  }
  createInstanceFromJSON(configuration) {
    this.stateMachine = this.stateMachine.createInstanceFromJSON(configuration);
    this.automatonChangedSubject.next();
  }
  saveToLocalStorage() {
    this.stateMachine.saveToLocalStorage();
  }
  inputChanged(input) {
    this.stateMachine.input = input;
  }
  isAccepting() {
    return this.stateMachine.isAcceptingWord(this.stateMachine.input).isAccepting;
  }
  setHelpDialogComponent(component) {
    this.helpDialogComponent = component;
  }
  openHelpDialog() {
    if (this.helpDialogComponent) {
      this.dialog.open(this.helpDialogComponent, {
        maxWidth: "70vw",
        maxHeight: "90vh"
      });
    }
  }
};
_StatemachineService.ɵfac = function StatemachineService_Factory(t) {
  return new (t || _StatemachineService)(ɵɵinject(MatDialog));
};
_StatemachineService.ɵprov = ɵɵdefineInjectable({
  token: _StatemachineService,
  factory: _StatemachineService.ɵfac,
  providedIn: "root"
});
var StatemachineService = _StatemachineService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatemachineService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MatDialog
  }], null);
})();
var _StateEditDialogComponent = class _StateEditDialogComponent {
  constructor(service, dialogRef, data) {
    this.service = service;
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onEnter() {
    this.dialogRef.close();
  }
  deleteState() {
    this.service.deleteState(this.data);
    this.dialogRef.close();
  }
  isStartState() {
    return this.service.isStartState(this.data);
  }
  isFinalState() {
    return this.service.isFinalState(this.data);
  }
  toggleStart(isChecked) {
    this.service.stateMachine.startState = isChecked ? this.data : void 0;
  }
  toggleFinal(isChecked) {
    if (isChecked) {
      this.service.stateMachine.finalStates = /* @__PURE__ */ new Set([...this.service.stateMachine.finalStates, this.data]);
    } else {
      this.service.stateMachine.finalStates.delete(this.data);
      this.service.stateMachine.finalStates = /* @__PURE__ */ new Set([...this.service.stateMachine.finalStates]);
    }
  }
};
_StateEditDialogComponent.ɵfac = function StateEditDialogComponent_Factory(t) {
  return new (t || _StateEditDialogComponent)(ɵɵdirectiveInject(StatemachineService), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA));
};
_StateEditDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _StateEditDialogComponent,
  selectors: [["app-state-edit-dialog"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 20,
  vars: 5,
  consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["title", "Zustandsname", "matInput", "", "type", "text", "autocomplete", "off", "maxlength", "12", "name", "stateName-input", 3, "value", "ngModel", "ngModelChange", "keydown.enter"], ["name", "startState", 3, "checked", "change"], ["name", "endState", 3, "checked", "change"], ["mat-dialog-actions", "", 1, "action-buttons"], ["mat-stroked-button", "", "color", "warn", 1, "button-delete", 3, "mat-dialog-close", "click"], ["mat-stroked-button", "", 1, "button-ok", 3, "mat-dialog-close"]],
  template: function StateEditDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "h3", 1);
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2)(4, "form")(5, "mat-form-field")(6, "mat-label");
      ɵɵtext(7, "Zustandsname");
      ɵɵelementEnd();
      ɵɵelementStart(8, "input", 3);
      ɵɵlistener("ngModelChange", function StateEditDialogComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.data.name = $event;
      })("keydown.enter", function StateEditDialogComponent_Template_input_keydown_enter_8_listener() {
        return ctx.onEnter();
      });
      ɵɵelementEnd()();
      ɵɵelementStart(9, "section")(10, "mat-checkbox", 4);
      ɵɵlistener("change", function StateEditDialogComponent_Template_mat_checkbox_change_10_listener($event) {
        return ctx.toggleStart($event.checked);
      });
      ɵɵtext(11, " Startzustand ");
      ɵɵelementEnd();
      ɵɵelement(12, "br");
      ɵɵelementStart(13, "mat-checkbox", 5);
      ɵɵlistener("change", function StateEditDialogComponent_Template_mat_checkbox_change_13_listener($event) {
        return ctx.toggleFinal($event.checked);
      });
      ɵɵtext(14, " Endzustand ");
      ɵɵelementEnd()()();
      ɵɵelementStart(15, "div", 6)(16, "button", 7);
      ɵɵlistener("click", function StateEditDialogComponent_Template_button_click_16_listener() {
        return ctx.deleteState();
      });
      ɵɵtext(17, " Löschen ");
      ɵɵelementEnd();
      ɵɵelementStart(18, "button", 8);
      ɵɵtext(19, " Ok ");
      ɵɵelementEnd()()()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵtextInterpolate1("Zustand ", ctx.data.name, " bearbeiten");
      ɵɵadvance(6);
      ɵɵpropertyInterpolate("value", ctx.data.name);
      ɵɵproperty("ngModel", ctx.data.name);
      ɵɵadvance(2);
      ɵɵproperty("checked", ctx.isStartState());
      ɵɵadvance(3);
      ɵɵproperty("checked", ctx.isFinalState());
    }
  },
  dependencies: [CommonModule, MatFormFieldModule, MatFormField, MatLabel, FormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, MatInputModule, MatInput, MatTableModule, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatCheckboxModule, MatCheckbox, MatButtonModule, MatButton],
  styles: [".container[_ngcontent-%COMP%]{width:min-content}.action-buttons[_ngcontent-%COMP%]{display:flex}.button-delete[_ngcontent-%COMP%], .button-ok[_ngcontent-%COMP%]{flex:1}"]
});
var StateEditDialogComponent = _StateEditDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateEditDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-state-edit-dialog",
      standalone: true,
      imports: [MatIcon, CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatTableModule, MatDialogModule, MatCheckboxModule, MatButtonModule],
      template: '<div class="container">\n    <h3 mat-dialog-title>Zustand {{ data.name }} bearbeiten</h3>\n    <div mat-dialog-content>\n        <form>\n            <mat-form-field>\n                <mat-label>Zustandsname</mat-label>\n                <input title="Zustandsname" matInput type="text" autocomplete="off" value="{{ data.name }}"\n                    [(ngModel)]="data.name" maxlength="12" name="stateName-input" (keydown.enter)="onEnter()">\n            </mat-form-field>\n            <section>\n                <mat-checkbox (change)="toggleStart($event.checked)" [checked]="isStartState()" name="startState">\n                    Startzustand\n                </mat-checkbox>\n                <br />\n                <mat-checkbox (change)="toggleFinal($event.checked)" [checked]="isFinalState()" name="endState">\n                    Endzustand\n                </mat-checkbox>\n            </section>\n        </form>\n\n        <div class="action-buttons" mat-dialog-actions>\n            <button mat-stroked-button [mat-dialog-close]="" (click)="deleteState()" class="button-delete" color="warn">\n                Löschen\n            </button>\n    \n            <button mat-stroked-button [mat-dialog-close]="" class="button-ok">\n                Ok\n            </button>\n        </div>\n    </div>\n    \n</div>',
      styles: [".container{width:min-content}.action-buttons{display:flex}.button-delete,.button-ok{flex:1}\n"]
    }]
  }], () => [{
    type: StatemachineService
  }, {
    type: MatDialogRef
  }, {
    type: State,
    decorators: [{
      type: Inject,
      args: [MAT_DIALOG_DATA]
    }]
  }], null);
})();
var State = class _State {
  get x() {
    return this.origin.x;
  }
  set x(x) {
    this.origin.x = x;
  }
  get y() {
    return this.origin.y;
  }
  set y(y) {
    this.origin.y = y;
  }
  static get circleRadius() {
    return 30;
  }
  get r() {
    return _State.circleRadius;
  }
  static get innerCircleRadius() {
    return _State.circleRadius / 2;
  }
  constructor(origin, id) {
    this.innerCircleHovered = false;
    this.outerCircleHovered = false;
    this.highlight = false;
    this.origin = origin;
    this.name = `S${id}`;
    this.id = id;
  }
  getConnectionPointToState(destination) {
    return destination.origin.moveToPoint(this.origin, _State.circleRadius);
  }
  hasConnectionTo(state2) {
    return [...this.transitions].some((transition2) => {
      return transition2.destination === state2;
    });
  }
  getTransitionTo(state2) {
    return [...this.transitions].find((transition2) => transition2.destination === state2);
  }
  toJSON() {
    return {
      id: this.id,
      origin: this.origin,
      name: this.name,
      transitions: this.transitions
    };
  }
  openEditDialog(dialog) {
    return dialog.open(StateEditDialogComponent, {
      data: this
    });
  }
  addTransition(destination) {
    let transition2 = [...this.transitions].find((transition3) => transition3.destination == destination);
    if (transition2 == void 0) {
      transition2 = this.makeTransition(destination);
      this.transitions = [...this.transitions, transition2];
    }
    return transition2;
  }
};
var StateMachineViewState = class {
  get boundary() {
    return this.statemachineviewComponent.svgFieldElementRef.nativeElement.getBoundingClientRect();
  }
  constructor(statemachineviewComponent) {
    this.statemachineviewComponent = statemachineviewComponent;
  }
  changeState(state2) {
    this.statemachineviewComponent.changeState(state2);
  }
  onMouseDown(event) {
  }
  onMouseUp(event) {
  }
  onMouseMove(event) {
  }
  onInnerCircleMouseDown(event, state2) {
  }
  onInnerCircleMouseUp(event, state2) {
  }
  onOuterCircleMouseDown(event, state2) {
  }
  onOuterCircleMouseUp(event, state2) {
  }
  onEntireCircleMouseDown(event, state2) {
  }
  onEntireCircleMouseUp(event, state2) {
  }
  onCircleEnter(event, state2) {
  }
  onCircleLeave(event, state2) {
  }
  onInnerCircleEnter(event, state2) {
  }
  onInnerCircleLeave(event, state2) {
  }
  onOuterCircleEnter(event, state2) {
  }
  onOuterCircleLeave(event, state2) {
  }
  onAdjustableCircleMouseDown(event, transition2) {
  }
  onAdjustableCircleMouseUp(event, transition2) {
  }
  showStartConnection(state2) {
    return false;
  }
  showEndConnection(state2) {
    return false;
  }
  showDrawingTransition() {
    return false;
  }
  drawingTransitionOrigin() {
    return Point.zero;
  }
  drawingTransitionDestination() {
    return Point.zero;
  }
};
var MoveNodeState = class extends StateMachineViewState {
  set movingStateX(value) {
    this.statemachineviewComponent.zone.run(() => this.movingState.x = value);
  }
  set movingStateY(value) {
    this.statemachineviewComponent.zone.run(() => this.movingState.y = value);
  }
  constructor(statemachineviewComponent, movingState) {
    super(statemachineviewComponent);
    this.movingState = movingState;
  }
  onMouseUp(event) {
    this.movingState.innerCircleHovered = false;
    this.statemachineviewComponent.changeState(new DefaultState(this.statemachineviewComponent));
  }
  onMouseMove(event) {
    const boundary = this.boundary;
    if (event.x > boundary.left + State.circleRadius && event.x < boundary.right - State.circleRadius) {
      this.movingStateX = event.clientX - boundary.left;
    }
    if (event.y > boundary.top + State.circleRadius && event.y < boundary.bottom - State.circleRadius) {
      this.movingStateY = event.clientY - boundary.top;
    }
  }
};
var TransitionEditState = class extends StateMachineViewState {
  constructor(statemachineviewComponent, transitionFrom, transitionTo, dummyTransition) {
    super(statemachineviewComponent);
    this.transitionFrom = transitionFrom;
    this.transitionTo = transitionTo;
    this.dummyTransition = dummyTransition;
    const transitionState = new DefaultState(this.statemachineviewComponent);
    const dialogRef = this.statemachineviewComponent.statemachineService.openTransitionEditDialog(this.transitionFrom, this.transitionTo, this.statemachineviewComponent.dialog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dummyTransition.delete();
      }
      this.statemachineviewComponent.changeState(transitionState);
      this.transitionFrom.outerCircleHovered = false;
      this.transitionTo.outerCircleHovered = false;
      this.transitionTo.outerCircleHovered = false;
    });
  }
  onMouseUp(event) {
  }
  onCircleLeave(event, state2) {
  }
  showDrawingTransition() {
    return false;
  }
  showStartConnection(state2) {
    return this.transitionFrom === state2;
  }
  showEndConnection(state2) {
    return this.transitionTo === state2;
  }
};
var TransitionToState = class extends StateMachineViewState {
  constructor(statemachineviewComponent, transitionFrom, transitionTo) {
    super(statemachineviewComponent);
    this.transitionFrom = transitionFrom;
    this.transitionTo = transitionTo;
    this.dummyTransition = transitionFrom.addTransition(transitionTo);
  }
  onMouseUp(event) {
    const transitionState = new TransitionEditState(this.statemachineviewComponent, this.transitionFrom, this.transitionTo, this.dummyTransition);
    this.statemachineviewComponent.changeState(transitionState);
  }
  onCircleLeave(event, state2) {
    if (this.dummyTransition.isEmpty()) {
      this.dummyTransition.delete();
    }
    const transitionState = new TransitionFromState(this.statemachineviewComponent, this.transitionFrom);
    this.statemachineviewComponent.changeState(transitionState);
  }
  showStartConnection(state2) {
    return this.transitionFrom === state2;
  }
  showEndConnection(state2) {
    return this.transitionTo === state2;
  }
};
var TransitionNewStateEditState = class extends StateMachineViewState {
  constructor(statemachineviewComponent, transitionFrom, transitionTo) {
    super(statemachineviewComponent);
    this.transitionFrom = transitionFrom;
    this.transitionTo = transitionTo;
    this.dummyTransition = transitionFrom.addTransition(transitionTo);
    const dialogRef = this.statemachineviewComponent.statemachineService.openTransitionEditDialog(this.transitionFrom, this.transitionTo, this.statemachineviewComponent.dialog);
    dialogRef.afterClosed().subscribe((transitionIsEmpty) => {
      if (transitionIsEmpty) {
        this.statemachineviewComponent.statemachineService.deleteState(this.transitionTo);
      }
      this.transitionFrom.outerCircleHovered = false;
      this.transitionTo.outerCircleHovered = false;
      this.transitionTo.innerCircleHovered = false;
      this.statemachineviewComponent.changeState(new DefaultState(this.statemachineviewComponent));
    });
  }
  showStartConnection(state2) {
    return this.transitionFrom === state2;
  }
  showEndConnection(state2) {
    return this.transitionTo === state2;
  }
};
var TransitionFromState = class extends StateMachineViewState {
  constructor(statemachineviewComponent, transitionFrom) {
    super(statemachineviewComponent);
    this.drawingDestination = Point.zero;
    this.transitionFrom = transitionFrom;
  }
  onMouseUp(event) {
    const newState = this.statemachineviewComponent.statemachineService.addState(this.drawingDestination.x, this.drawingDestination.y);
    const transitionState = new TransitionNewStateEditState(this.statemachineviewComponent, this.transitionFrom, newState);
    this.statemachineviewComponent.changeState(transitionState);
  }
  onEntireCircleMouseDown(event, state2) {
    const boundary = this.boundary;
    this.drawingDestination.x = event.clientX - boundary.left;
    this.drawingDestination.y = event.clientY - boundary.top;
  }
  onCircleEnter(event, state2) {
    const transitionToState = new TransitionToState(this.statemachineviewComponent, this.transitionFrom, state2);
    this.changeState(transitionToState);
  }
  onEntireCircleMouseUp(event, state2) {
    this.statemachineviewComponent.changeState(new DefaultState(this.statemachineviewComponent));
  }
  onMouseMove(event) {
    const boundary = this.boundary;
    this.drawingDestination.x = event.clientX - boundary.left;
    this.drawingDestination.y = event.clientY - boundary.top;
  }
  drawingTransitionOrigin() {
    return this.transitionFrom.origin;
  }
  drawingTransitionDestination() {
    return this.drawingDestination.moveToPoint(this.transitionFrom.origin, Arrow.transition.width * 2);
  }
  showStartConnection(state2) {
    return this.transitionFrom === state2;
  }
  showDrawingTransition() {
    return true;
  }
};
var MoveTransitionState = class extends StateMachineViewState {
  constructor(statemachineviewComponent, transition2) {
    super(statemachineviewComponent);
    this.transition = transition2;
  }
  onMouseMove(event) {
    const svgElement = this.statemachineviewComponent.svgFieldElementRef.nativeElement;
    const svgRect = svgElement.getBoundingClientRect();
    const newX = event.clientX - svgRect.left;
    const newY = event.clientY - svgRect.top;
    this.transition.centerPoint = new Point(newX, newY);
  }
  onMouseUp(event) {
    const defaultState = new DefaultState(this.statemachineviewComponent);
    this.statemachineviewComponent.changeState(defaultState);
  }
  onAdjustableCircleMouseUp(event, transition2) {
    const defaultState = new DefaultState(this.statemachineviewComponent);
    this.statemachineviewComponent.changeState(defaultState);
  }
};
var DefaultState = class extends StateMachineViewState {
  onInnerCircleMouseDown(event, state2) {
    state2.innerCircleHovered = true;
    const moveNodeState = new MoveNodeState(this.statemachineviewComponent, state2);
    this.statemachineviewComponent.changeState(moveNodeState);
  }
  onOuterCircleMouseDown(event, state2) {
    const transitionState = new TransitionFromState(this.statemachineviewComponent, state2);
    this.statemachineviewComponent.changeState(transitionState);
  }
  onInnerCircleEnter(event, state2) {
    this.statemachineviewComponent.zone.run(() => state2.innerCircleHovered = true);
  }
  onInnerCircleLeave(event, state2) {
    this.statemachineviewComponent.zone.run(() => state2.innerCircleHovered = false);
  }
  onOuterCircleEnter(event, state2) {
    this.statemachineviewComponent.zone.run(() => state2.outerCircleHovered = true);
  }
  onOuterCircleLeave(event, state2) {
    this.statemachineviewComponent.zone.run(() => state2.outerCircleHovered = false);
  }
  onAdjustableCircleMouseDown(event, transition2) {
    const moveTransitionState = new MoveTransitionState(this.statemachineviewComponent, transition2);
    this.statemachineviewComponent.changeState(moveTransitionState);
  }
};
var _StatemachineviewComponent = class _StatemachineviewComponent {
  constructor(statemachineService, dialog, zone) {
    this.statemachineService = statemachineService;
    this.dialog = dialog;
    this.zone = zone;
    this.START_TRANSITION_ARROW_LENGTH = 55;
    this.ARROW_LENGTH = 5;
    this.circleRadius = State.circleRadius;
    this.stateMachineViewState = new DefaultState(this);
  }
  get outerCircleRadius() {
    return this.circleRadius + 15;
  }
  ngOnInit() {
    this.addEventListeners();
  }
  ngOnDestroy() {
    this.removeEventListeners();
  }
  onRightClick(event) {
    event.preventDefault();
  }
  addEventListeners() {
    this.mouseMoveListener = this.onMouseMove.bind(this);
    document.addEventListener("mousemove", this.mouseMoveListener);
    this.mouseUpListener = this.onMouseUp.bind(this);
    document.addEventListener("mouseup", this.mouseUpListener);
  }
  removeEventListeners() {
    document.removeEventListener("mousemove", this.mouseMoveListener);
    document.removeEventListener("mouseup", this.mouseUpListener);
  }
  onMouseMove(event) {
    this.stateMachineViewState.onMouseMove(event);
  }
  onMouseUp(event) {
    this.stateMachineViewState.onMouseUp(event);
  }
  onInnerCircleMouseDown(event, state2) {
    this.stateMachineViewState.onInnerCircleMouseDown(event, state2);
  }
  onInnerCircleMouseUp(event, state2) {
    this.stateMachineViewState.onInnerCircleMouseUp(event, state2);
  }
  onOuterCircleMouseDown(event, state2) {
    this.stateMachineViewState.onOuterCircleMouseDown(event, state2);
  }
  onOuterCircleMouseUp(event, state2) {
    this.stateMachineViewState.onOuterCircleMouseUp(event, state2);
  }
  onEntireCircleMouseDown(event, state2) {
    this.stateMachineViewState.onEntireCircleMouseDown(event, state2);
  }
  onEntireCircleMouseUp(event, state2) {
    this.stateMachineViewState.onEntireCircleMouseUp(event, state2);
  }
  onCircleEnter(event, state2) {
    this.stateMachineViewState.onCircleEnter(event, state2);
  }
  onCircleLeave(event, state2) {
    this.stateMachineViewState.onCircleLeave(event, state2);
  }
  onInnerCircleEnter(event, state2) {
    this.stateMachineViewState.onInnerCircleEnter(event, state2);
  }
  onInnerCircleLeave(event, state2) {
    this.stateMachineViewState.onInnerCircleLeave(event, state2);
  }
  onOuterCircleEnter(event, state2) {
    this.stateMachineViewState.onOuterCircleEnter(event, state2);
  }
  onOuterCircleLeave(event, state2) {
    this.stateMachineViewState.onOuterCircleLeave(event, state2);
  }
  onAdjustableCircleMouseDown(event, transition2) {
    this.stateMachineViewState.onAdjustableCircleMouseDown(event, transition2);
  }
  onAdjustableCircleMouseUp(event, transition2) {
    this.stateMachineViewState.onAdjustableCircleMouseUp(event, transition2);
  }
  /// Returns true, if the transition from the given state is currently being drawn.
  showStartConnection(state2) {
    return this.stateMachineViewState.showStartConnection(state2);
  }
  /// Returns true, if the transition to the given state is currently being drawn.
  showEndConnection(state2) {
    return this.stateMachineViewState.showEndConnection(state2);
  }
  showDrawingTransition() {
    return this.stateMachineViewState.showDrawingTransition();
  }
  drawingTransitionOrigin() {
    return this.stateMachineViewState.drawingTransitionOrigin();
  }
  drawingTransitionDestination() {
    return this.stateMachineViewState.drawingTransitionDestination();
  }
  get arrow() {
    return Arrow.transition;
  }
  get transitions() {
    return this.statemachineService.transitions;
  }
  editTransition(transition2, event) {
    event.preventDefault();
    const source = transition2.source;
    const destination = transition2.destination;
    const dialogRef = this.statemachineService.openTransitionEditDialog(source, destination, this.dialog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        transition2.delete();
      }
    });
  }
  openStateEditDialog(state2, event) {
    event.preventDefault();
    this.statemachineService.openStateEditDialog(state2, this.dialog);
  }
  drawState(event) {
    const x = event.clientX - event.target.getBoundingClientRect().left;
    const y = event.clientY - event.target.getBoundingClientRect().top;
    this.statemachineService.addState(x, y);
  }
  getStates() {
    return this.statemachineService.states;
  }
  isFinalState(state2) {
    return this.statemachineService.isFinalState(state2);
  }
  isStartState(state2) {
    return this.statemachineService.isStartState(state2);
  }
  isActiveState(state2) {
    return this.statemachineService.isActiveState(state2);
  }
  get showDeterministicStates() {
    return this.statemachineService.showDeterministicStates;
  }
  changeState(state2) {
    this.stateMachineViewState = state2;
  }
};
_StatemachineviewComponent.ɵfac = function StatemachineviewComponent_Factory(t) {
  return new (t || _StatemachineviewComponent)(ɵɵdirectiveInject(StatemachineService), ɵɵdirectiveInject(MatDialog), ɵɵdirectiveInject(NgZone));
};
_StatemachineviewComponent.ɵcmp = ɵɵdefineComponent({
  type: _StatemachineviewComponent,
  selectors: [["app-statemachineview"]],
  viewQuery: function StatemachineviewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.svgFieldElementRef = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 10,
  vars: 8,
  consts: [["id", "svg-field"], ["svgField", ""], ["id", "startStateArrowHead", "markerWidth", "10", "markerHeight", "7", "refX", "6", "refY", "2.5", "orient", "auto", "fill", "black"], ["points", "0 0, 7.5 2.5, 0 5"], ["width", "100%", "height", "100%", "fill", "transparent", 3, "dblclick"], ["marker-end", "url(#arrowhead)", "stroke", "black", "style", "stroke-width: 2px;", 4, "ngIf"], ["id", "arrowhead", "orient", "auto", "fill", "black", "markerUnits", "userSpaceOnUse"], [4, "ngFor", "ngForOf"], ["marker-end", "url(#arrowhead)", "stroke", "black", 2, "stroke-width", "2px"], [3, "ngClass", 4, "ngIf"], [3, "mouseup", "mousedown", "mouseenter", "mouseleave"], [3, "ngClass", "mouseup", "mousedown", "mouseenter", "mouseleave"], [4, "ngIf"], [3, "ngClass", "mouseup", "mousedown", "mouseenter", "mouseleave", "contextmenu"], ["text-anchor", "middle", "dominant-baseline", "middle"], ["marker-end", "url(#startStateArrowHead)", 4, "ngIf"], [3, "ngClass"], ["marker-end", "url(#startStateArrowHead)"], ["fill", "black"], ["fill", "none", "stroke", "black", "stroke-width", "2", 3, "mousedown", "mouseup"], ["fill", "none", "stroke", "black", "stroke-width", "2", 1, "invisiblePathClickable", 3, "id", "contextmenu", "mousedown", "mouseup"], ["class", "highlightPath", "fill", "none", 3, "id", "contextmenu", "mousedown", "mouseup", 4, "ngIf"], ["dominant-baseline", "middle", "text-anchor", "start", 4, "ngFor", "ngForOf"], ["fill", "none", 1, "highlightPath", 3, "id", "contextmenu", "mousedown", "mouseup"], ["dominant-baseline", "middle", "text-anchor", "start"]],
  template: function StatemachineviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0, 1)(2, "marker", 2);
      ɵɵelement(3, "polygon", 3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "rect", 4);
      ɵɵlistener("dblclick", function StatemachineviewComponent_Template__svg_rect_dblclick_4_listener($event) {
        return ctx.drawState($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(5, StatemachineviewComponent__svg_line_5_Template, 1, 4, "line", 5);
      ɵɵelementStart(6, "marker", 6);
      ɵɵelement(7, "polygon");
      ɵɵelementEnd();
      ɵɵtemplate(8, StatemachineviewComponent__svg_g_8_Template, 10, 21, "g", 7)(9, StatemachineviewComponent__svg_g_9_Template, 6, 6, "g", 7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.showDrawingTransition());
      ɵɵadvance();
      ɵɵattribute("markerWidth", ctx.arrow.width)("markerHeight", ctx.arrow.height)("refX", ctx.arrow.refX)("refY", ctx.arrow.refY);
      ɵɵadvance();
      ɵɵattribute("points", ctx.arrow.path());
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.getStates());
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.transitions);
    }
  },
  dependencies: [CommonModule, NgClass, NgForOf, NgIf],
  styles: ["[_nghost-%COMP%]{position:relative}#svg-field[_ngcontent-%COMP%]{width:100%;height:100%}.toggleTestcaseView[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;cursor:pointer}.innerCircle[_ngcontent-%COMP%]{cursor:grab;stroke:transparent;fill:#fff}.outerCircle[_ngcontent-%COMP%]{stroke-width:2px;stroke:#000;fill:#fff}.isActive[_ngcontent-%COMP%]{fill:#34ec34}.startConnection[_ngcontent-%COMP%], .endConnection[_ngcontent-%COMP%]{fill:green}text[_ngcontent-%COMP%]{pointer-events:none;-webkit-user-select:none;user-select:none}.transition-midpoint-indicator[_ngcontent-%COMP%]{opacity:0}.transition-midpoint-indicator.visible[_ngcontent-%COMP%]{opacity:1}.invisiblePathClickable[_ngcontent-%COMP%]{stroke:green;opacity:0;stroke-width:10px;cursor:move}.invisiblePathClickable[_ngcontent-%COMP%]:hover, .highlightPath[_ngcontent-%COMP%]{stroke:green;opacity:.5;stroke-width:10px}line[_ngcontent-%COMP%]{pointer-events:none;stroke:#000;stroke-width:3px}circle[_ngcontent-%COMP%]{stroke:#000;stroke-width:2px}.deterministic[_ngcontent-%COMP%]{fill:brown;stroke-width:0px;opacity:50%}.highlightState[_ngcontent-%COMP%]{fill:green;stroke-width:0px;opacity:50%}.sticky-header[_ngcontent-%COMP%]{position:sticky;top:0;left:0;right:0;z-index:1000;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 4px 8px #0000001a}"]
});
var StatemachineviewComponent = _StatemachineviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatemachineviewComponent, [{
    type: Component,
    args: [{
      selector: "app-statemachineview",
      standalone: true,
      imports: [CommonModule],
      template: `<svg id="svg-field" #svgField>

    <marker
    id="startStateArrowHead"
    markerWidth="10"
    markerHeight="7"
    refX="6"
    refY="2.5"
    orient="auto"
    fill="black"
    >
    <polygon points="0 0, 7.5 2.5, 0 5" />
    </marker>

    <!-- Responds to double-click events on empty canvas areas -->
    <rect width="100%" height="100%" fill="transparent" (dblclick)="drawState($event)"></rect>

    <!-- Draw straight arrow from one point to another if a transition is being drawn -->
    <line
    *ngIf="showDrawingTransition()"
    [attr.x1]="drawingTransitionOrigin().x"
    [attr.y1]="drawingTransitionOrigin().y"
    [attr.x2]="drawingTransitionDestination().x"
    [attr.y2]="drawingTransitionDestination().y"
    marker-end="url(#arrowhead)"
    stroke="black"
    style="stroke-width: 2px;"
    ></line>

    <marker
            id="arrowhead"
            [attr.markerWidth]="arrow.width"
            [attr.markerHeight]="arrow.height"
            [attr.refX]="arrow.refX"
            [attr.refY]="arrow.refY"
            orient="auto"
            fill="black"
            markerUnits="userSpaceOnUse"
    >
        <polygon [attr.points]="arrow.path()" />
    </marker>

    <g *ngFor="let state of getStates()">
        <circle
        *ngIf="(!state.isDeterministic() && showDeterministicStates) || state.highlight"
        [ngClass]="{
            'deterministic': !state.isDeterministic() && showDeterministicStates,
            'highlightState': state.highlight
          }"
        [attr.r]="outerCircleRadius"
        [attr.cx]="state.origin.x"
        [attr.cy]="state.origin.y"
        />

        <g
        (mouseup)="onEntireCircleMouseUp($event, state)"
        (mousedown)="onEntireCircleMouseDown($event, state)"
        (mouseenter)="onCircleEnter($event, state)"
        (mouseleave)="onCircleLeave($event, state)"
        >
            <g
            [ngClass]="{
                outerCircle: true,
                isActive: isActiveState(state),
                startConnection: showStartConnection(state) || state.outerCircleHovered,
                endConnection: showEndConnection(state)
            }"
            (mouseup)="onOuterCircleMouseUp($event, state)"
            (mousedown)="onOuterCircleMouseDown($event, state)"
            (mouseenter)="onOuterCircleEnter($event, state)"
            (mouseleave)="onOuterCircleLeave($event, state)"
            >
                <circle
                [attr.cx]="state.x"
                [attr.cy]="state.y"
                [attr.r]="state.r">
                </circle>

                <circle
                *ngIf="isFinalState(state)"
                [attr.r]="state.r - 5"
                [attr.cx]="state.x"
                [attr.cy]="state.y">
                </circle>
            </g>

            <circle
            [ngClass]="{
                innerCircle: true,
                isActive: isActiveState(state),
                endConnection: showEndConnection(state) || state.innerCircleHovered
            }"
            [attr.cx]="state.x"
            [attr.cy]="state.y"
            [attr.r]="state.r * 0.5"
            (mouseup)="onInnerCircleMouseUp($event, state)"
            (mousedown)="onInnerCircleMouseDown($event, state)"
            (mouseenter)="onInnerCircleEnter($event, state)"
            (mouseleave)="onInnerCircleLeave($event, state)"
            (contextmenu)="openStateEditDialog(state, $event)"
            >
            </circle>
        </g>

        <text
        text-anchor="middle"
        dominant-baseline="middle"
        [attr.x]="state.x"
        [attr.y]="state.y"
        >
        {{ state.name }}
        </text>

        <line
        *ngIf="isStartState(state)"
        [attr.x1]="state.origin.x - state.r - START_TRANSITION_ARROW_LENGTH"
        [attr.x2]="state.origin.x - state.r - ARROW_LENGTH"
        [attr.y1]="state.origin.y"
        [attr.y2]="state.origin.y"
        marker-end="url(#startStateArrowHead)"
        ></line>
    </g>

    <g *ngFor="let transition of transitions; let i = index">

        <path
            [attr.d]="transition.arrow()"
            fill="black"
        ></path>

        <path
            [attr.d]="transition.path()"
            fill="none"
            stroke="black"
            stroke-width="2"
            (mousedown)="onAdjustableCircleMouseDown($event, transition)"
            (mouseup)="onAdjustableCircleMouseUp($event, transition)"
        ></path>

        <path
            class="invisiblePathClickable"
            fill="none"
            stroke="black"
            stroke-width="2"
            [attr.d]="transition.path()"
            [id]="'transition'+ i"
            (contextmenu)="editTransition(transition, $event)"
            (mousedown)="onAdjustableCircleMouseDown($event, transition)"
            (mouseup)="onAdjustableCircleMouseUp($event, transition)"
        ></path>

        <path *ngIf="transition.highlight"
              class="highlightPath"
          fill="none"
          [attr.d]="transition.path()"
          [id]="'transition'+ i"
          (contextmenu)="editTransition(transition, $event)"
          (mousedown)="onAdjustableCircleMouseDown($event, transition)"
          (mouseup)="onAdjustableCircleMouseUp($event, transition)"
        ></path>

        <text
            *ngFor="let label of transition.labels(); let j = index"
            [attr.x]="label.x"
            [attr.y]="label.y"
            [attr.font-family]="transition.fontFamily"
            [attr.font-size]="transition.fontSize"
            dominant-baseline="middle"
            text-anchor="start"
            >
            {{ label.text }}
        </text>
    </g>
</svg>



`,
      styles: [":host{position:relative}#svg-field{width:100%;height:100%}.toggleTestcaseView{position:absolute;top:10px;right:10px;cursor:pointer}.innerCircle{cursor:grab;stroke:transparent;fill:#fff}.outerCircle{stroke-width:2px;stroke:#000;fill:#fff}.isActive{fill:#34ec34}.startConnection,.endConnection{fill:green}text{pointer-events:none;-webkit-user-select:none;user-select:none}.transition-midpoint-indicator{opacity:0}.transition-midpoint-indicator.visible{opacity:1}.invisiblePathClickable{stroke:green;opacity:0;stroke-width:10px;cursor:move}.invisiblePathClickable:hover,.highlightPath{stroke:green;opacity:.5;stroke-width:10px}line{pointer-events:none;stroke:#000;stroke-width:3px}circle{stroke:#000;stroke-width:2px}.deterministic{fill:brown;stroke-width:0px;opacity:50%}.highlightState{fill:green;stroke-width:0px;opacity:50%}.sticky-header{position:sticky;top:0;left:0;right:0;z-index:1000;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 4px 8px #0000001a}\n"]
    }]
  }], () => [{
    type: StatemachineService
  }, {
    type: MatDialog
  }, {
    type: NgZone
  }], {
    svgFieldElementRef: [{
      type: ViewChild,
      args: ["svgField"]
    }]
  });
})();
var _CoreComponent = class _CoreComponent {
};
_CoreComponent.ɵfac = function CoreComponent_Factory(t) {
  return new (t || _CoreComponent)();
};
_CoreComponent.ɵcmp = ɵɵdefineComponent({
  type: _CoreComponent,
  selectors: [["app-core"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [[1, "graph"]],
  template: function CoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "app-statemachineview", 0);
    }
  },
  dependencies: [StatemachineviewComponent],
  styles: ["[_nghost-%COMP%]{flex-grow:1;display:flex}.graph[_ngcontent-%COMP%]{flex-grow:1;flex-basis:0;min-width:500px}"]
});
var CoreComponent = _CoreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoreComponent, [{
    type: Component,
    args: [{
      selector: "app-core",
      standalone: true,
      imports: [StatemachineviewComponent],
      template: '<app-statemachineview class="graph"></app-statemachineview>',
      styles: [":host{flex-grow:1;display:flex}.graph{flex-grow:1;flex-basis:0;min-width:500px}\n"]
    }]
  }], null, null);
})();
var _FooterComponent = class _FooterComponent {
  getCurrentYear(startYear) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return startYear == currentYear ? currentYear + "" : startYear + " - " + currentYear;
  }
};
_FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _FooterComponent,
  selectors: [["app-footer"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 14,
  vars: 1,
  consts: [[1, "wh-text"], [1, "infoLinks"], ["href", "https://www.w-hs.de/service/impressum/", "target", "_blank"], ["href", "https://pi-lab2.w-hs.de/THI/Datenschutz.html", "target", "_blank"], ["href", "https://pi-lab2.w-hs.de/THI/Barrierefreiheit.html", "target", "_blank"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "footer")(1, "span")(2, "span");
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "span", 0);
      ɵɵtext(5, "Westfälische Hochschule");
      ɵɵelementEnd();
      ɵɵtext(6, " Gelsenkirchen");
      ɵɵelementEnd();
      ɵɵelementStart(7, "span", 1)(8, "a", 2);
      ɵɵtext(9, "Impressum");
      ɵɵelementEnd();
      ɵɵelementStart(10, "a", 3);
      ɵɵtext(11, "Datenschutz");
      ɵɵelementEnd();
      ɵɵelementStart(12, "a", 4);
      ɵɵtext(13, "Barrierefreiheit");
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵtextInterpolate1("© ", ctx.getCurrentYear(2023), "");
    }
  },
  styles: ['.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale3d(0,0,0);background-color:var(--mat-ripple-color, rgba(0, 0, 0, .1))}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%]{left:auto;right:0}.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:#00000052}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%]{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%]{transition:none}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:0!important}@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start{}@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{animation:_ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){animation:_ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms}.mat-focus-indicator[_ngcontent-%COMP%]{position:relative}.mat-focus-indicator[_ngcontent-%COMP%]:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border:var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator[_ngcontent-%COMP%]:focus:before{content:""}.cdk-high-contrast-active[_ngcontent-%COMP%]{--mat-focus-indicator-display: block}.mat-mdc-focus-indicator[_ngcontent-%COMP%]{position:relative}.mat-mdc-focus-indicator[_ngcontent-%COMP%]:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-mdc-focus-indicator-display, none);border:var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);border-radius:var(--mat-mdc-focus-indicator-border-radius, 4px)}.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus:before{content:""}.cdk-high-contrast-active[_ngcontent-%COMP%]{--mat-mdc-focus-indicator-display: block}.mat-app-background[_ngcontent-%COMP%]{background-color:var(--mat-app-background-color, transparent);color:var(--mat-app-text-color, inherit)}html[_ngcontent-%COMP%]{--mat-ripple-color: rgba(0, 0, 0, .1)}html[_ngcontent-%COMP%]{--mat-option-selected-state-label-text-color: #4caf50;--mat-option-label-text-color: rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color: rgba(0, 0, 0, .04)}.mat-accent[_ngcontent-%COMP%]{--mat-option-selected-state-label-text-color: #ff4081;--mat-option-label-text-color: rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color: rgba(0, 0, 0, .04)}.mat-warn[_ngcontent-%COMP%]{--mat-option-selected-state-label-text-color: #f44336;--mat-option-label-text-color: rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color: rgba(0, 0, 0, .04)}html[_ngcontent-%COMP%]{--mat-optgroup-label-text-color: rgba(0, 0, 0, .87)}.mat-primary[_ngcontent-%COMP%]{--mat-full-pseudo-checkbox-selected-icon-color: #4caf50;--mat-full-pseudo-checkbox-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mat-full-pseudo-checkbox-disabled-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-disabled-unselected-icon-color: #b0b0b0;--mat-full-pseudo-checkbox-disabled-selected-icon-color: #b0b0b0;--mat-minimal-pseudo-checkbox-selected-checkmark-color: #4caf50;--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: #b0b0b0}html[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]{--mat-full-pseudo-checkbox-selected-icon-color: #ff4081;--mat-full-pseudo-checkbox-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mat-full-pseudo-checkbox-disabled-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-disabled-unselected-icon-color: #b0b0b0;--mat-full-pseudo-checkbox-disabled-selected-icon-color: #b0b0b0;--mat-minimal-pseudo-checkbox-selected-checkmark-color: #ff4081;--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: #b0b0b0}.mat-warn[_ngcontent-%COMP%]{--mat-full-pseudo-checkbox-selected-icon-color: #f44336;--mat-full-pseudo-checkbox-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mat-full-pseudo-checkbox-disabled-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-disabled-unselected-icon-color: #b0b0b0;--mat-full-pseudo-checkbox-disabled-selected-icon-color: #b0b0b0;--mat-minimal-pseudo-checkbox-selected-checkmark-color: #f44336;--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: #b0b0b0}html[_ngcontent-%COMP%]{--mat-app-background-color: #fafafa;--mat-app-text-color: rgba(0, 0, 0, .87)}.mat-elevation-z0[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-elevation-z1[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.mat-elevation-z2[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-elevation-z3[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.mat-elevation-z4[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-elevation-z5[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.mat-elevation-z6[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mat-elevation-z7[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.mat-elevation-z8[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-elevation-z9[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.mat-elevation-z10[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.mat-elevation-z11[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.mat-elevation-z12[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-elevation-z13[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.mat-elevation-z14[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.mat-elevation-z15[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.mat-elevation-z16[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-elevation-z17[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.mat-elevation-z18[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.mat-elevation-z19[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.mat-elevation-z20[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.mat-elevation-z21[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.mat-elevation-z22[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.mat-elevation-z23[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.mat-elevation-z24[_ngcontent-%COMP%], .mat-mdc-elevation-specific.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}html[_ngcontent-%COMP%]{--mdc-elevated-card-container-shape: 4px;--mdc-outlined-card-container-shape: 4px;--mdc-outlined-card-outline-width: 1px}html[_ngcontent-%COMP%]{--mdc-elevated-card-container-color: white;--mdc-elevated-card-container-elevation: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-outlined-card-container-color: white;--mdc-outlined-card-outline-color: rgba(0, 0, 0, .12);--mdc-outlined-card-container-elevation: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mat-card-subtitle-text-color: rgba(0, 0, 0, .54)}html[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-height: 4px;--mdc-linear-progress-track-height: 4px;--mdc-linear-progress-track-shape: 0}.mat-mdc-progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #4caf50;--mdc-linear-progress-track-color: rgba(76, 175, 80, .25)}.mat-mdc-progress-bar.mat-accent[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #ff4081;--mdc-linear-progress-track-color: rgba(255, 64, 129, .25)}.mat-mdc-progress-bar.mat-warn[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #f44336;--mdc-linear-progress-track-color: rgba(244, 67, 54, .25)}html[_ngcontent-%COMP%]{--mdc-plain-tooltip-container-shape: 4px;--mdc-plain-tooltip-supporting-text-line-height: 16px}html[_ngcontent-%COMP%]{--mdc-plain-tooltip-container-color: #616161;--mdc-plain-tooltip-supporting-text-color: #fff}html[_ngcontent-%COMP%]{--mdc-filled-text-field-active-indicator-height: 1px;--mdc-filled-text-field-focus-active-indicator-height: 2px;--mdc-filled-text-field-container-shape: 4px;--mdc-outlined-text-field-outline-width: 1px;--mdc-outlined-text-field-focus-outline-width: 2px;--mdc-outlined-text-field-container-shape: 4px}html[_ngcontent-%COMP%]{--mdc-filled-text-field-caret-color: #4caf50;--mdc-filled-text-field-focus-active-indicator-color: #4caf50;--mdc-filled-text-field-focus-label-text-color: rgba(76, 175, 80, .87);--mdc-filled-text-field-container-color: whitesmoke;--mdc-filled-text-field-disabled-container-color: #fafafa;--mdc-filled-text-field-label-text-color: rgba(0, 0, 0, .6);--mdc-filled-text-field-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-color: rgba(0, 0, 0, .87);--mdc-filled-text-field-disabled-input-text-color: rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-placeholder-color: rgba(0, 0, 0, .6);--mdc-filled-text-field-error-focus-label-text-color: #f44336;--mdc-filled-text-field-error-label-text-color: #f44336;--mdc-filled-text-field-error-caret-color: #f44336;--mdc-filled-text-field-active-indicator-color: rgba(0, 0, 0, .42);--mdc-filled-text-field-disabled-active-indicator-color: rgba(0, 0, 0, .06);--mdc-filled-text-field-hover-active-indicator-color: rgba(0, 0, 0, .87);--mdc-filled-text-field-error-active-indicator-color: #f44336;--mdc-filled-text-field-error-focus-active-indicator-color: #f44336;--mdc-filled-text-field-error-hover-active-indicator-color: #f44336;--mdc-outlined-text-field-caret-color: #4caf50;--mdc-outlined-text-field-focus-outline-color: #4caf50;--mdc-outlined-text-field-focus-label-text-color: rgba(76, 175, 80, .87);--mdc-outlined-text-field-label-text-color: rgba(0, 0, 0, .6);--mdc-outlined-text-field-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-color: rgba(0, 0, 0, .87);--mdc-outlined-text-field-disabled-input-text-color: rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-placeholder-color: rgba(0, 0, 0, .6);--mdc-outlined-text-field-error-caret-color: #f44336;--mdc-outlined-text-field-error-focus-label-text-color: #f44336;--mdc-outlined-text-field-error-label-text-color: #f44336;--mdc-outlined-text-field-outline-color: rgba(0, 0, 0, .38);--mdc-outlined-text-field-disabled-outline-color: rgba(0, 0, 0, .06);--mdc-outlined-text-field-hover-outline-color: rgba(0, 0, 0, .87);--mdc-outlined-text-field-error-focus-outline-color: #f44336;--mdc-outlined-text-field-error-hover-outline-color: #f44336;--mdc-outlined-text-field-error-outline-color: #f44336;--mat-form-field-focus-select-arrow-color: rgba(76, 175, 80, .87);--mat-form-field-disabled-input-text-placeholder-color: rgba(0, 0, 0, .38);--mat-form-field-state-layer-color: rgba(0, 0, 0, .87);--mat-form-field-error-text-color: #f44336;--mat-form-field-select-option-text-color: inherit;--mat-form-field-select-disabled-option-text-color: GrayText;--mat-form-field-enabled-select-arrow-color: rgba(0, 0, 0, .54);--mat-form-field-disabled-select-arrow-color: rgba(0, 0, 0, .38);--mat-form-field-hover-state-layer-opacity: .04;--mat-form-field-focus-state-layer-opacity: .12}.mat-mdc-form-field.mat-accent[_ngcontent-%COMP%]{--mdc-filled-text-field-caret-color: #ff4081;--mdc-filled-text-field-focus-active-indicator-color: #ff4081;--mdc-filled-text-field-focus-label-text-color: rgba(255, 64, 129, .87);--mdc-outlined-text-field-caret-color: #ff4081;--mdc-outlined-text-field-focus-outline-color: #ff4081;--mdc-outlined-text-field-focus-label-text-color: rgba(255, 64, 129, .87);--mat-form-field-focus-select-arrow-color: rgba(255, 64, 129, .87)}.mat-mdc-form-field.mat-warn[_ngcontent-%COMP%]{--mdc-filled-text-field-caret-color: #f44336;--mdc-filled-text-field-focus-active-indicator-color: #f44336;--mdc-filled-text-field-focus-label-text-color: rgba(244, 67, 54, .87);--mdc-outlined-text-field-caret-color: #f44336;--mdc-outlined-text-field-focus-outline-color: #f44336;--mdc-outlined-text-field-focus-label-text-color: rgba(244, 67, 54, .87);--mat-form-field-focus-select-arrow-color: rgba(244, 67, 54, .87)}html[_ngcontent-%COMP%]{--mat-form-field-container-height: 56px;--mat-form-field-filled-label-display: block;--mat-form-field-container-vertical-padding: 16px;--mat-form-field-filled-with-label-container-padding-top: 24px;--mat-form-field-filled-with-label-container-padding-bottom: 8px}html[_ngcontent-%COMP%]{--mat-select-panel-background-color: white;--mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);--mat-select-placeholder-text-color: rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);--mat-select-focused-arrow-color: rgba(76, 175, 80, .87);--mat-select-invalid-arrow-color: rgba(244, 67, 54, .87)}html[_ngcontent-%COMP%]   .mat-mdc-form-field.mat-accent[_ngcontent-%COMP%]{--mat-select-panel-background-color: white;--mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);--mat-select-placeholder-text-color: rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);--mat-select-focused-arrow-color: rgba(255, 64, 129, .87);--mat-select-invalid-arrow-color: rgba(244, 67, 54, .87)}html[_ngcontent-%COMP%]   .mat-mdc-form-field.mat-warn[_ngcontent-%COMP%]{--mat-select-panel-background-color: white;--mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);--mat-select-placeholder-text-color: rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);--mat-select-focused-arrow-color: rgba(244, 67, 54, .87);--mat-select-invalid-arrow-color: rgba(244, 67, 54, .87)}html[_ngcontent-%COMP%]{--mat-autocomplete-background-color: white}html[_ngcontent-%COMP%]{--mdc-dialog-container-elevation-shadow: 0px 11px 15px -7px rgba(0, 0, 0, .2), 0px 24px 38px 3px rgba(0, 0, 0, .14), 0px 9px 46px 8px rgba(0, 0, 0, .12);--mdc-dialog-container-shadow-color: #000;--mdc-dialog-container-shape: 4px}html[_ngcontent-%COMP%]{--mdc-dialog-container-color: white;--mdc-dialog-subhead-color: rgba(0, 0, 0, .87);--mdc-dialog-supporting-text-color: rgba(0, 0, 0, .6)}.mat-mdc-standard-chip[_ngcontent-%COMP%]{--mdc-chip-container-shape-family: rounded;--mdc-chip-container-shape-radius: 16px 16px 16px 16px;--mdc-chip-with-avatar-avatar-shape-family: rounded;--mdc-chip-with-avatar-avatar-shape-radius: 14px 14px 14px 14px;--mdc-chip-with-avatar-avatar-size: 28px;--mdc-chip-with-icon-icon-size: 18px}.mat-mdc-standard-chip[_ngcontent-%COMP%]{--mdc-chip-disabled-label-text-color: #212121;--mdc-chip-elevated-container-color: #e0e0e0;--mdc-chip-elevated-disabled-container-color: #e0e0e0;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: #212121;--mdc-chip-with-icon-icon-color: #212121;--mdc-chip-with-icon-disabled-icon-color: #212121;--mdc-chip-with-icon-selected-icon-color: #212121;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: #212121;--mdc-chip-with-trailing-icon-trailing-icon-color: #212121}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-primary[_ngcontent-%COMP%], .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-primary[_ngcontent-%COMP%]{--mdc-chip-disabled-label-text-color: rgba(0, 0, 0, .87);--mdc-chip-elevated-container-color: #4caf50;--mdc-chip-elevated-disabled-container-color: #4caf50;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: rgba(0, 0, 0, .87);--mdc-chip-with-icon-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-icon-disabled-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-icon-selected-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-trailing-icon-color: rgba(0, 0, 0, .87)}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-accent[_ngcontent-%COMP%], .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-accent[_ngcontent-%COMP%]{--mdc-chip-disabled-label-text-color: white;--mdc-chip-elevated-container-color: #ff4081;--mdc-chip-elevated-disabled-container-color: #ff4081;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: white;--mdc-chip-with-icon-icon-color: white;--mdc-chip-with-icon-disabled-icon-color: white;--mdc-chip-with-icon-selected-icon-color: white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: white;--mdc-chip-with-trailing-icon-trailing-icon-color: white}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-warn[_ngcontent-%COMP%], .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-warn[_ngcontent-%COMP%]{--mdc-chip-disabled-label-text-color: white;--mdc-chip-elevated-container-color: #f44336;--mdc-chip-elevated-disabled-container-color: #f44336;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: white;--mdc-chip-with-icon-icon-color: white;--mdc-chip-with-icon-disabled-icon-color: white;--mdc-chip-with-icon-selected-icon-color: white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: white;--mdc-chip-with-trailing-icon-trailing-icon-color: white}.mat-mdc-chip.mat-mdc-standard-chip[_ngcontent-%COMP%]{--mdc-chip-container-height: 32px}.mdc-switch[_ngcontent-%COMP%]{--mdc-switch-disabled-handle-opacity: .38;--mdc-switch-disabled-selected-icon-opacity: .38;--mdc-switch-disabled-track-opacity: .12;--mdc-switch-disabled-unselected-icon-opacity: .38;--mdc-switch-handle-height: 20px;--mdc-switch-handle-shape: 10px;--mdc-switch-handle-width: 20px;--mdc-switch-selected-icon-size: 18px;--mdc-switch-track-height: 14px;--mdc-switch-track-shape: 7px;--mdc-switch-track-width: 36px;--mdc-switch-unselected-icon-size: 18px;--mdc-switch-state-layer-size: 40px;--mdc-switch-selected-focus-state-layer-opacity: .12;--mdc-switch-selected-hover-state-layer-opacity: .04;--mdc-switch-selected-pressed-state-layer-opacity: .1;--mdc-switch-unselected-focus-state-layer-opacity: .12;--mdc-switch-unselected-hover-state-layer-opacity: .04;--mdc-switch-unselected-pressed-state-layer-opacity: .1}.mat-mdc-slide-toggle[_ngcontent-%COMP%]{--mdc-switch-selected-focus-state-layer-color: #43a047;--mdc-switch-selected-handle-color: #43a047;--mdc-switch-selected-hover-state-layer-color: #43a047;--mdc-switch-selected-pressed-state-layer-color: #43a047;--mdc-switch-selected-focus-handle-color: #1b5e20;--mdc-switch-selected-hover-handle-color: #1b5e20;--mdc-switch-selected-pressed-handle-color: #1b5e20;--mdc-switch-selected-focus-track-color: #81c784;--mdc-switch-selected-hover-track-color: #81c784;--mdc-switch-selected-pressed-track-color: #81c784;--mdc-switch-selected-track-color: #81c784;--mdc-switch-disabled-selected-handle-color: #424242;--mdc-switch-disabled-selected-icon-color: #fff;--mdc-switch-disabled-selected-track-color: #424242;--mdc-switch-disabled-unselected-handle-color: #424242;--mdc-switch-disabled-unselected-icon-color: #fff;--mdc-switch-disabled-unselected-track-color: #424242;--mdc-switch-handle-surface-color: var(--mdc-theme-surface, #fff);--mdc-switch-handle-elevation-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-switch-handle-shadow-color: black;--mdc-switch-disabled-handle-elevation-shadow: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mdc-switch-selected-icon-color: #fff;--mdc-switch-unselected-focus-handle-color: #212121;--mdc-switch-unselected-focus-state-layer-color: #424242;--mdc-switch-unselected-focus-track-color: #e0e0e0;--mdc-switch-unselected-handle-color: #616161;--mdc-switch-unselected-hover-handle-color: #212121;--mdc-switch-unselected-hover-state-layer-color: #424242;--mdc-switch-unselected-hover-track-color: #e0e0e0;--mdc-switch-unselected-icon-color: #fff;--mdc-switch-unselected-pressed-handle-color: #212121;--mdc-switch-unselected-pressed-state-layer-color: #424242;--mdc-switch-unselected-pressed-track-color: #e0e0e0;--mdc-switch-unselected-track-color: #e0e0e0;--mdc-form-field-label-text-color: rgba(0, 0, 0, .87)}.mat-mdc-slide-toggle[_ngcontent-%COMP%]   .mdc-switch--disabled[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{color:#00000061}.mat-mdc-slide-toggle.mat-accent[_ngcontent-%COMP%]{--mdc-switch-selected-focus-state-layer-color: #d81b60;--mdc-switch-selected-handle-color: #d81b60;--mdc-switch-selected-hover-state-layer-color: #d81b60;--mdc-switch-selected-pressed-state-layer-color: #d81b60;--mdc-switch-selected-focus-handle-color: #880e4f;--mdc-switch-selected-hover-handle-color: #880e4f;--mdc-switch-selected-pressed-handle-color: #880e4f;--mdc-switch-selected-focus-track-color: #f06292;--mdc-switch-selected-hover-track-color: #f06292;--mdc-switch-selected-pressed-track-color: #f06292;--mdc-switch-selected-track-color: #f06292}.mat-mdc-slide-toggle.mat-warn[_ngcontent-%COMP%]{--mdc-switch-selected-focus-state-layer-color: #e53935;--mdc-switch-selected-handle-color: #e53935;--mdc-switch-selected-hover-state-layer-color: #e53935;--mdc-switch-selected-pressed-state-layer-color: #e53935;--mdc-switch-selected-focus-handle-color: #b71c1c;--mdc-switch-selected-hover-handle-color: #b71c1c;--mdc-switch-selected-pressed-handle-color: #b71c1c;--mdc-switch-selected-focus-track-color: #e57373;--mdc-switch-selected-hover-track-color: #e57373;--mdc-switch-selected-pressed-track-color: #e57373;--mdc-switch-selected-track-color: #e57373}.mat-mdc-slide-toggle[_ngcontent-%COMP%]{--mdc-switch-state-layer-size: 48px}html[_ngcontent-%COMP%]{--mdc-radio-disabled-selected-icon-opacity: .38;--mdc-radio-disabled-unselected-icon-opacity: .38;--mdc-radio-state-layer-size: 40px}.mat-mdc-radio-button[_ngcontent-%COMP%]{--mdc-form-field-label-text-color: rgba(0, 0, 0, .87)}.mat-mdc-radio-button.mat-primary[_ngcontent-%COMP%]{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #4caf50;--mdc-radio-selected-hover-icon-color: #4caf50;--mdc-radio-selected-icon-color: #4caf50;--mdc-radio-selected-pressed-icon-color: #4caf50;--mat-radio-ripple-color: #000;--mat-radio-checked-ripple-color: #4caf50;--mat-radio-disabled-label-color: rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%]{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #ff4081;--mdc-radio-selected-hover-icon-color: #ff4081;--mdc-radio-selected-icon-color: #ff4081;--mdc-radio-selected-pressed-icon-color: #ff4081;--mat-radio-ripple-color: #000;--mat-radio-checked-ripple-color: #ff4081;--mat-radio-disabled-label-color: rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-warn[_ngcontent-%COMP%]{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #f44336;--mdc-radio-selected-hover-icon-color: #f44336;--mdc-radio-selected-icon-color: #f44336;--mdc-radio-selected-pressed-icon-color: #f44336;--mat-radio-ripple-color: #000;--mat-radio-checked-ripple-color: #f44336;--mat-radio-disabled-label-color: rgba(0, 0, 0, .38)}html[_ngcontent-%COMP%]{--mdc-radio-state-layer-size: 40px}html[_ngcontent-%COMP%]{--mat-slider-value-indicator-width: auto;--mat-slider-value-indicator-height: 32px;--mat-slider-value-indicator-caret-display: block;--mat-slider-value-indicator-border-radius: 4px;--mat-slider-value-indicator-padding: 0 12px;--mat-slider-value-indicator-text-transform: none;--mat-slider-value-indicator-container-transform: translateX(-50%);--mdc-slider-active-track-height: 6px;--mdc-slider-active-track-shape: 9999px;--mdc-slider-handle-height: 20px;--mdc-slider-handle-shape: 50%;--mdc-slider-handle-width: 20px;--mdc-slider-inactive-track-height: 4px;--mdc-slider-inactive-track-shape: 9999px;--mdc-slider-with-overlap-handle-outline-width: 1px;--mdc-slider-with-tick-marks-active-container-opacity: .6;--mdc-slider-with-tick-marks-container-shape: 50%;--mdc-slider-with-tick-marks-container-size: 2px;--mdc-slider-with-tick-marks-inactive-container-opacity: .6}html[_ngcontent-%COMP%]{--mdc-slider-handle-color: #4caf50;--mdc-slider-focus-handle-color: #4caf50;--mdc-slider-hover-handle-color: #4caf50;--mdc-slider-active-track-color: #4caf50;--mdc-slider-inactive-track-color: #4caf50;--mdc-slider-with-tick-marks-inactive-container-color: #4caf50;--mdc-slider-with-tick-marks-active-container-color: rgba(0, 0, 0, .87);--mdc-slider-disabled-active-track-color: #000;--mdc-slider-disabled-handle-color: #000;--mdc-slider-disabled-inactive-track-color: #000;--mdc-slider-label-container-color: #000;--mdc-slider-label-label-text-color: #fff;--mdc-slider-with-overlap-handle-outline-color: #fff;--mdc-slider-with-tick-marks-disabled-container-color: #000;--mdc-slider-handle-elevation: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mat-slider-ripple-color: #4caf50;--mat-slider-hover-state-layer-color: rgba(76, 175, 80, .05);--mat-slider-focus-state-layer-color: rgba(76, 175, 80, .2);--mat-slider-value-indicator-opacity: .6}html[_ngcontent-%COMP%]   .mat-accent[_ngcontent-%COMP%]{--mat-slider-ripple-color: #ff4081;--mat-slider-hover-state-layer-color: rgba(255, 64, 129, .05);--mat-slider-focus-state-layer-color: rgba(255, 64, 129, .2);--mdc-slider-handle-color: #ff4081;--mdc-slider-focus-handle-color: #ff4081;--mdc-slider-hover-handle-color: #ff4081;--mdc-slider-active-track-color: #ff4081;--mdc-slider-inactive-track-color: #ff4081;--mdc-slider-with-tick-marks-inactive-container-color: #ff4081;--mdc-slider-with-tick-marks-active-container-color: white}html[_ngcontent-%COMP%]   .mat-warn[_ngcontent-%COMP%]{--mat-slider-ripple-color: #f44336;--mat-slider-hover-state-layer-color: rgba(244, 67, 54, .05);--mat-slider-focus-state-layer-color: rgba(244, 67, 54, .2);--mdc-slider-handle-color: #f44336;--mdc-slider-focus-handle-color: #f44336;--mdc-slider-hover-handle-color: #f44336;--mdc-slider-active-track-color: #f44336;--mdc-slider-inactive-track-color: #f44336;--mdc-slider-with-tick-marks-inactive-container-color: #f44336;--mdc-slider-with-tick-marks-active-container-color: white}html[_ngcontent-%COMP%]{--mat-menu-container-shape: 4px}html[_ngcontent-%COMP%]{--mat-menu-item-label-text-color: rgba(0, 0, 0, .87);--mat-menu-item-icon-color: rgba(0, 0, 0, .87);--mat-menu-item-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-menu-item-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-menu-container-color: white}html[_ngcontent-%COMP%]{--mdc-list-list-item-container-shape: 0;--mdc-list-list-item-leading-avatar-shape: 50%;--mdc-list-list-item-container-color: transparent;--mdc-list-list-item-selected-container-color: transparent;--mdc-list-list-item-leading-avatar-color: transparent;--mdc-list-list-item-leading-icon-size: 24px;--mdc-list-list-item-leading-avatar-size: 40px;--mdc-list-list-item-trailing-icon-size: 24px;--mdc-list-list-item-disabled-state-layer-color: transparent;--mdc-list-list-item-disabled-state-layer-opacity: 0;--mdc-list-list-item-disabled-label-text-opacity: .38;--mdc-list-list-item-disabled-leading-icon-opacity: .38;--mdc-list-list-item-disabled-trailing-icon-opacity: .38}html[_ngcontent-%COMP%]{--mdc-list-list-item-label-text-color: rgba(0, 0, 0, .87);--mdc-list-list-item-supporting-text-color: rgba(0, 0, 0, .54);--mdc-list-list-item-leading-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-supporting-text-color: rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-selected-trailing-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-disabled-label-text-color: black;--mdc-list-list-item-disabled-leading-icon-color: black;--mdc-list-list-item-disabled-trailing-icon-color: black;--mdc-list-list-item-hover-label-text-color: rgba(0, 0, 0, .87);--mdc-list-list-item-hover-leading-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-hover-trailing-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-focus-label-text-color: rgba(0, 0, 0, .87);--mdc-list-list-item-hover-state-layer-color: black;--mdc-list-list-item-hover-state-layer-opacity: .04;--mdc-list-list-item-focus-state-layer-color: black;--mdc-list-list-item-focus-state-layer-opacity: .12}.mdc-list-item__start[_ngcontent-%COMP%], .mdc-list-item__end[_ngcontent-%COMP%]{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #4caf50;--mdc-radio-selected-hover-icon-color: #4caf50;--mdc-radio-selected-icon-color: #4caf50;--mdc-radio-selected-pressed-icon-color: #4caf50}.mat-accent[_ngcontent-%COMP%]   .mdc-list-item__start[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mdc-list-item__end[_ngcontent-%COMP%]{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #ff4081;--mdc-radio-selected-hover-icon-color: #ff4081;--mdc-radio-selected-icon-color: #ff4081;--mdc-radio-selected-pressed-icon-color: #ff4081}.mat-warn[_ngcontent-%COMP%]   .mdc-list-item__start[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mdc-list-item__end[_ngcontent-%COMP%]{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #f44336;--mdc-radio-selected-hover-icon-color: #f44336;--mdc-radio-selected-icon-color: #f44336;--mdc-radio-selected-pressed-icon-color: #f44336}.mat-mdc-list-option[_ngcontent-%COMP%]{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #000;--mdc-checkbox-selected-focus-icon-color: #4caf50;--mdc-checkbox-selected-hover-icon-color: #4caf50;--mdc-checkbox-selected-icon-color: #4caf50;--mdc-checkbox-selected-pressed-icon-color: #4caf50;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #4caf50;--mdc-checkbox-selected-hover-state-layer-color: #4caf50;--mdc-checkbox-selected-pressed-state-layer-color: #4caf50;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-list-option.mat-accent[_ngcontent-%COMP%]{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #ff4081;--mdc-checkbox-selected-hover-icon-color: #ff4081;--mdc-checkbox-selected-icon-color: #ff4081;--mdc-checkbox-selected-pressed-icon-color: #ff4081;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #ff4081;--mdc-checkbox-selected-hover-state-layer-color: #ff4081;--mdc-checkbox-selected-pressed-state-layer-color: #ff4081;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-list-option.mat-warn[_ngcontent-%COMP%]{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #f44336;--mdc-checkbox-selected-hover-icon-color: #f44336;--mdc-checkbox-selected-icon-color: #f44336;--mdc-checkbox-selected-pressed-icon-color: #f44336;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #f44336;--mdc-checkbox-selected-hover-state-layer-color: #f44336;--mdc-checkbox-selected-pressed-state-layer-color: #f44336;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-list-base.mat-mdc-list-base[_ngcontent-%COMP%]   .mdc-list-item--selected[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%], .mat-mdc-list-base.mat-mdc-list-base[_ngcontent-%COMP%]   .mdc-list-item--activated[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%], .mat-mdc-list-base.mat-mdc-list-base[_ngcontent-%COMP%]   .mdc-list-item--selected.mdc-list-item--with-leading-icon[_ngcontent-%COMP%]   .mdc-list-item__start[_ngcontent-%COMP%], .mat-mdc-list-base.mat-mdc-list-base[_ngcontent-%COMP%]   .mdc-list-item--activated.mdc-list-item--with-leading-icon[_ngcontent-%COMP%]   .mdc-list-item__start[_ngcontent-%COMP%]{color:#4caf50}.mat-mdc-list-base[_ngcontent-%COMP%]   .mdc-list-item--disabled[_ngcontent-%COMP%]   .mdc-list-item__start[_ngcontent-%COMP%], .mat-mdc-list-base[_ngcontent-%COMP%]   .mdc-list-item--disabled[_ngcontent-%COMP%]   .mdc-list-item__content[_ngcontent-%COMP%], .mat-mdc-list-base[_ngcontent-%COMP%]   .mdc-list-item--disabled[_ngcontent-%COMP%]   .mdc-list-item__end[_ngcontent-%COMP%]{opacity:1}html[_ngcontent-%COMP%]{--mdc-list-list-item-one-line-container-height: 48px;--mdc-list-list-item-two-line-container-height: 64px;--mdc-list-list-item-three-line-container-height: 88px}.mdc-list-item__start[_ngcontent-%COMP%], .mdc-list-item__end[_ngcontent-%COMP%]{--mdc-radio-state-layer-size: 40px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line[_ngcontent-%COMP%], .mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line[_ngcontent-%COMP%], .mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line[_ngcontent-%COMP%]{height:56px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines[_ngcontent-%COMP%], .mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines[_ngcontent-%COMP%], .mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines[_ngcontent-%COMP%]{height:72px}html[_ngcontent-%COMP%]{--mat-paginator-container-text-color: rgba(0, 0, 0, .87);--mat-paginator-container-background-color: white;--mat-paginator-enabled-icon-color: rgba(0, 0, 0, .54);--mat-paginator-disabled-icon-color: rgba(0, 0, 0, .12)}html[_ngcontent-%COMP%]{--mat-paginator-container-size: 56px}.mat-mdc-paginator[_ngcontent-%COMP%]{--mat-form-field-container-height: 40px;--mat-form-field-filled-label-display: none;--mat-form-field-container-vertical-padding: 8px;--mat-form-field-filled-with-label-container-padding-top: 8px;--mat-form-field-filled-with-label-container-padding-bottom: 8px}html[_ngcontent-%COMP%]{--mdc-tab-indicator-active-indicator-height: 2px;--mdc-tab-indicator-active-indicator-shape: 0;--mdc-secondary-navigation-tab-container-height: 48px;--mat-tab-header-divider-color: transparent;--mat-tab-header-divider-height: 0}.mat-mdc-tab-group[_ngcontent-%COMP%], .mat-mdc-tab-nav-bar[_ngcontent-%COMP%]{--mdc-tab-indicator-active-indicator-color: #4caf50;--mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color: #000;--mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color: #4caf50;--mat-tab-header-active-ripple-color: #4caf50;--mat-tab-header-inactive-ripple-color: #4caf50;--mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color: #4caf50;--mat-tab-header-active-hover-label-text-color: #4caf50;--mat-tab-header-active-focus-indicator-color: #4caf50;--mat-tab-header-active-hover-indicator-color: #4caf50}.mat-mdc-tab-group.mat-accent[_ngcontent-%COMP%], .mat-mdc-tab-nav-bar.mat-accent[_ngcontent-%COMP%]{--mdc-tab-indicator-active-indicator-color: #ff4081;--mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color: #000;--mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color: #ff4081;--mat-tab-header-active-ripple-color: #ff4081;--mat-tab-header-inactive-ripple-color: #ff4081;--mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color: #ff4081;--mat-tab-header-active-hover-label-text-color: #ff4081;--mat-tab-header-active-focus-indicator-color: #ff4081;--mat-tab-header-active-hover-indicator-color: #ff4081}.mat-mdc-tab-group.mat-warn[_ngcontent-%COMP%], .mat-mdc-tab-nav-bar.mat-warn[_ngcontent-%COMP%]{--mdc-tab-indicator-active-indicator-color: #f44336;--mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color: #000;--mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color: #f44336;--mat-tab-header-active-ripple-color: #f44336;--mat-tab-header-inactive-ripple-color: #f44336;--mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color: #f44336;--mat-tab-header-active-hover-label-text-color: #f44336;--mat-tab-header-active-focus-indicator-color: #f44336;--mat-tab-header-active-hover-indicator-color: #f44336}.mat-mdc-tab-group.mat-background-primary[_ngcontent-%COMP%], .mat-mdc-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]{--mat-tab-header-with-background-background-color: #4caf50;--mat-tab-header-with-background-foreground-color: rgba(0, 0, 0, .87)}.mat-mdc-tab-group.mat-background-accent[_ngcontent-%COMP%], .mat-mdc-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]{--mat-tab-header-with-background-background-color: #ff4081;--mat-tab-header-with-background-foreground-color: white}.mat-mdc-tab-group.mat-background-warn[_ngcontent-%COMP%], .mat-mdc-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]{--mat-tab-header-with-background-background-color: #f44336;--mat-tab-header-with-background-foreground-color: white}.mat-mdc-tab-header[_ngcontent-%COMP%]{--mdc-secondary-navigation-tab-container-height: 48px}html[_ngcontent-%COMP%]{--mdc-checkbox-disabled-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-state-layer-opacity: .16;--mdc-checkbox-selected-hover-state-layer-opacity: .04;--mdc-checkbox-selected-pressed-state-layer-opacity: .16;--mdc-checkbox-unselected-focus-state-layer-opacity: .16;--mdc-checkbox-unselected-hover-state-layer-opacity: .04;--mdc-checkbox-unselected-pressed-state-layer-opacity: .16}html[_ngcontent-%COMP%]{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #ff4081;--mdc-checkbox-selected-hover-icon-color: #ff4081;--mdc-checkbox-selected-icon-color: #ff4081;--mdc-checkbox-selected-pressed-icon-color: #ff4081;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #ff4081;--mdc-checkbox-selected-hover-state-layer-color: #ff4081;--mdc-checkbox-selected-pressed-state-layer-color: #ff4081;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-checkbox[_ngcontent-%COMP%]{--mdc-form-field-label-text-color: rgba(0, 0, 0, .87)}.mat-mdc-checkbox.mat-primary[_ngcontent-%COMP%]{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #000;--mdc-checkbox-selected-focus-icon-color: #4caf50;--mdc-checkbox-selected-hover-icon-color: #4caf50;--mdc-checkbox-selected-icon-color: #4caf50;--mdc-checkbox-selected-pressed-icon-color: #4caf50;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #4caf50;--mdc-checkbox-selected-hover-state-layer-color: #4caf50;--mdc-checkbox-selected-pressed-state-layer-color: #4caf50;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-checkbox.mat-warn[_ngcontent-%COMP%]{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #f44336;--mdc-checkbox-selected-hover-icon-color: #f44336;--mdc-checkbox-selected-icon-color: #f44336;--mdc-checkbox-selected-pressed-icon-color: #f44336;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #f44336;--mdc-checkbox-selected-hover-state-layer-color: #f44336;--mdc-checkbox-selected-pressed-state-layer-color: #f44336;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-checkbox.mat-mdc-checkbox-disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#00000061}html[_ngcontent-%COMP%]{--mdc-checkbox-state-layer-size: 40px}html[_ngcontent-%COMP%]{--mdc-text-button-container-shape: 4px;--mdc-text-button-keep-touch-target: false;--mdc-filled-button-container-shape: 4px;--mdc-filled-button-keep-touch-target: false;--mdc-protected-button-container-shape: 4px;--mdc-protected-button-keep-touch-target: false;--mdc-outlined-button-keep-touch-target: false;--mdc-outlined-button-outline-width: 1px;--mdc-outlined-button-container-shape: 4px}html[_ngcontent-%COMP%]{--mdc-text-button-label-text-color: #000;--mdc-text-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mat-text-button-state-layer-color: #000;--mat-text-button-disabled-state-layer-color: #000;--mat-text-button-ripple-color: rgba(0, 0, 0, .1);--mat-text-button-hover-state-layer-opacity: .04;--mat-text-button-focus-state-layer-opacity: .12;--mat-text-button-pressed-state-layer-opacity: .12;--mdc-filled-button-container-color: white;--mdc-filled-button-label-text-color: #000;--mdc-filled-button-disabled-container-color: rgba(0, 0, 0, .12);--mdc-filled-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mat-filled-button-state-layer-color: #000;--mat-filled-button-disabled-state-layer-color: #000;--mat-filled-button-ripple-color: rgba(0, 0, 0, .1);--mat-filled-button-hover-state-layer-opacity: .04;--mat-filled-button-focus-state-layer-opacity: .12;--mat-filled-button-pressed-state-layer-opacity: .12;--mdc-protected-button-container-color: white;--mdc-protected-button-label-text-color: #000;--mdc-protected-button-disabled-container-color: rgba(0, 0, 0, .12);--mdc-protected-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-protected-button-container-elevation-shadow: 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12);--mdc-protected-button-disabled-container-elevation-shadow: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mdc-protected-button-focus-container-elevation-shadow: 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);--mdc-protected-button-hover-container-elevation-shadow: 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);--mdc-protected-button-pressed-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-protected-button-container-shadow-color: #000;--mat-protected-button-state-layer-color: #000;--mat-protected-button-disabled-state-layer-color: #000;--mat-protected-button-ripple-color: rgba(0, 0, 0, .1);--mat-protected-button-hover-state-layer-opacity: .04;--mat-protected-button-focus-state-layer-opacity: .12;--mat-protected-button-pressed-state-layer-opacity: .12;--mdc-outlined-button-disabled-outline-color: rgba(0, 0, 0, .12);--mdc-outlined-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-outlined-button-label-text-color: #000;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #000;--mat-outlined-button-disabled-state-layer-color: #000;--mat-outlined-button-ripple-color: rgba(0, 0, 0, .1);--mat-outlined-button-hover-state-layer-opacity: .04;--mat-outlined-button-focus-state-layer-opacity: .12;--mat-outlined-button-pressed-state-layer-opacity: .12}.mat-mdc-button.mat-primary[_ngcontent-%COMP%]{--mdc-text-button-label-text-color: #4caf50;--mat-text-button-state-layer-color: #4caf50;--mat-text-button-ripple-color: rgba(76, 175, 80, .1)}.mat-mdc-button.mat-accent[_ngcontent-%COMP%]{--mdc-text-button-label-text-color: #ff4081;--mat-text-button-state-layer-color: #ff4081;--mat-text-button-ripple-color: rgba(255, 64, 129, .1)}.mat-mdc-button.mat-warn[_ngcontent-%COMP%]{--mdc-text-button-label-text-color: #f44336;--mat-text-button-state-layer-color: #f44336;--mat-text-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-unelevated-button.mat-primary[_ngcontent-%COMP%]{--mdc-filled-button-container-color: #4caf50;--mdc-filled-button-label-text-color: #000;--mat-filled-button-state-layer-color: #000;--mat-filled-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-unelevated-button.mat-accent[_ngcontent-%COMP%]{--mdc-filled-button-container-color: #ff4081;--mdc-filled-button-label-text-color: #fff;--mat-filled-button-state-layer-color: #fff;--mat-filled-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-unelevated-button.mat-warn[_ngcontent-%COMP%]{--mdc-filled-button-container-color: #f44336;--mdc-filled-button-label-text-color: #fff;--mat-filled-button-state-layer-color: #fff;--mat-filled-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #4caf50;--mdc-protected-button-label-text-color: #000;--mat-protected-button-state-layer-color: #000;--mat-protected-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-raised-button.mat-accent[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #ff4081;--mdc-protected-button-label-text-color: #fff;--mat-protected-button-state-layer-color: #fff;--mat-protected-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-raised-button.mat-warn[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #f44336;--mdc-protected-button-label-text-color: #fff;--mat-protected-button-state-layer-color: #fff;--mat-protected-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-outlined-button.mat-primary[_ngcontent-%COMP%]{--mdc-outlined-button-label-text-color: #4caf50;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #4caf50;--mat-outlined-button-ripple-color: rgba(76, 175, 80, .1)}.mat-mdc-outlined-button.mat-accent[_ngcontent-%COMP%]{--mdc-outlined-button-label-text-color: #ff4081;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #ff4081;--mat-outlined-button-ripple-color: rgba(255, 64, 129, .1)}.mat-mdc-outlined-button.mat-warn[_ngcontent-%COMP%]{--mdc-outlined-button-label-text-color: #f44336;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #f44336;--mat-outlined-button-ripple-color: rgba(244, 67, 54, .1)}html[_ngcontent-%COMP%]{--mdc-text-button-container-height: 36px;--mdc-filled-button-container-height: 36px;--mdc-outlined-button-container-height: 36px;--mdc-protected-button-container-height: 36px}html[_ngcontent-%COMP%]{--mdc-icon-button-state-layer-size: 48px;--mdc-icon-button-icon-size: 24px}html[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: inherit;--mdc-icon-button-disabled-icon-color: rgba(0, 0, 0, .38);--mat-icon-button-state-layer-color: #000;--mat-icon-button-disabled-state-layer-color: #000;--mat-icon-button-ripple-color: rgba(0, 0, 0, .1);--mat-icon-button-hover-state-layer-opacity: .04;--mat-icon-button-focus-state-layer-opacity: .12;--mat-icon-button-pressed-state-layer-opacity: .12}html[_ngcontent-%COMP%]   .mat-mdc-icon-button.mat-primary[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: #4caf50;--mat-icon-button-state-layer-color: #4caf50;--mat-icon-button-ripple-color: rgba(76, 175, 80, .1)}html[_ngcontent-%COMP%]   .mat-mdc-icon-button.mat-accent[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: #ff4081;--mat-icon-button-state-layer-color: #ff4081;--mat-icon-button-ripple-color: rgba(255, 64, 129, .1)}html[_ngcontent-%COMP%]   .mat-mdc-icon-button.mat-warn[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: #f44336;--mat-icon-button-state-layer-color: #f44336;--mat-icon-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-icon-button.mat-mdc-button-base[_ngcontent-%COMP%]{--mdc-icon-button-state-layer-size: 48px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:12px}html[_ngcontent-%COMP%]{--mdc-fab-container-shape: 50%;--mdc-fab-icon-size: 24px}html[_ngcontent-%COMP%]{--mdc-fab-container-color: white;--mdc-fab-container-elevation-shadow: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);--mdc-fab-focus-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-fab-hover-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-fab-pressed-container-elevation-shadow: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12);--mdc-fab-container-shadow-color: #000;--mat-fab-foreground-color: black;--mat-fab-state-layer-color: #000;--mat-fab-disabled-state-layer-color: #000;--mat-fab-ripple-color: rgba(0, 0, 0, .1);--mat-fab-hover-state-layer-opacity: .04;--mat-fab-focus-state-layer-opacity: .12;--mat-fab-pressed-state-layer-opacity: .12;--mat-fab-disabled-state-container-color: rgba(0, 0, 0, .12);--mat-fab-disabled-state-foreground-color: rgba(0, 0, 0, .38);--mdc-extended-fab-container-elevation-shadow: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);--mdc-extended-fab-focus-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-extended-fab-hover-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-extended-fab-pressed-container-elevation-shadow: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12);--mdc-extended-fab-container-shadow-color: #000}html[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%]{--mdc-fab-container-color: #4caf50;--mat-fab-foreground-color: #000;--mat-fab-state-layer-color: #000;--mat-fab-ripple-color: rgba(0, 0, 0, .1)}html[_ngcontent-%COMP%]   .mat-mdc-fab.mat-accent[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-accent[_ngcontent-%COMP%]{--mdc-fab-container-color: #ff4081;--mat-fab-foreground-color: #fff;--mat-fab-state-layer-color: #fff;--mat-fab-ripple-color: rgba(255, 255, 255, .1)}html[_ngcontent-%COMP%]   .mat-mdc-fab.mat-warn[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-warn[_ngcontent-%COMP%]{--mdc-fab-container-color: #f44336;--mat-fab-foreground-color: #fff;--mat-fab-state-layer-color: #fff;--mat-fab-ripple-color: rgba(255, 255, 255, .1)}html[_ngcontent-%COMP%]{--mdc-snackbar-container-shape: 4px}html[_ngcontent-%COMP%]{--mdc-snackbar-container-color: #333333;--mdc-snackbar-supporting-text-color: rgba(255, 255, 255, .87);--mat-snack-bar-button-color: #ff4081}html[_ngcontent-%COMP%]{--mat-table-row-item-outline-width: 1px}html[_ngcontent-%COMP%]{--mat-table-background-color: white;--mat-table-header-headline-color: rgba(0, 0, 0, .87);--mat-table-row-item-label-text-color: rgba(0, 0, 0, .87);--mat-table-row-item-outline-color: rgba(0, 0, 0, .12)}html[_ngcontent-%COMP%]{--mat-table-header-container-height: 56px;--mat-table-footer-container-height: 52px;--mat-table-row-item-container-height: 52px}html[_ngcontent-%COMP%]{--mdc-circular-progress-active-indicator-width: 4px;--mdc-circular-progress-size: 48px}html[_ngcontent-%COMP%]{--mdc-circular-progress-active-indicator-color: #4caf50}html[_ngcontent-%COMP%]   .mat-accent[_ngcontent-%COMP%]{--mdc-circular-progress-active-indicator-color: #ff4081}html[_ngcontent-%COMP%]   .mat-warn[_ngcontent-%COMP%]{--mdc-circular-progress-active-indicator-color: #f44336}.mat-badge[_ngcontent-%COMP%]{position:relative}.mat-badge.mat-badge[_ngcontent-%COMP%]{overflow:visible}.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:Roboto,sans-serif;font-family:var(--mat-badge-text-font, Roboto, sans-serif);font-size:12px;font-size:var(--mat-badge-text-size, 12px);font-weight:600;font-weight:var(--mat-badge-text-weight, 600)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px;font-size:9px;font-size:var(--mat-badge-small-size-text-size, 9px)}.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px;font-size:24px;font-size:var(--mat-badge-large-size-text-size, 24px)}.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}html[_ngcontent-%COMP%]{--mat-badge-background-color: #4caf50;--mat-badge-text-color: rgba(0, 0, 0, .87);--mat-badge-disabled-state-background-color: #b9b9b9;--mat-badge-disabled-state-text-color: rgba(0, 0, 0, .38)}.mat-badge-accent[_ngcontent-%COMP%]{--mat-badge-background-color: #ff4081;--mat-badge-text-color: white}.mat-badge-warn[_ngcontent-%COMP%]{--mat-badge-background-color: #f44336;--mat-badge-text-color: white}html[_ngcontent-%COMP%]{--mat-bottom-sheet-container-shape: 4px}html[_ngcontent-%COMP%]{--mat-bottom-sheet-container-text-color: rgba(0, 0, 0, .87);--mat-bottom-sheet-container-background-color: white}html[_ngcontent-%COMP%]{--mat-legacy-button-toggle-height: 36px;--mat-legacy-button-toggle-shape: 2px;--mat-legacy-button-toggle-focus-state-layer-opacity: 1;--mat-standard-button-toggle-shape: 4px;--mat-standard-button-toggle-hover-state-layer-opacity: .04;--mat-standard-button-toggle-focus-state-layer-opacity: .12}html[_ngcontent-%COMP%]{--mat-legacy-button-toggle-text-color: rgba(0, 0, 0, .38);--mat-legacy-button-toggle-state-layer-color: rgba(0, 0, 0, .12);--mat-legacy-button-toggle-selected-state-text-color: rgba(0, 0, 0, .54);--mat-legacy-button-toggle-selected-state-background-color: #e0e0e0;--mat-legacy-button-toggle-disabled-state-text-color: rgba(0, 0, 0, .26);--mat-legacy-button-toggle-disabled-state-background-color: #eeeeee;--mat-legacy-button-toggle-disabled-selected-state-background-color: #bdbdbd;--mat-standard-button-toggle-text-color: rgba(0, 0, 0, .87);--mat-standard-button-toggle-background-color: white;--mat-standard-button-toggle-state-layer-color: black;--mat-standard-button-toggle-selected-state-background-color: #e0e0e0;--mat-standard-button-toggle-selected-state-text-color: rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-state-text-color: rgba(0, 0, 0, .26);--mat-standard-button-toggle-disabled-state-background-color: white;--mat-standard-button-toggle-disabled-selected-state-text-color: rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-selected-state-background-color: #bdbdbd;--mat-standard-button-toggle-divider-color: #e0e0e0}html[_ngcontent-%COMP%]{--mat-standard-button-toggle-height: 48px}html[_ngcontent-%COMP%]{--mat-datepicker-calendar-date-selected-state-text-color: rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-selected-state-background-color: #4caf50;--mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(76, 175, 80, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color: rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-focus-state-background-color: rgba(76, 175, 80, .3);--mat-datepicker-calendar-date-hover-state-background-color: rgba(76, 175, 80, .3);--mat-datepicker-toggle-active-state-icon-color: #4caf50;--mat-datepicker-calendar-date-in-range-state-background-color: rgba(76, 175, 80, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e;--mat-datepicker-toggle-icon-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-body-label-text-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-period-button-icon-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-navigation-button-icon-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-header-divider-color: rgba(0, 0, 0, .12);--mat-datepicker-calendar-header-text-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-date-today-outline-color: rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-today-disabled-state-outline-color: rgba(0, 0, 0, .18);--mat-datepicker-calendar-date-text-color: rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-outline-color: transparent;--mat-datepicker-calendar-date-disabled-state-text-color: rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-preview-state-outline-color: rgba(0, 0, 0, .24);--mat-datepicker-range-input-separator-color: rgba(0, 0, 0, .87);--mat-datepicker-range-input-disabled-state-separator-color: rgba(0, 0, 0, .38);--mat-datepicker-range-input-disabled-state-text-color: rgba(0, 0, 0, .38);--mat-datepicker-calendar-container-background-color: white;--mat-datepicker-calendar-container-text-color: rgba(0, 0, 0, .87)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]{--mat-datepicker-calendar-date-selected-state-text-color: white;--mat-datepicker-calendar-date-selected-state-background-color: #ff4081;--mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(255, 64, 129, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color: white;--mat-datepicker-calendar-date-focus-state-background-color: rgba(255, 64, 129, .3);--mat-datepicker-calendar-date-hover-state-background-color: rgba(255, 64, 129, .3);--mat-datepicker-calendar-date-in-range-state-background-color: rgba(255, 64, 129, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]{--mat-datepicker-calendar-date-selected-state-text-color: white;--mat-datepicker-calendar-date-selected-state-background-color: #f44336;--mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(244, 67, 54, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color: white;--mat-datepicker-calendar-date-focus-state-background-color: rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-hover-state-background-color: rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-in-range-state-background-color: rgba(244, 67, 54, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e}.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{--mat-datepicker-toggle-active-state-icon-color: #ff4081}.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{--mat-datepicker-toggle-active-state-icon-color: #f44336}.mat-calendar-controls[_ngcontent-%COMP%]   .mat-mdc-icon-button.mat-mdc-button-base[_ngcontent-%COMP%]{--mdc-icon-button-state-layer-size: 40px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:8px}.mat-calendar-controls[_ngcontent-%COMP%]   .mat-mdc-icon-button.mat-mdc-button-base[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%]{display:none}html[_ngcontent-%COMP%]{--mat-divider-width: 1px}html[_ngcontent-%COMP%]{--mat-divider-color: rgba(0, 0, 0, .12)}html[_ngcontent-%COMP%]{--mat-expansion-container-shape: 4px}html[_ngcontent-%COMP%]{--mat-expansion-container-background-color: white;--mat-expansion-container-text-color: rgba(0, 0, 0, .87);--mat-expansion-actions-divider-color: rgba(0, 0, 0, .12);--mat-expansion-header-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-expansion-header-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-expansion-header-disabled-state-text-color: rgba(0, 0, 0, .26);--mat-expansion-header-text-color: rgba(0, 0, 0, .87);--mat-expansion-header-description-color: rgba(0, 0, 0, .54);--mat-expansion-header-indicator-color: rgba(0, 0, 0, .54)}html[_ngcontent-%COMP%]{--mat-expansion-header-collapsed-state-height: 48px;--mat-expansion-header-expanded-state-height: 64px}html[_ngcontent-%COMP%]{--mat-icon-color: inherit}.mat-icon.mat-primary[_ngcontent-%COMP%]{--mat-icon-color: #4caf50}.mat-icon.mat-accent[_ngcontent-%COMP%]{--mat-icon-color: #ff4081}.mat-icon.mat-warn[_ngcontent-%COMP%]{--mat-icon-color: #f44336}html[_ngcontent-%COMP%]{--mat-sidenav-container-shape: 0}html[_ngcontent-%COMP%]{--mat-sidenav-container-divider-color: rgba(0, 0, 0, .12);--mat-sidenav-container-background-color: white;--mat-sidenav-container-text-color: rgba(0, 0, 0, .87);--mat-sidenav-content-background-color: #fafafa;--mat-sidenav-content-text-color: rgba(0, 0, 0, .87);--mat-sidenav-scrim-color: rgba(0, 0, 0, .6)}html[_ngcontent-%COMP%]{--mat-stepper-header-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-header-selected-state-icon-background-color: #4caf50;--mat-stepper-header-selected-state-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-header-done-state-icon-background-color: #4caf50;--mat-stepper-header-done-state-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-header-edit-state-icon-background-color: #4caf50;--mat-stepper-header-edit-state-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-container-color: white;--mat-stepper-line-color: rgba(0, 0, 0, .12);--mat-stepper-header-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-stepper-header-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-stepper-header-label-text-color: rgba(0, 0, 0, .54);--mat-stepper-header-optional-label-text-color: rgba(0, 0, 0, .54);--mat-stepper-header-selected-state-label-text-color: rgba(0, 0, 0, .87);--mat-stepper-header-error-state-label-text-color: #f44336;--mat-stepper-header-icon-background-color: rgba(0, 0, 0, .54);--mat-stepper-header-error-state-icon-foreground-color: #f44336;--mat-stepper-header-error-state-icon-background-color: transparent}html[_ngcontent-%COMP%]   .mat-step-header.mat-accent[_ngcontent-%COMP%]{--mat-stepper-header-icon-foreground-color: white;--mat-stepper-header-selected-state-icon-background-color: #ff4081;--mat-stepper-header-selected-state-icon-foreground-color: white;--mat-stepper-header-done-state-icon-background-color: #ff4081;--mat-stepper-header-done-state-icon-foreground-color: white;--mat-stepper-header-edit-state-icon-background-color: #ff4081;--mat-stepper-header-edit-state-icon-foreground-color: white}html[_ngcontent-%COMP%]   .mat-step-header.mat-warn[_ngcontent-%COMP%]{--mat-stepper-header-icon-foreground-color: white;--mat-stepper-header-selected-state-icon-background-color: #f44336;--mat-stepper-header-selected-state-icon-foreground-color: white;--mat-stepper-header-done-state-icon-background-color: #f44336;--mat-stepper-header-done-state-icon-foreground-color: white;--mat-stepper-header-edit-state-icon-background-color: #f44336;--mat-stepper-header-edit-state-icon-foreground-color: white}html[_ngcontent-%COMP%]{--mat-stepper-header-height: 72px}html[_ngcontent-%COMP%]{--mat-sort-arrow-color: #757575}html[_ngcontent-%COMP%]{--mat-toolbar-container-background-color: whitesmoke;--mat-toolbar-container-text-color: rgba(0, 0, 0, .87)}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{--mat-toolbar-container-background-color: #4caf50;--mat-toolbar-container-text-color: rgba(0, 0, 0, .87)}.mat-toolbar.mat-accent[_ngcontent-%COMP%]{--mat-toolbar-container-background-color: #ff4081;--mat-toolbar-container-text-color: white}.mat-toolbar.mat-warn[_ngcontent-%COMP%]{--mat-toolbar-container-background-color: #f44336;--mat-toolbar-container-text-color: white}html[_ngcontent-%COMP%]{--mat-toolbar-standard-height: 64px;--mat-toolbar-mobile-height: 56px}html[_ngcontent-%COMP%]{--mat-tree-container-background-color: white;--mat-tree-node-text-color: rgba(0, 0, 0, .87)}html[_ngcontent-%COMP%]{--mat-tree-node-min-height: 48px}header[_ngcontent-%COMP%]{display:block;background:#202020;background-position:30px center;background-repeat:no-repeat;background-size:auto 40%;margin:0;padding-top:35px;padding-bottom:-20px;min-height:50px;text-align:center;color:#fff}header[_ngcontent-%COMP%]   #appTitle[_ngcontent-%COMP%]{font-size:xx-large;font-weight:bolder;color:#65a800}body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;background-color:#65a800;margin:0;padding:0;overflow-y:hidden;overflow-x:hidden;-webkit-user-select:none;user-select:none}footer[_ngcontent-%COMP%]{display:block;background-color:#202020;min-width:100%;width:auto;margin:0;padding:2px 0;color:#fff;font-size:smaller;text-align:left}footer[_ngcontent-%COMP%]   .wh-text[_ngcontent-%COMP%]{color:#65a800;margin:0 10px}footer[_ngcontent-%COMP%]   .infoLinks[_ngcontent-%COMP%]{text-align:right;position:fixed;right:0;margin-right:30px}footer[_ngcontent-%COMP%]   .infoLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;margin-left:10px;text-decoration:none}footer[_ngcontent-%COMP%]   .infoLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#65a800}']
});
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "app-footer",
      standalone: true,
      imports: [],
      template: '<footer>\n    <span\n    ><span>© {{ getCurrentYear(2023) }}</span>\n        <span class="wh-text">Westfälische Hochschule</span> Gelsenkirchen</span\n    >\n  <span class="infoLinks">\n        <a href="https://www.w-hs.de/service/impressum/" target="_blank"\n        >Impressum</a\n        >\n        <a href="https://pi-lab2.w-hs.de/THI/Datenschutz.html" target="_blank"\n        >Datenschutz</a\n        >\n        <a\n          href="https://pi-lab2.w-hs.de/THI/Barrierefreiheit.html"\n          target="_blank"\n        >Barrierefreiheit</a\n        >\n    </span>\n</footer>\n',
      styles: ['.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale3d(0,0,0);background-color:var(--mat-ripple-color, rgba(0, 0, 0, .1))}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:#00000052}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0!important;box-sizing:content-box!important;height:0!important}@keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}.mat-focus-indicator{position:relative}.mat-focus-indicator:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border:var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus:before{content:""}.cdk-high-contrast-active{--mat-focus-indicator-display: block}.mat-mdc-focus-indicator{position:relative}.mat-mdc-focus-indicator:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-mdc-focus-indicator-display, none);border:var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);border-radius:var(--mat-mdc-focus-indicator-border-radius, 4px)}.mat-mdc-focus-indicator:focus:before{content:""}.cdk-high-contrast-active{--mat-mdc-focus-indicator-display: block}.mat-app-background{background-color:var(--mat-app-background-color, transparent);color:var(--mat-app-text-color, inherit)}html{--mat-ripple-color: rgba(0, 0, 0, .1)}html{--mat-option-selected-state-label-text-color: #4caf50;--mat-option-label-text-color: rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color: rgba(0, 0, 0, .04)}.mat-accent{--mat-option-selected-state-label-text-color: #ff4081;--mat-option-label-text-color: rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color: rgba(0, 0, 0, .04)}.mat-warn{--mat-option-selected-state-label-text-color: #f44336;--mat-option-label-text-color: rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color: rgba(0, 0, 0, .04)}html{--mat-optgroup-label-text-color: rgba(0, 0, 0, .87)}.mat-primary{--mat-full-pseudo-checkbox-selected-icon-color: #4caf50;--mat-full-pseudo-checkbox-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mat-full-pseudo-checkbox-disabled-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-disabled-unselected-icon-color: #b0b0b0;--mat-full-pseudo-checkbox-disabled-selected-icon-color: #b0b0b0;--mat-minimal-pseudo-checkbox-selected-checkmark-color: #4caf50;--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: #b0b0b0}html,.mat-accent{--mat-full-pseudo-checkbox-selected-icon-color: #ff4081;--mat-full-pseudo-checkbox-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mat-full-pseudo-checkbox-disabled-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-disabled-unselected-icon-color: #b0b0b0;--mat-full-pseudo-checkbox-disabled-selected-icon-color: #b0b0b0;--mat-minimal-pseudo-checkbox-selected-checkmark-color: #ff4081;--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: #b0b0b0}.mat-warn{--mat-full-pseudo-checkbox-selected-icon-color: #f44336;--mat-full-pseudo-checkbox-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mat-full-pseudo-checkbox-disabled-selected-checkmark-color: #fafafa;--mat-full-pseudo-checkbox-disabled-unselected-icon-color: #b0b0b0;--mat-full-pseudo-checkbox-disabled-selected-icon-color: #b0b0b0;--mat-minimal-pseudo-checkbox-selected-checkmark-color: #f44336;--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: #b0b0b0}html{--mat-app-background-color: #fafafa;--mat-app-text-color: rgba(0, 0, 0, .87)}.mat-elevation-z0,.mat-mdc-elevation-specific.mat-elevation-z0{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-elevation-z1,.mat-mdc-elevation-specific.mat-elevation-z1{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.mat-elevation-z2,.mat-mdc-elevation-specific.mat-elevation-z2{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-elevation-z3,.mat-mdc-elevation-specific.mat-elevation-z3{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.mat-elevation-z4,.mat-mdc-elevation-specific.mat-elevation-z4{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-elevation-z5,.mat-mdc-elevation-specific.mat-elevation-z5{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.mat-elevation-z6,.mat-mdc-elevation-specific.mat-elevation-z6{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mat-elevation-z7,.mat-mdc-elevation-specific.mat-elevation-z7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.mat-elevation-z8,.mat-mdc-elevation-specific.mat-elevation-z8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-elevation-z9,.mat-mdc-elevation-specific.mat-elevation-z9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.mat-elevation-z10,.mat-mdc-elevation-specific.mat-elevation-z10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.mat-elevation-z11,.mat-mdc-elevation-specific.mat-elevation-z11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.mat-elevation-z12,.mat-mdc-elevation-specific.mat-elevation-z12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-elevation-z13,.mat-mdc-elevation-specific.mat-elevation-z13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.mat-elevation-z14,.mat-mdc-elevation-specific.mat-elevation-z14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.mat-elevation-z15,.mat-mdc-elevation-specific.mat-elevation-z15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.mat-elevation-z16,.mat-mdc-elevation-specific.mat-elevation-z16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-elevation-z17,.mat-mdc-elevation-specific.mat-elevation-z17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.mat-elevation-z18,.mat-mdc-elevation-specific.mat-elevation-z18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.mat-elevation-z19,.mat-mdc-elevation-specific.mat-elevation-z19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.mat-elevation-z20,.mat-mdc-elevation-specific.mat-elevation-z20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.mat-elevation-z21,.mat-mdc-elevation-specific.mat-elevation-z21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.mat-elevation-z22,.mat-mdc-elevation-specific.mat-elevation-z22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.mat-elevation-z23,.mat-mdc-elevation-specific.mat-elevation-z23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.mat-elevation-z24,.mat-mdc-elevation-specific.mat-elevation-z24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mat-theme-loaded-marker{display:none}html{--mdc-elevated-card-container-shape: 4px;--mdc-outlined-card-container-shape: 4px;--mdc-outlined-card-outline-width: 1px}html{--mdc-elevated-card-container-color: white;--mdc-elevated-card-container-elevation: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-outlined-card-container-color: white;--mdc-outlined-card-outline-color: rgba(0, 0, 0, .12);--mdc-outlined-card-container-elevation: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mat-card-subtitle-text-color: rgba(0, 0, 0, .54)}html{--mdc-linear-progress-active-indicator-height: 4px;--mdc-linear-progress-track-height: 4px;--mdc-linear-progress-track-shape: 0}.mat-mdc-progress-bar{--mdc-linear-progress-active-indicator-color: #4caf50;--mdc-linear-progress-track-color: rgba(76, 175, 80, .25)}.mat-mdc-progress-bar.mat-accent{--mdc-linear-progress-active-indicator-color: #ff4081;--mdc-linear-progress-track-color: rgba(255, 64, 129, .25)}.mat-mdc-progress-bar.mat-warn{--mdc-linear-progress-active-indicator-color: #f44336;--mdc-linear-progress-track-color: rgba(244, 67, 54, .25)}html{--mdc-plain-tooltip-container-shape: 4px;--mdc-plain-tooltip-supporting-text-line-height: 16px}html{--mdc-plain-tooltip-container-color: #616161;--mdc-plain-tooltip-supporting-text-color: #fff}html{--mdc-filled-text-field-active-indicator-height: 1px;--mdc-filled-text-field-focus-active-indicator-height: 2px;--mdc-filled-text-field-container-shape: 4px;--mdc-outlined-text-field-outline-width: 1px;--mdc-outlined-text-field-focus-outline-width: 2px;--mdc-outlined-text-field-container-shape: 4px}html{--mdc-filled-text-field-caret-color: #4caf50;--mdc-filled-text-field-focus-active-indicator-color: #4caf50;--mdc-filled-text-field-focus-label-text-color: rgba(76, 175, 80, .87);--mdc-filled-text-field-container-color: whitesmoke;--mdc-filled-text-field-disabled-container-color: #fafafa;--mdc-filled-text-field-label-text-color: rgba(0, 0, 0, .6);--mdc-filled-text-field-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-color: rgba(0, 0, 0, .87);--mdc-filled-text-field-disabled-input-text-color: rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-placeholder-color: rgba(0, 0, 0, .6);--mdc-filled-text-field-error-focus-label-text-color: #f44336;--mdc-filled-text-field-error-label-text-color: #f44336;--mdc-filled-text-field-error-caret-color: #f44336;--mdc-filled-text-field-active-indicator-color: rgba(0, 0, 0, .42);--mdc-filled-text-field-disabled-active-indicator-color: rgba(0, 0, 0, .06);--mdc-filled-text-field-hover-active-indicator-color: rgba(0, 0, 0, .87);--mdc-filled-text-field-error-active-indicator-color: #f44336;--mdc-filled-text-field-error-focus-active-indicator-color: #f44336;--mdc-filled-text-field-error-hover-active-indicator-color: #f44336;--mdc-outlined-text-field-caret-color: #4caf50;--mdc-outlined-text-field-focus-outline-color: #4caf50;--mdc-outlined-text-field-focus-label-text-color: rgba(76, 175, 80, .87);--mdc-outlined-text-field-label-text-color: rgba(0, 0, 0, .6);--mdc-outlined-text-field-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-color: rgba(0, 0, 0, .87);--mdc-outlined-text-field-disabled-input-text-color: rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-placeholder-color: rgba(0, 0, 0, .6);--mdc-outlined-text-field-error-caret-color: #f44336;--mdc-outlined-text-field-error-focus-label-text-color: #f44336;--mdc-outlined-text-field-error-label-text-color: #f44336;--mdc-outlined-text-field-outline-color: rgba(0, 0, 0, .38);--mdc-outlined-text-field-disabled-outline-color: rgba(0, 0, 0, .06);--mdc-outlined-text-field-hover-outline-color: rgba(0, 0, 0, .87);--mdc-outlined-text-field-error-focus-outline-color: #f44336;--mdc-outlined-text-field-error-hover-outline-color: #f44336;--mdc-outlined-text-field-error-outline-color: #f44336;--mat-form-field-focus-select-arrow-color: rgba(76, 175, 80, .87);--mat-form-field-disabled-input-text-placeholder-color: rgba(0, 0, 0, .38);--mat-form-field-state-layer-color: rgba(0, 0, 0, .87);--mat-form-field-error-text-color: #f44336;--mat-form-field-select-option-text-color: inherit;--mat-form-field-select-disabled-option-text-color: GrayText;--mat-form-field-enabled-select-arrow-color: rgba(0, 0, 0, .54);--mat-form-field-disabled-select-arrow-color: rgba(0, 0, 0, .38);--mat-form-field-hover-state-layer-opacity: .04;--mat-form-field-focus-state-layer-opacity: .12}.mat-mdc-form-field.mat-accent{--mdc-filled-text-field-caret-color: #ff4081;--mdc-filled-text-field-focus-active-indicator-color: #ff4081;--mdc-filled-text-field-focus-label-text-color: rgba(255, 64, 129, .87);--mdc-outlined-text-field-caret-color: #ff4081;--mdc-outlined-text-field-focus-outline-color: #ff4081;--mdc-outlined-text-field-focus-label-text-color: rgba(255, 64, 129, .87);--mat-form-field-focus-select-arrow-color: rgba(255, 64, 129, .87)}.mat-mdc-form-field.mat-warn{--mdc-filled-text-field-caret-color: #f44336;--mdc-filled-text-field-focus-active-indicator-color: #f44336;--mdc-filled-text-field-focus-label-text-color: rgba(244, 67, 54, .87);--mdc-outlined-text-field-caret-color: #f44336;--mdc-outlined-text-field-focus-outline-color: #f44336;--mdc-outlined-text-field-focus-label-text-color: rgba(244, 67, 54, .87);--mat-form-field-focus-select-arrow-color: rgba(244, 67, 54, .87)}html{--mat-form-field-container-height: 56px;--mat-form-field-filled-label-display: block;--mat-form-field-container-vertical-padding: 16px;--mat-form-field-filled-with-label-container-padding-top: 24px;--mat-form-field-filled-with-label-container-padding-bottom: 8px}html{--mat-select-panel-background-color: white;--mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);--mat-select-placeholder-text-color: rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);--mat-select-focused-arrow-color: rgba(76, 175, 80, .87);--mat-select-invalid-arrow-color: rgba(244, 67, 54, .87)}html .mat-mdc-form-field.mat-accent{--mat-select-panel-background-color: white;--mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);--mat-select-placeholder-text-color: rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);--mat-select-focused-arrow-color: rgba(255, 64, 129, .87);--mat-select-invalid-arrow-color: rgba(244, 67, 54, .87)}html .mat-mdc-form-field.mat-warn{--mat-select-panel-background-color: white;--mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);--mat-select-placeholder-text-color: rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);--mat-select-focused-arrow-color: rgba(244, 67, 54, .87);--mat-select-invalid-arrow-color: rgba(244, 67, 54, .87)}html{--mat-autocomplete-background-color: white}html{--mdc-dialog-container-elevation-shadow: 0px 11px 15px -7px rgba(0, 0, 0, .2), 0px 24px 38px 3px rgba(0, 0, 0, .14), 0px 9px 46px 8px rgba(0, 0, 0, .12);--mdc-dialog-container-shadow-color: #000;--mdc-dialog-container-shape: 4px}html{--mdc-dialog-container-color: white;--mdc-dialog-subhead-color: rgba(0, 0, 0, .87);--mdc-dialog-supporting-text-color: rgba(0, 0, 0, .6)}.mat-mdc-standard-chip{--mdc-chip-container-shape-family: rounded;--mdc-chip-container-shape-radius: 16px 16px 16px 16px;--mdc-chip-with-avatar-avatar-shape-family: rounded;--mdc-chip-with-avatar-avatar-shape-radius: 14px 14px 14px 14px;--mdc-chip-with-avatar-avatar-size: 28px;--mdc-chip-with-icon-icon-size: 18px}.mat-mdc-standard-chip{--mdc-chip-disabled-label-text-color: #212121;--mdc-chip-elevated-container-color: #e0e0e0;--mdc-chip-elevated-disabled-container-color: #e0e0e0;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: #212121;--mdc-chip-with-icon-icon-color: #212121;--mdc-chip-with-icon-disabled-icon-color: #212121;--mdc-chip-with-icon-selected-icon-color: #212121;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: #212121;--mdc-chip-with-trailing-icon-trailing-icon-color: #212121}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-primary,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-primary{--mdc-chip-disabled-label-text-color: rgba(0, 0, 0, .87);--mdc-chip-elevated-container-color: #4caf50;--mdc-chip-elevated-disabled-container-color: #4caf50;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: rgba(0, 0, 0, .87);--mdc-chip-with-icon-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-icon-disabled-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-icon-selected-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-trailing-icon-color: rgba(0, 0, 0, .87)}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-accent,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-accent{--mdc-chip-disabled-label-text-color: white;--mdc-chip-elevated-container-color: #ff4081;--mdc-chip-elevated-disabled-container-color: #ff4081;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: white;--mdc-chip-with-icon-icon-color: white;--mdc-chip-with-icon-disabled-icon-color: white;--mdc-chip-with-icon-selected-icon-color: white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: white;--mdc-chip-with-trailing-icon-trailing-icon-color: white}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-warn,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-warn{--mdc-chip-disabled-label-text-color: white;--mdc-chip-elevated-container-color: #f44336;--mdc-chip-elevated-disabled-container-color: #f44336;--mdc-chip-focus-state-layer-color: black;--mdc-chip-focus-state-layer-opacity: .12;--mdc-chip-label-text-color: white;--mdc-chip-with-icon-icon-color: white;--mdc-chip-with-icon-disabled-icon-color: white;--mdc-chip-with-icon-selected-icon-color: white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color: white;--mdc-chip-with-trailing-icon-trailing-icon-color: white}.mat-mdc-chip.mat-mdc-standard-chip{--mdc-chip-container-height: 32px}.mdc-switch{--mdc-switch-disabled-handle-opacity: .38;--mdc-switch-disabled-selected-icon-opacity: .38;--mdc-switch-disabled-track-opacity: .12;--mdc-switch-disabled-unselected-icon-opacity: .38;--mdc-switch-handle-height: 20px;--mdc-switch-handle-shape: 10px;--mdc-switch-handle-width: 20px;--mdc-switch-selected-icon-size: 18px;--mdc-switch-track-height: 14px;--mdc-switch-track-shape: 7px;--mdc-switch-track-width: 36px;--mdc-switch-unselected-icon-size: 18px;--mdc-switch-state-layer-size: 40px;--mdc-switch-selected-focus-state-layer-opacity: .12;--mdc-switch-selected-hover-state-layer-opacity: .04;--mdc-switch-selected-pressed-state-layer-opacity: .1;--mdc-switch-unselected-focus-state-layer-opacity: .12;--mdc-switch-unselected-hover-state-layer-opacity: .04;--mdc-switch-unselected-pressed-state-layer-opacity: .1}.mat-mdc-slide-toggle{--mdc-switch-selected-focus-state-layer-color: #43a047;--mdc-switch-selected-handle-color: #43a047;--mdc-switch-selected-hover-state-layer-color: #43a047;--mdc-switch-selected-pressed-state-layer-color: #43a047;--mdc-switch-selected-focus-handle-color: #1b5e20;--mdc-switch-selected-hover-handle-color: #1b5e20;--mdc-switch-selected-pressed-handle-color: #1b5e20;--mdc-switch-selected-focus-track-color: #81c784;--mdc-switch-selected-hover-track-color: #81c784;--mdc-switch-selected-pressed-track-color: #81c784;--mdc-switch-selected-track-color: #81c784;--mdc-switch-disabled-selected-handle-color: #424242;--mdc-switch-disabled-selected-icon-color: #fff;--mdc-switch-disabled-selected-track-color: #424242;--mdc-switch-disabled-unselected-handle-color: #424242;--mdc-switch-disabled-unselected-icon-color: #fff;--mdc-switch-disabled-unselected-track-color: #424242;--mdc-switch-handle-surface-color: var(--mdc-theme-surface, #fff);--mdc-switch-handle-elevation-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-switch-handle-shadow-color: black;--mdc-switch-disabled-handle-elevation-shadow: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mdc-switch-selected-icon-color: #fff;--mdc-switch-unselected-focus-handle-color: #212121;--mdc-switch-unselected-focus-state-layer-color: #424242;--mdc-switch-unselected-focus-track-color: #e0e0e0;--mdc-switch-unselected-handle-color: #616161;--mdc-switch-unselected-hover-handle-color: #212121;--mdc-switch-unselected-hover-state-layer-color: #424242;--mdc-switch-unselected-hover-track-color: #e0e0e0;--mdc-switch-unselected-icon-color: #fff;--mdc-switch-unselected-pressed-handle-color: #212121;--mdc-switch-unselected-pressed-state-layer-color: #424242;--mdc-switch-unselected-pressed-track-color: #e0e0e0;--mdc-switch-unselected-track-color: #e0e0e0;--mdc-form-field-label-text-color: rgba(0, 0, 0, .87)}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:#00000061}.mat-mdc-slide-toggle.mat-accent{--mdc-switch-selected-focus-state-layer-color: #d81b60;--mdc-switch-selected-handle-color: #d81b60;--mdc-switch-selected-hover-state-layer-color: #d81b60;--mdc-switch-selected-pressed-state-layer-color: #d81b60;--mdc-switch-selected-focus-handle-color: #880e4f;--mdc-switch-selected-hover-handle-color: #880e4f;--mdc-switch-selected-pressed-handle-color: #880e4f;--mdc-switch-selected-focus-track-color: #f06292;--mdc-switch-selected-hover-track-color: #f06292;--mdc-switch-selected-pressed-track-color: #f06292;--mdc-switch-selected-track-color: #f06292}.mat-mdc-slide-toggle.mat-warn{--mdc-switch-selected-focus-state-layer-color: #e53935;--mdc-switch-selected-handle-color: #e53935;--mdc-switch-selected-hover-state-layer-color: #e53935;--mdc-switch-selected-pressed-state-layer-color: #e53935;--mdc-switch-selected-focus-handle-color: #b71c1c;--mdc-switch-selected-hover-handle-color: #b71c1c;--mdc-switch-selected-pressed-handle-color: #b71c1c;--mdc-switch-selected-focus-track-color: #e57373;--mdc-switch-selected-hover-track-color: #e57373;--mdc-switch-selected-pressed-track-color: #e57373;--mdc-switch-selected-track-color: #e57373}.mat-mdc-slide-toggle{--mdc-switch-state-layer-size: 48px}html{--mdc-radio-disabled-selected-icon-opacity: .38;--mdc-radio-disabled-unselected-icon-opacity: .38;--mdc-radio-state-layer-size: 40px}.mat-mdc-radio-button{--mdc-form-field-label-text-color: rgba(0, 0, 0, .87)}.mat-mdc-radio-button.mat-primary{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #4caf50;--mdc-radio-selected-hover-icon-color: #4caf50;--mdc-radio-selected-icon-color: #4caf50;--mdc-radio-selected-pressed-icon-color: #4caf50;--mat-radio-ripple-color: #000;--mat-radio-checked-ripple-color: #4caf50;--mat-radio-disabled-label-color: rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-accent{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #ff4081;--mdc-radio-selected-hover-icon-color: #ff4081;--mdc-radio-selected-icon-color: #ff4081;--mdc-radio-selected-pressed-icon-color: #ff4081;--mat-radio-ripple-color: #000;--mat-radio-checked-ripple-color: #ff4081;--mat-radio-disabled-label-color: rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-warn{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #f44336;--mdc-radio-selected-hover-icon-color: #f44336;--mdc-radio-selected-icon-color: #f44336;--mdc-radio-selected-pressed-icon-color: #f44336;--mat-radio-ripple-color: #000;--mat-radio-checked-ripple-color: #f44336;--mat-radio-disabled-label-color: rgba(0, 0, 0, .38)}html{--mdc-radio-state-layer-size: 40px}html{--mat-slider-value-indicator-width: auto;--mat-slider-value-indicator-height: 32px;--mat-slider-value-indicator-caret-display: block;--mat-slider-value-indicator-border-radius: 4px;--mat-slider-value-indicator-padding: 0 12px;--mat-slider-value-indicator-text-transform: none;--mat-slider-value-indicator-container-transform: translateX(-50%);--mdc-slider-active-track-height: 6px;--mdc-slider-active-track-shape: 9999px;--mdc-slider-handle-height: 20px;--mdc-slider-handle-shape: 50%;--mdc-slider-handle-width: 20px;--mdc-slider-inactive-track-height: 4px;--mdc-slider-inactive-track-shape: 9999px;--mdc-slider-with-overlap-handle-outline-width: 1px;--mdc-slider-with-tick-marks-active-container-opacity: .6;--mdc-slider-with-tick-marks-container-shape: 50%;--mdc-slider-with-tick-marks-container-size: 2px;--mdc-slider-with-tick-marks-inactive-container-opacity: .6}html{--mdc-slider-handle-color: #4caf50;--mdc-slider-focus-handle-color: #4caf50;--mdc-slider-hover-handle-color: #4caf50;--mdc-slider-active-track-color: #4caf50;--mdc-slider-inactive-track-color: #4caf50;--mdc-slider-with-tick-marks-inactive-container-color: #4caf50;--mdc-slider-with-tick-marks-active-container-color: rgba(0, 0, 0, .87);--mdc-slider-disabled-active-track-color: #000;--mdc-slider-disabled-handle-color: #000;--mdc-slider-disabled-inactive-track-color: #000;--mdc-slider-label-container-color: #000;--mdc-slider-label-label-text-color: #fff;--mdc-slider-with-overlap-handle-outline-color: #fff;--mdc-slider-with-tick-marks-disabled-container-color: #000;--mdc-slider-handle-elevation: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mat-slider-ripple-color: #4caf50;--mat-slider-hover-state-layer-color: rgba(76, 175, 80, .05);--mat-slider-focus-state-layer-color: rgba(76, 175, 80, .2);--mat-slider-value-indicator-opacity: .6}html .mat-accent{--mat-slider-ripple-color: #ff4081;--mat-slider-hover-state-layer-color: rgba(255, 64, 129, .05);--mat-slider-focus-state-layer-color: rgba(255, 64, 129, .2);--mdc-slider-handle-color: #ff4081;--mdc-slider-focus-handle-color: #ff4081;--mdc-slider-hover-handle-color: #ff4081;--mdc-slider-active-track-color: #ff4081;--mdc-slider-inactive-track-color: #ff4081;--mdc-slider-with-tick-marks-inactive-container-color: #ff4081;--mdc-slider-with-tick-marks-active-container-color: white}html .mat-warn{--mat-slider-ripple-color: #f44336;--mat-slider-hover-state-layer-color: rgba(244, 67, 54, .05);--mat-slider-focus-state-layer-color: rgba(244, 67, 54, .2);--mdc-slider-handle-color: #f44336;--mdc-slider-focus-handle-color: #f44336;--mdc-slider-hover-handle-color: #f44336;--mdc-slider-active-track-color: #f44336;--mdc-slider-inactive-track-color: #f44336;--mdc-slider-with-tick-marks-inactive-container-color: #f44336;--mdc-slider-with-tick-marks-active-container-color: white}html{--mat-menu-container-shape: 4px}html{--mat-menu-item-label-text-color: rgba(0, 0, 0, .87);--mat-menu-item-icon-color: rgba(0, 0, 0, .87);--mat-menu-item-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-menu-item-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-menu-container-color: white}html{--mdc-list-list-item-container-shape: 0;--mdc-list-list-item-leading-avatar-shape: 50%;--mdc-list-list-item-container-color: transparent;--mdc-list-list-item-selected-container-color: transparent;--mdc-list-list-item-leading-avatar-color: transparent;--mdc-list-list-item-leading-icon-size: 24px;--mdc-list-list-item-leading-avatar-size: 40px;--mdc-list-list-item-trailing-icon-size: 24px;--mdc-list-list-item-disabled-state-layer-color: transparent;--mdc-list-list-item-disabled-state-layer-opacity: 0;--mdc-list-list-item-disabled-label-text-opacity: .38;--mdc-list-list-item-disabled-leading-icon-opacity: .38;--mdc-list-list-item-disabled-trailing-icon-opacity: .38}html{--mdc-list-list-item-label-text-color: rgba(0, 0, 0, .87);--mdc-list-list-item-supporting-text-color: rgba(0, 0, 0, .54);--mdc-list-list-item-leading-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-supporting-text-color: rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-selected-trailing-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-disabled-label-text-color: black;--mdc-list-list-item-disabled-leading-icon-color: black;--mdc-list-list-item-disabled-trailing-icon-color: black;--mdc-list-list-item-hover-label-text-color: rgba(0, 0, 0, .87);--mdc-list-list-item-hover-leading-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-hover-trailing-icon-color: rgba(0, 0, 0, .38);--mdc-list-list-item-focus-label-text-color: rgba(0, 0, 0, .87);--mdc-list-list-item-hover-state-layer-color: black;--mdc-list-list-item-hover-state-layer-opacity: .04;--mdc-list-list-item-focus-state-layer-color: black;--mdc-list-list-item-focus-state-layer-opacity: .12}.mdc-list-item__start,.mdc-list-item__end{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #4caf50;--mdc-radio-selected-hover-icon-color: #4caf50;--mdc-radio-selected-icon-color: #4caf50;--mdc-radio-selected-pressed-icon-color: #4caf50}.mat-accent .mdc-list-item__start,.mat-accent .mdc-list-item__end{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #ff4081;--mdc-radio-selected-hover-icon-color: #ff4081;--mdc-radio-selected-icon-color: #ff4081;--mdc-radio-selected-pressed-icon-color: #ff4081}.mat-warn .mdc-list-item__start,.mat-warn .mdc-list-item__end{--mdc-radio-disabled-selected-icon-color: #000;--mdc-radio-disabled-unselected-icon-color: #000;--mdc-radio-unselected-hover-icon-color: #212121;--mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color: #f44336;--mdc-radio-selected-hover-icon-color: #f44336;--mdc-radio-selected-icon-color: #f44336;--mdc-radio-selected-pressed-icon-color: #f44336}.mat-mdc-list-option{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #000;--mdc-checkbox-selected-focus-icon-color: #4caf50;--mdc-checkbox-selected-hover-icon-color: #4caf50;--mdc-checkbox-selected-icon-color: #4caf50;--mdc-checkbox-selected-pressed-icon-color: #4caf50;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #4caf50;--mdc-checkbox-selected-hover-state-layer-color: #4caf50;--mdc-checkbox-selected-pressed-state-layer-color: #4caf50;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-list-option.mat-accent{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #ff4081;--mdc-checkbox-selected-hover-icon-color: #ff4081;--mdc-checkbox-selected-icon-color: #ff4081;--mdc-checkbox-selected-pressed-icon-color: #ff4081;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #ff4081;--mdc-checkbox-selected-hover-state-layer-color: #ff4081;--mdc-checkbox-selected-pressed-state-layer-color: #ff4081;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-list-option.mat-warn{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #f44336;--mdc-checkbox-selected-hover-icon-color: #f44336;--mdc-checkbox-selected-icon-color: #f44336;--mdc-checkbox-selected-pressed-icon-color: #f44336;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #f44336;--mdc-checkbox-selected-hover-state-layer-color: #f44336;--mdc-checkbox-selected-pressed-state-layer-color: #f44336;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start{color:#4caf50}.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__content,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__end{opacity:1}html{--mdc-list-list-item-one-line-container-height: 48px;--mdc-list-list-item-two-line-container-height: 64px;--mdc-list-list-item-three-line-container-height: 88px}.mdc-list-item__start,.mdc-list-item__end{--mdc-radio-state-layer-size: 40px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}html{--mat-paginator-container-text-color: rgba(0, 0, 0, .87);--mat-paginator-container-background-color: white;--mat-paginator-enabled-icon-color: rgba(0, 0, 0, .54);--mat-paginator-disabled-icon-color: rgba(0, 0, 0, .12)}html{--mat-paginator-container-size: 56px}.mat-mdc-paginator{--mat-form-field-container-height: 40px;--mat-form-field-filled-label-display: none;--mat-form-field-container-vertical-padding: 8px;--mat-form-field-filled-with-label-container-padding-top: 8px;--mat-form-field-filled-with-label-container-padding-bottom: 8px}html{--mdc-tab-indicator-active-indicator-height: 2px;--mdc-tab-indicator-active-indicator-shape: 0;--mdc-secondary-navigation-tab-container-height: 48px;--mat-tab-header-divider-color: transparent;--mat-tab-header-divider-height: 0}.mat-mdc-tab-group,.mat-mdc-tab-nav-bar{--mdc-tab-indicator-active-indicator-color: #4caf50;--mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color: #000;--mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color: #4caf50;--mat-tab-header-active-ripple-color: #4caf50;--mat-tab-header-inactive-ripple-color: #4caf50;--mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color: #4caf50;--mat-tab-header-active-hover-label-text-color: #4caf50;--mat-tab-header-active-focus-indicator-color: #4caf50;--mat-tab-header-active-hover-indicator-color: #4caf50}.mat-mdc-tab-group.mat-accent,.mat-mdc-tab-nav-bar.mat-accent{--mdc-tab-indicator-active-indicator-color: #ff4081;--mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color: #000;--mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color: #ff4081;--mat-tab-header-active-ripple-color: #ff4081;--mat-tab-header-inactive-ripple-color: #ff4081;--mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color: #ff4081;--mat-tab-header-active-hover-label-text-color: #ff4081;--mat-tab-header-active-focus-indicator-color: #ff4081;--mat-tab-header-active-hover-indicator-color: #ff4081}.mat-mdc-tab-group.mat-warn,.mat-mdc-tab-nav-bar.mat-warn{--mdc-tab-indicator-active-indicator-color: #f44336;--mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color: #000;--mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color: #f44336;--mat-tab-header-active-ripple-color: #f44336;--mat-tab-header-inactive-ripple-color: #f44336;--mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color: #f44336;--mat-tab-header-active-hover-label-text-color: #f44336;--mat-tab-header-active-focus-indicator-color: #f44336;--mat-tab-header-active-hover-indicator-color: #f44336}.mat-mdc-tab-group.mat-background-primary,.mat-mdc-tab-nav-bar.mat-background-primary{--mat-tab-header-with-background-background-color: #4caf50;--mat-tab-header-with-background-foreground-color: rgba(0, 0, 0, .87)}.mat-mdc-tab-group.mat-background-accent,.mat-mdc-tab-nav-bar.mat-background-accent{--mat-tab-header-with-background-background-color: #ff4081;--mat-tab-header-with-background-foreground-color: white}.mat-mdc-tab-group.mat-background-warn,.mat-mdc-tab-nav-bar.mat-background-warn{--mat-tab-header-with-background-background-color: #f44336;--mat-tab-header-with-background-foreground-color: white}.mat-mdc-tab-header{--mdc-secondary-navigation-tab-container-height: 48px}html{--mdc-checkbox-disabled-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-state-layer-opacity: .16;--mdc-checkbox-selected-hover-state-layer-opacity: .04;--mdc-checkbox-selected-pressed-state-layer-opacity: .16;--mdc-checkbox-unselected-focus-state-layer-opacity: .16;--mdc-checkbox-unselected-hover-state-layer-opacity: .04;--mdc-checkbox-unselected-pressed-state-layer-opacity: .16}html{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #ff4081;--mdc-checkbox-selected-hover-icon-color: #ff4081;--mdc-checkbox-selected-icon-color: #ff4081;--mdc-checkbox-selected-pressed-icon-color: #ff4081;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #ff4081;--mdc-checkbox-selected-hover-state-layer-color: #ff4081;--mdc-checkbox-selected-pressed-state-layer-color: #ff4081;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-checkbox{--mdc-form-field-label-text-color: rgba(0, 0, 0, .87)}.mat-mdc-checkbox.mat-primary{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #000;--mdc-checkbox-selected-focus-icon-color: #4caf50;--mdc-checkbox-selected-hover-icon-color: #4caf50;--mdc-checkbox-selected-icon-color: #4caf50;--mdc-checkbox-selected-pressed-icon-color: #4caf50;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #4caf50;--mdc-checkbox-selected-hover-state-layer-color: #4caf50;--mdc-checkbox-selected-pressed-state-layer-color: #4caf50;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-checkbox.mat-warn{--mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-selected-focus-icon-color: #f44336;--mdc-checkbox-selected-hover-icon-color: #f44336;--mdc-checkbox-selected-icon-color: #f44336;--mdc-checkbox-selected-pressed-icon-color: #f44336;--mdc-checkbox-unselected-focus-icon-color: #212121;--mdc-checkbox-unselected-hover-icon-color: #212121;--mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color: #f44336;--mdc-checkbox-selected-hover-state-layer-color: #f44336;--mdc-checkbox-selected-pressed-state-layer-color: #f44336;--mdc-checkbox-unselected-focus-state-layer-color: black;--mdc-checkbox-unselected-hover-state-layer-color: black;--mdc-checkbox-unselected-pressed-state-layer-color: black}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:#00000061}html{--mdc-checkbox-state-layer-size: 40px}html{--mdc-text-button-container-shape: 4px;--mdc-text-button-keep-touch-target: false;--mdc-filled-button-container-shape: 4px;--mdc-filled-button-keep-touch-target: false;--mdc-protected-button-container-shape: 4px;--mdc-protected-button-keep-touch-target: false;--mdc-outlined-button-keep-touch-target: false;--mdc-outlined-button-outline-width: 1px;--mdc-outlined-button-container-shape: 4px}html{--mdc-text-button-label-text-color: #000;--mdc-text-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mat-text-button-state-layer-color: #000;--mat-text-button-disabled-state-layer-color: #000;--mat-text-button-ripple-color: rgba(0, 0, 0, .1);--mat-text-button-hover-state-layer-opacity: .04;--mat-text-button-focus-state-layer-opacity: .12;--mat-text-button-pressed-state-layer-opacity: .12;--mdc-filled-button-container-color: white;--mdc-filled-button-label-text-color: #000;--mdc-filled-button-disabled-container-color: rgba(0, 0, 0, .12);--mdc-filled-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mat-filled-button-state-layer-color: #000;--mat-filled-button-disabled-state-layer-color: #000;--mat-filled-button-ripple-color: rgba(0, 0, 0, .1);--mat-filled-button-hover-state-layer-opacity: .04;--mat-filled-button-focus-state-layer-opacity: .12;--mat-filled-button-pressed-state-layer-opacity: .12;--mdc-protected-button-container-color: white;--mdc-protected-button-label-text-color: #000;--mdc-protected-button-disabled-container-color: rgba(0, 0, 0, .12);--mdc-protected-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-protected-button-container-elevation-shadow: 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12);--mdc-protected-button-disabled-container-elevation-shadow: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mdc-protected-button-focus-container-elevation-shadow: 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);--mdc-protected-button-hover-container-elevation-shadow: 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);--mdc-protected-button-pressed-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-protected-button-container-shadow-color: #000;--mat-protected-button-state-layer-color: #000;--mat-protected-button-disabled-state-layer-color: #000;--mat-protected-button-ripple-color: rgba(0, 0, 0, .1);--mat-protected-button-hover-state-layer-opacity: .04;--mat-protected-button-focus-state-layer-opacity: .12;--mat-protected-button-pressed-state-layer-opacity: .12;--mdc-outlined-button-disabled-outline-color: rgba(0, 0, 0, .12);--mdc-outlined-button-disabled-label-text-color: rgba(0, 0, 0, .38);--mdc-outlined-button-label-text-color: #000;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #000;--mat-outlined-button-disabled-state-layer-color: #000;--mat-outlined-button-ripple-color: rgba(0, 0, 0, .1);--mat-outlined-button-hover-state-layer-opacity: .04;--mat-outlined-button-focus-state-layer-opacity: .12;--mat-outlined-button-pressed-state-layer-opacity: .12}.mat-mdc-button.mat-primary{--mdc-text-button-label-text-color: #4caf50;--mat-text-button-state-layer-color: #4caf50;--mat-text-button-ripple-color: rgba(76, 175, 80, .1)}.mat-mdc-button.mat-accent{--mdc-text-button-label-text-color: #ff4081;--mat-text-button-state-layer-color: #ff4081;--mat-text-button-ripple-color: rgba(255, 64, 129, .1)}.mat-mdc-button.mat-warn{--mdc-text-button-label-text-color: #f44336;--mat-text-button-state-layer-color: #f44336;--mat-text-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-unelevated-button.mat-primary{--mdc-filled-button-container-color: #4caf50;--mdc-filled-button-label-text-color: #000;--mat-filled-button-state-layer-color: #000;--mat-filled-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-unelevated-button.mat-accent{--mdc-filled-button-container-color: #ff4081;--mdc-filled-button-label-text-color: #fff;--mat-filled-button-state-layer-color: #fff;--mat-filled-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-unelevated-button.mat-warn{--mdc-filled-button-container-color: #f44336;--mdc-filled-button-label-text-color: #fff;--mat-filled-button-state-layer-color: #fff;--mat-filled-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-raised-button.mat-primary{--mdc-protected-button-container-color: #4caf50;--mdc-protected-button-label-text-color: #000;--mat-protected-button-state-layer-color: #000;--mat-protected-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-raised-button.mat-accent{--mdc-protected-button-container-color: #ff4081;--mdc-protected-button-label-text-color: #fff;--mat-protected-button-state-layer-color: #fff;--mat-protected-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-raised-button.mat-warn{--mdc-protected-button-container-color: #f44336;--mdc-protected-button-label-text-color: #fff;--mat-protected-button-state-layer-color: #fff;--mat-protected-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-outlined-button.mat-primary{--mdc-outlined-button-label-text-color: #4caf50;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #4caf50;--mat-outlined-button-ripple-color: rgba(76, 175, 80, .1)}.mat-mdc-outlined-button.mat-accent{--mdc-outlined-button-label-text-color: #ff4081;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #ff4081;--mat-outlined-button-ripple-color: rgba(255, 64, 129, .1)}.mat-mdc-outlined-button.mat-warn{--mdc-outlined-button-label-text-color: #f44336;--mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);--mat-outlined-button-state-layer-color: #f44336;--mat-outlined-button-ripple-color: rgba(244, 67, 54, .1)}html{--mdc-text-button-container-height: 36px;--mdc-filled-button-container-height: 36px;--mdc-outlined-button-container-height: 36px;--mdc-protected-button-container-height: 36px}html{--mdc-icon-button-state-layer-size: 48px;--mdc-icon-button-icon-size: 24px}html{--mdc-icon-button-icon-color: inherit;--mdc-icon-button-disabled-icon-color: rgba(0, 0, 0, .38);--mat-icon-button-state-layer-color: #000;--mat-icon-button-disabled-state-layer-color: #000;--mat-icon-button-ripple-color: rgba(0, 0, 0, .1);--mat-icon-button-hover-state-layer-opacity: .04;--mat-icon-button-focus-state-layer-opacity: .12;--mat-icon-button-pressed-state-layer-opacity: .12}html .mat-mdc-icon-button.mat-primary{--mdc-icon-button-icon-color: #4caf50;--mat-icon-button-state-layer-color: #4caf50;--mat-icon-button-ripple-color: rgba(76, 175, 80, .1)}html .mat-mdc-icon-button.mat-accent{--mdc-icon-button-icon-color: #ff4081;--mat-icon-button-state-layer-color: #ff4081;--mat-icon-button-ripple-color: rgba(255, 64, 129, .1)}html .mat-mdc-icon-button.mat-warn{--mdc-icon-button-icon-color: #f44336;--mat-icon-button-state-layer-color: #f44336;--mat-icon-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-icon-button.mat-mdc-button-base{--mdc-icon-button-state-layer-size: 48px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:12px}html{--mdc-fab-container-shape: 50%;--mdc-fab-icon-size: 24px}html{--mdc-fab-container-color: white;--mdc-fab-container-elevation-shadow: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);--mdc-fab-focus-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-fab-hover-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-fab-pressed-container-elevation-shadow: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12);--mdc-fab-container-shadow-color: #000;--mat-fab-foreground-color: black;--mat-fab-state-layer-color: #000;--mat-fab-disabled-state-layer-color: #000;--mat-fab-ripple-color: rgba(0, 0, 0, .1);--mat-fab-hover-state-layer-opacity: .04;--mat-fab-focus-state-layer-opacity: .12;--mat-fab-pressed-state-layer-opacity: .12;--mat-fab-disabled-state-container-color: rgba(0, 0, 0, .12);--mat-fab-disabled-state-foreground-color: rgba(0, 0, 0, .38);--mdc-extended-fab-container-elevation-shadow: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);--mdc-extended-fab-focus-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-extended-fab-hover-container-elevation-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mdc-extended-fab-pressed-container-elevation-shadow: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12);--mdc-extended-fab-container-shadow-color: #000}html .mat-mdc-fab.mat-primary,html .mat-mdc-mini-fab.mat-primary{--mdc-fab-container-color: #4caf50;--mat-fab-foreground-color: #000;--mat-fab-state-layer-color: #000;--mat-fab-ripple-color: rgba(0, 0, 0, .1)}html .mat-mdc-fab.mat-accent,html .mat-mdc-mini-fab.mat-accent{--mdc-fab-container-color: #ff4081;--mat-fab-foreground-color: #fff;--mat-fab-state-layer-color: #fff;--mat-fab-ripple-color: rgba(255, 255, 255, .1)}html .mat-mdc-fab.mat-warn,html .mat-mdc-mini-fab.mat-warn{--mdc-fab-container-color: #f44336;--mat-fab-foreground-color: #fff;--mat-fab-state-layer-color: #fff;--mat-fab-ripple-color: rgba(255, 255, 255, .1)}html{--mdc-snackbar-container-shape: 4px}html{--mdc-snackbar-container-color: #333333;--mdc-snackbar-supporting-text-color: rgba(255, 255, 255, .87);--mat-snack-bar-button-color: #ff4081}html{--mat-table-row-item-outline-width: 1px}html{--mat-table-background-color: white;--mat-table-header-headline-color: rgba(0, 0, 0, .87);--mat-table-row-item-label-text-color: rgba(0, 0, 0, .87);--mat-table-row-item-outline-color: rgba(0, 0, 0, .12)}html{--mat-table-header-container-height: 56px;--mat-table-footer-container-height: 52px;--mat-table-row-item-container-height: 52px}html{--mdc-circular-progress-active-indicator-width: 4px;--mdc-circular-progress-size: 48px}html{--mdc-circular-progress-active-indicator-color: #4caf50}html .mat-accent{--mdc-circular-progress-active-indicator-color: #ff4081}html .mat-warn{--mdc-circular-progress-active-indicator-color: #f44336}.mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:Roboto,sans-serif;font-family:var(--mat-badge-text-font, Roboto, sans-serif);font-size:12px;font-size:var(--mat-badge-text-size, 12px);font-weight:600;font-weight:var(--mat-badge-text-weight, 600)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px;font-size:9px;font-size:var(--mat-badge-small-size-text-size, 9px)}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px;font-size:24px;font-size:var(--mat-badge-large-size-text-size, 24px)}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}html{--mat-badge-background-color: #4caf50;--mat-badge-text-color: rgba(0, 0, 0, .87);--mat-badge-disabled-state-background-color: #b9b9b9;--mat-badge-disabled-state-text-color: rgba(0, 0, 0, .38)}.mat-badge-accent{--mat-badge-background-color: #ff4081;--mat-badge-text-color: white}.mat-badge-warn{--mat-badge-background-color: #f44336;--mat-badge-text-color: white}html{--mat-bottom-sheet-container-shape: 4px}html{--mat-bottom-sheet-container-text-color: rgba(0, 0, 0, .87);--mat-bottom-sheet-container-background-color: white}html{--mat-legacy-button-toggle-height: 36px;--mat-legacy-button-toggle-shape: 2px;--mat-legacy-button-toggle-focus-state-layer-opacity: 1;--mat-standard-button-toggle-shape: 4px;--mat-standard-button-toggle-hover-state-layer-opacity: .04;--mat-standard-button-toggle-focus-state-layer-opacity: .12}html{--mat-legacy-button-toggle-text-color: rgba(0, 0, 0, .38);--mat-legacy-button-toggle-state-layer-color: rgba(0, 0, 0, .12);--mat-legacy-button-toggle-selected-state-text-color: rgba(0, 0, 0, .54);--mat-legacy-button-toggle-selected-state-background-color: #e0e0e0;--mat-legacy-button-toggle-disabled-state-text-color: rgba(0, 0, 0, .26);--mat-legacy-button-toggle-disabled-state-background-color: #eeeeee;--mat-legacy-button-toggle-disabled-selected-state-background-color: #bdbdbd;--mat-standard-button-toggle-text-color: rgba(0, 0, 0, .87);--mat-standard-button-toggle-background-color: white;--mat-standard-button-toggle-state-layer-color: black;--mat-standard-button-toggle-selected-state-background-color: #e0e0e0;--mat-standard-button-toggle-selected-state-text-color: rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-state-text-color: rgba(0, 0, 0, .26);--mat-standard-button-toggle-disabled-state-background-color: white;--mat-standard-button-toggle-disabled-selected-state-text-color: rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-selected-state-background-color: #bdbdbd;--mat-standard-button-toggle-divider-color: #e0e0e0}html{--mat-standard-button-toggle-height: 48px}html{--mat-datepicker-calendar-date-selected-state-text-color: rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-selected-state-background-color: #4caf50;--mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(76, 175, 80, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color: rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-focus-state-background-color: rgba(76, 175, 80, .3);--mat-datepicker-calendar-date-hover-state-background-color: rgba(76, 175, 80, .3);--mat-datepicker-toggle-active-state-icon-color: #4caf50;--mat-datepicker-calendar-date-in-range-state-background-color: rgba(76, 175, 80, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e;--mat-datepicker-toggle-icon-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-body-label-text-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-period-button-icon-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-navigation-button-icon-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-header-divider-color: rgba(0, 0, 0, .12);--mat-datepicker-calendar-header-text-color: rgba(0, 0, 0, .54);--mat-datepicker-calendar-date-today-outline-color: rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-today-disabled-state-outline-color: rgba(0, 0, 0, .18);--mat-datepicker-calendar-date-text-color: rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-outline-color: transparent;--mat-datepicker-calendar-date-disabled-state-text-color: rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-preview-state-outline-color: rgba(0, 0, 0, .24);--mat-datepicker-range-input-separator-color: rgba(0, 0, 0, .87);--mat-datepicker-range-input-disabled-state-separator-color: rgba(0, 0, 0, .38);--mat-datepicker-range-input-disabled-state-text-color: rgba(0, 0, 0, .38);--mat-datepicker-calendar-container-background-color: white;--mat-datepicker-calendar-container-text-color: rgba(0, 0, 0, .87)}.mat-datepicker-content.mat-accent{--mat-datepicker-calendar-date-selected-state-text-color: white;--mat-datepicker-calendar-date-selected-state-background-color: #ff4081;--mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(255, 64, 129, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color: white;--mat-datepicker-calendar-date-focus-state-background-color: rgba(255, 64, 129, .3);--mat-datepicker-calendar-date-hover-state-background-color: rgba(255, 64, 129, .3);--mat-datepicker-calendar-date-in-range-state-background-color: rgba(255, 64, 129, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e}.mat-datepicker-content.mat-warn{--mat-datepicker-calendar-date-selected-state-text-color: white;--mat-datepicker-calendar-date-selected-state-background-color: #f44336;--mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(244, 67, 54, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color: white;--mat-datepicker-calendar-date-focus-state-background-color: rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-hover-state-background-color: rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-in-range-state-background-color: rgba(244, 67, 54, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e}.mat-datepicker-toggle-active.mat-accent{--mat-datepicker-toggle-active-state-icon-color: #ff4081}.mat-datepicker-toggle-active.mat-warn{--mat-datepicker-toggle-active-state-icon-color: #f44336}.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base{--mdc-icon-button-state-layer-size: 40px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:8px}.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base .mat-mdc-button-touch-target{display:none}html{--mat-divider-width: 1px}html{--mat-divider-color: rgba(0, 0, 0, .12)}html{--mat-expansion-container-shape: 4px}html{--mat-expansion-container-background-color: white;--mat-expansion-container-text-color: rgba(0, 0, 0, .87);--mat-expansion-actions-divider-color: rgba(0, 0, 0, .12);--mat-expansion-header-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-expansion-header-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-expansion-header-disabled-state-text-color: rgba(0, 0, 0, .26);--mat-expansion-header-text-color: rgba(0, 0, 0, .87);--mat-expansion-header-description-color: rgba(0, 0, 0, .54);--mat-expansion-header-indicator-color: rgba(0, 0, 0, .54)}html{--mat-expansion-header-collapsed-state-height: 48px;--mat-expansion-header-expanded-state-height: 64px}html{--mat-icon-color: inherit}.mat-icon.mat-primary{--mat-icon-color: #4caf50}.mat-icon.mat-accent{--mat-icon-color: #ff4081}.mat-icon.mat-warn{--mat-icon-color: #f44336}html{--mat-sidenav-container-shape: 0}html{--mat-sidenav-container-divider-color: rgba(0, 0, 0, .12);--mat-sidenav-container-background-color: white;--mat-sidenav-container-text-color: rgba(0, 0, 0, .87);--mat-sidenav-content-background-color: #fafafa;--mat-sidenav-content-text-color: rgba(0, 0, 0, .87);--mat-sidenav-scrim-color: rgba(0, 0, 0, .6)}html{--mat-stepper-header-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-header-selected-state-icon-background-color: #4caf50;--mat-stepper-header-selected-state-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-header-done-state-icon-background-color: #4caf50;--mat-stepper-header-done-state-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-header-edit-state-icon-background-color: #4caf50;--mat-stepper-header-edit-state-icon-foreground-color: rgba(0, 0, 0, .87);--mat-stepper-container-color: white;--mat-stepper-line-color: rgba(0, 0, 0, .12);--mat-stepper-header-hover-state-layer-color: rgba(0, 0, 0, .04);--mat-stepper-header-focus-state-layer-color: rgba(0, 0, 0, .04);--mat-stepper-header-label-text-color: rgba(0, 0, 0, .54);--mat-stepper-header-optional-label-text-color: rgba(0, 0, 0, .54);--mat-stepper-header-selected-state-label-text-color: rgba(0, 0, 0, .87);--mat-stepper-header-error-state-label-text-color: #f44336;--mat-stepper-header-icon-background-color: rgba(0, 0, 0, .54);--mat-stepper-header-error-state-icon-foreground-color: #f44336;--mat-stepper-header-error-state-icon-background-color: transparent}html .mat-step-header.mat-accent{--mat-stepper-header-icon-foreground-color: white;--mat-stepper-header-selected-state-icon-background-color: #ff4081;--mat-stepper-header-selected-state-icon-foreground-color: white;--mat-stepper-header-done-state-icon-background-color: #ff4081;--mat-stepper-header-done-state-icon-foreground-color: white;--mat-stepper-header-edit-state-icon-background-color: #ff4081;--mat-stepper-header-edit-state-icon-foreground-color: white}html .mat-step-header.mat-warn{--mat-stepper-header-icon-foreground-color: white;--mat-stepper-header-selected-state-icon-background-color: #f44336;--mat-stepper-header-selected-state-icon-foreground-color: white;--mat-stepper-header-done-state-icon-background-color: #f44336;--mat-stepper-header-done-state-icon-foreground-color: white;--mat-stepper-header-edit-state-icon-background-color: #f44336;--mat-stepper-header-edit-state-icon-foreground-color: white}html{--mat-stepper-header-height: 72px}html{--mat-sort-arrow-color: #757575}html{--mat-toolbar-container-background-color: whitesmoke;--mat-toolbar-container-text-color: rgba(0, 0, 0, .87)}.mat-toolbar.mat-primary{--mat-toolbar-container-background-color: #4caf50;--mat-toolbar-container-text-color: rgba(0, 0, 0, .87)}.mat-toolbar.mat-accent{--mat-toolbar-container-background-color: #ff4081;--mat-toolbar-container-text-color: white}.mat-toolbar.mat-warn{--mat-toolbar-container-background-color: #f44336;--mat-toolbar-container-text-color: white}html{--mat-toolbar-standard-height: 64px;--mat-toolbar-mobile-height: 56px}html{--mat-tree-container-background-color: white;--mat-tree-node-text-color: rgba(0, 0, 0, .87)}html{--mat-tree-node-min-height: 48px}header{display:block;background:#202020;background-position:30px center;background-repeat:no-repeat;background-size:auto 40%;margin:0;padding-top:35px;padding-bottom:-20px;min-height:50px;text-align:center;color:#fff}header #appTitle{font-size:xx-large;font-weight:bolder;color:#65a800}body{font-family:Roboto,Helvetica Neue,sans-serif;background-color:#65a800;margin:0;padding:0;overflow-y:hidden;overflow-x:hidden;-webkit-user-select:none;user-select:none}footer{display:block;background-color:#202020;min-width:100%;width:auto;margin:0;padding:2px 0;color:#fff;font-size:smaller;text-align:left}footer .wh-text{color:#65a800;margin:0 10px}footer .infoLinks{text-align:right;position:fixed;right:0;margin-right:30px}footer .infoLinks a{color:#fff;margin-left:10px;text-decoration:none}footer .infoLinks a:hover{color:#65a800}\n']
    }]
  }], null, null);
})();
var _HeaderComponent = class _HeaderComponent {
  constructor() {
    this.title = "";
  }
};
_HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderComponent,
  selectors: [["app-header"]],
  inputs: {
    title: "title"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["id", "appTitle"], ["href", "/THI"], ["src", "assets/THIOnlineLogo_BoxOffen_small.png", "alt", "THIOnline-Logo", "id", "THILogo", "height", "77", "width", "100", 2, "position", "absolute", "right", "30px", "height", "50px", "width", "auto", "float", "right", "top", "15px"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "header")(1, "span", 0);
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "a", 1);
      ɵɵelement(4, "img", 2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.title);
    }
  }
});
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "app-header",
      standalone: true,
      imports: [],
      template: '<header>\n    <span id="appTitle">{{ title }}</span>\n    <a href="/THI">\n      <img\n        src="assets/THIOnlineLogo_BoxOffen_small.png"\n        alt="THIOnline-Logo"\n        id="THILogo"\n        style="\n                  position: absolute;\n                  right: 30px;\n                  height: 50px;\n                  width: auto;\n                  float: right;\n                  top: 15px;\n              "\n        height="77" width="100"/>\n    </a>\n  </header>\n  '
    }]
  }], null, {
    title: [{
      type: Input
    }]
  });
})();
var _InputComponent = class _InputComponent {
  constructor(service) {
    this.service = service;
    this.title = "";
  }
  ngOnInit() {
    this.setContent("");
  }
  setContent(tapecontent) {
    this.service.inputChanged(tapecontent);
  }
  updateContent(event) {
    this.setContent(event.target.value);
  }
  isReady() {
    return this.service.isStartStateDefined();
  }
  isAccepting() {
    return this.service.isAccepting();
  }
};
_InputComponent.ɵfac = function InputComponent_Factory(t) {
  return new (t || _InputComponent)(ɵɵdirectiveInject(StatemachineService));
};
_InputComponent.ɵcmp = ɵɵdefineComponent({
  type: _InputComponent,
  selectors: [["app-input"]],
  inputs: {
    title: "title"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 5,
  consts: [["type", "text", "autocomplete", "off", 3, "ngClass", "input"]],
  template: function InputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span");
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "input", 0);
      ɵɵlistener("input", function InputComponent_Template_input_input_2_listener($event) {
        return ctx.updateContent($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate1("", ctx.title, ":");
      ɵɵadvance();
      ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c42, ctx.isReady() && ctx.isAccepting(), ctx.isReady() && !ctx.isAccepting()));
    }
  },
  dependencies: [CommonModule, NgClass],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:10px;gap:10px}.tapeInput[_ngcontent-%COMP%]{border-radius:5px;border-width:2px;border-style:solid;box-sizing:border-box;height:30px;font-size:large}.accepting[_ngcontent-%COMP%]{border-color:green}.notAccepting[_ngcontent-%COMP%]{border-color:red}span[_ngcontent-%COMP%]{font-size:large}"]
});
var InputComponent = _InputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{
      selector: "app-input",
      standalone: true,
      imports: [CommonModule],
      template: '<span>{{ title }}:</span>\n<input\n  type="text"\n  autocomplete="off"\n  [ngClass]="{\n    tapeInput: true,\n    accepting: isReady() && isAccepting(),\n    notAccepting: isReady() && !isAccepting() \n  }"\n  (input)="updateContent($event)"\n/>\n',
      styles: [":host{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:10px;gap:10px}.tapeInput{border-radius:5px;border-width:2px;border-style:solid;box-sizing:border-box;height:30px;font-size:large}.accepting{border-color:green}.notAccepting{border-color:red}span{font-size:large}\n"]
    }]
  }], () => [{
    type: StatemachineService
  }], {
    title: [{
      type: Input
    }]
  });
})();
var _MenuComponent = class _MenuComponent {
  constructor(service, http) {
    this.service = service;
    this.http = http;
    this.vorlesungsbeispiele = [];
    this.uebungsaufgaben = [];
  }
  ngOnInit() {
    this.loadConfig();
  }
  createNewInstance() {
    this.service.createNewInstance();
  }
  loadFromBrowserCache() {
    this.service.loadFromBrowserCache();
  }
  saveToBrowserCache() {
    this.service.saveToBrowserCache();
  }
  createInstanceFromJSON(configuration) {
    this.service.createInstanceFromJSON(configuration);
  }
  saveToLocalStorage() {
    this.service.saveToLocalStorage();
  }
  openHelpDialog() {
    this.service.openHelpDialog();
  }
  onFileUpload(e) {
    const target = e.target;
    const files = target.files;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e2) => {
      const content = reader.result;
      this.createInstanceFromJSON(JSON.parse(content));
    };
    reader.readAsText(file);
    target.value = "";
  }
  loadConfig() {
    const url = `assets/config.json`;
    this.http.get(url).subscribe({
      next: (config) => {
        this.loadTasks("Vorlesungsbeispiele", this.vorlesungsbeispiele, config);
        this.loadTasks("Uebungsaufgaben", this.uebungsaufgaben, config);
      },
      error: (error) => {
        console.error("Failed to load config:", error);
      }
    });
  }
  loadTasks(type, targetArray, config) {
    return __async(this, null, function* () {
      const tasks = config[type];
      if (tasks && Array.isArray(tasks)) {
        for (const [index, task] of tasks.entries()) {
          const url = `assets/${type}/${task.filename}.json`;
          try {
            const data = yield firstValueFrom(this.http.get(url));
            targetArray[index] = data;
          } catch (error) {
            console.error(`Failed to load ${type}/${task.filename}:`, error);
          }
        }
      } else {
        console.warn(`No tasks found for type: ${type}`);
      }
    });
  }
  fetchJSON(type, name) {
    return __async(this, null, function* () {
      const response = yield fetch((this.baseURL || "") + "/assets/" + type + "/" + name + ".json");
      const json = yield response.json();
      return json;
    });
  }
};
_MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || _MenuComponent)(ɵɵdirectiveInject(StatemachineService), ɵɵdirectiveInject(HttpClient));
};
_MenuComponent.ɵcmp = ɵɵdefineComponent({
  type: _MenuComponent,
  selectors: [["app-menu"]],
  inputs: {
    baseURL: "baseURL"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 37,
  vars: 5,
  consts: [["mat-icon-button", "", "aria-label", "Menü öffnen", 3, "matMenuTriggerFor"], [1, "myMenuItem"], ["settingsMenu", ""], ["mat-menu-item", "", 1, "myMenuItem", 3, "click"], ["for", "inputTag"], ["mat-menu-item", "", 1, "myMenuItem"], ["id", "inputTag", "type", "file", 3, "change"], ["mat-menu-item", "", 1, "myMenuItem", 3, "matMenuTriggerFor"], ["Vorlesungsbeispiele", ""], ["mat-menu-item", "", "class", "myMenuItem", 3, "click", 4, "ngFor", "ngForOf"], ["Uebungsaufgaben", ""]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0)(1, "mat-icon");
      ɵɵtext(2, "menu");
      ɵɵelementEnd()();
      ɵɵelementStart(3, "mat-menu", 1, 2)(5, "button", 3);
      ɵɵlistener("click", function MenuComponent_Template_button_click_5_listener() {
        return ctx.createNewInstance();
      });
      ɵɵelementStart(6, "mat-icon");
      ɵɵtext(7, "fiber_new");
      ɵɵelementEnd();
      ɵɵtext(8, "Neue Instanz ");
      ɵɵelementEnd();
      ɵɵelementStart(9, "label", 4)(10, "menu", 5)(11, "mat-icon");
      ɵɵtext(12, "file_upload");
      ɵɵelementEnd();
      ɵɵtext(13, " Laden aus Datei ");
      ɵɵelementStart(14, "input", 6);
      ɵɵlistener("change", function MenuComponent_Template_input_change_14_listener($event) {
        return ctx.onFileUpload($event);
      });
      ɵɵelementEnd()()();
      ɵɵelementStart(15, "button", 3);
      ɵɵlistener("click", function MenuComponent_Template_button_click_15_listener() {
        return ctx.saveToLocalStorage();
      });
      ɵɵelementStart(16, "mat-icon");
      ɵɵtext(17, "file_download");
      ɵɵelementEnd();
      ɵɵtext(18, "Speichern in Datei ");
      ɵɵelementEnd();
      ɵɵelementStart(19, "button", 7)(20, "mat-icon");
      ɵɵtext(21, "open_in_browser");
      ɵɵelementEnd();
      ɵɵtext(22, "Übungsaufgaben laden ");
      ɵɵelementEnd();
      ɵɵelementStart(23, "button", 7)(24, "mat-icon");
      ɵɵtext(25, "open_in_browser");
      ɵɵelementEnd();
      ɵɵtext(26, "Vorlesungsbeispiele laden ");
      ɵɵelementEnd();
      ɵɵelementStart(27, "button", 3);
      ɵɵlistener("click", function MenuComponent_Template_button_click_27_listener() {
        return ctx.openHelpDialog();
      });
      ɵɵelementStart(28, "mat-icon");
      ɵɵtext(29, "help");
      ɵɵelementEnd();
      ɵɵtext(30, "Hilfe ");
      ɵɵelementEnd()();
      ɵɵelementStart(31, "mat-menu", null, 8);
      ɵɵtemplate(33, MenuComponent_button_33_Template, 2, 1, "button", 9);
      ɵɵelementEnd();
      ɵɵelementStart(34, "mat-menu", null, 10);
      ɵɵtemplate(36, MenuComponent_button_36_Template, 2, 1, "button", 9);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(4);
      const _r1 = ɵɵreference(32);
      const _r3 = ɵɵreference(35);
      ɵɵproperty("matMenuTriggerFor", _r0);
      ɵɵadvance(19);
      ɵɵproperty("matMenuTriggerFor", _r3);
      ɵɵadvance(4);
      ɵɵproperty("matMenuTriggerFor", _r1);
      ɵɵadvance(10);
      ɵɵproperty("ngForOf", ctx.vorlesungsbeispiele);
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.uebungsaufgaben);
    }
  },
  dependencies: [CommonModule, NgForOf, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger],
  styles: ["#inputTag[_ngcontent-%COMP%]{display:none}"]
});
var MenuComponent = _MenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
      template: '<button mat-icon-button [matMenuTriggerFor]="settingsMenu" aria-label="Menü öffnen">\n    <mat-icon>menu</mat-icon>\n</button>\n\n<mat-menu #settingsMenu class="myMenuItem">\n    <button mat-menu-item class="myMenuItem" (click)="createNewInstance()">\n        <mat-icon>fiber_new</mat-icon>Neue Instanz\n    </button>\n\n    <label for="inputTag">\n        <menu mat-menu-item class="myMenuItem">\n            <mat-icon>file_upload</mat-icon>\n            Laden aus Datei\n            <input (change)="onFileUpload($event)" id="inputTag" type="file"/>\n        </menu>\n    </label>\n\n\n    <button mat-menu-item class="myMenuItem" (click)="saveToLocalStorage()">\n        <mat-icon>file_download</mat-icon>Speichern in Datei\n    </button>\n\n    <button mat-menu-item class="myMenuItem" [matMenuTriggerFor]="Uebungsaufgaben">\n        <mat-icon>open_in_browser</mat-icon>Übungsaufgaben laden\n    </button>\n\n    <button mat-menu-item class="myMenuItem" [matMenuTriggerFor]="Vorlesungsbeispiele">\n        <mat-icon>open_in_browser</mat-icon>Vorlesungsbeispiele laden\n    </button>\n\n    <button mat-menu-item class="myMenuItem" (click)="openHelpDialog()">\n        <mat-icon>help</mat-icon>Hilfe\n    </button>\n</mat-menu>\n\n<mat-menu #Vorlesungsbeispiele>\n    <button mat-menu-item class="myMenuItem" *ngFor="let aufgabe of vorlesungsbeispiele" (click)="createInstanceFromJSON(aufgabe)">\n        {{ aufgabe.title }}\n    </button>\n</mat-menu>\n\n<mat-menu #Uebungsaufgaben>\n    <button mat-menu-item class="myMenuItem" *ngFor="let aufgabe of uebungsaufgaben" (click)="createInstanceFromJSON(aufgabe)">\n        {{ aufgabe.title }}\n    </button>\n</mat-menu>\n',
      styles: ["#inputTag{display:none}\n"]
    }]
  }], () => [{
    type: StatemachineService
  }, {
    type: HttpClient
  }], {
    baseURL: [{
      type: Input
    }]
  });
})();
var _HelpDialogComponent = class _HelpDialogComponent {
  constructor() {
    this.text = "";
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.playVideoAtIndex(0);
  }
  onTabChange(index) {
    this.playVideoAtIndex(index);
  }
  playVideoAtIndex(index) {
    this.videos.forEach((vid, idx) => {
      const videoElement = vid.nativeElement;
      if (idx === index) {
        videoElement.play();
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    });
  }
};
_HelpDialogComponent.ɵfac = function HelpDialogComponent_Factory(t) {
  return new (t || _HelpDialogComponent)();
};
_HelpDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _HelpDialogComponent,
  selectors: [["app-help-dialog"]],
  viewQuery: function HelpDialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c52, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.videos = _t);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 60,
  vars: 0,
  consts: [["mat-button", "", 1, "button-close", 3, "mat-dialog-close"], ["mat-dialog-title", ""], [1, "scrollable-tab-group", 3, "selectedIndexChange"], ["label", "Zustand hinzufügen"], [1, "tab-content"], [1, "video-description"], ["loop", "", "muted", ""], ["videoRef", ""], ["src", "../../../assets/Videos/Zustand hinzufügen.mp4", "type", "video/mp4"], ["label", "Zustand bearbeiten"], ["src", "../../../assets/Videos/Zustand bearbeiten.mp4", "type", "video/mp4"], ["label", "Zustand verschieben"], ["src", "../../../assets/Videos/Zustand verschieben.mp4", "type", "video/mp4"], ["label", "Übergang hinzufügen"], ["src", "../../../assets/Videos/Übergang hinzufügen.mp4", "type", "video/mp4"], ["label", "Übergang bearbeiten"], ["src", "../../../assets/Videos/Übergang bearbeiten.mp4", "type", "video/mp4"], ["label", "Übergang + Zustand erstellen"], ["src", "../../../assets/Videos/Übergang mit Zustand erstellen.mp4", "type", "video/mp4"]],
  template: function HelpDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0)(1, "mat-icon");
      ɵɵtext(2, "close");
      ɵɵelementEnd()();
      ɵɵelementStart(3, "h1", 1);
      ɵɵtext(4, "Bedienungsanweisungen");
      ɵɵelementEnd();
      ɵɵelementStart(5, "mat-tab-group", 2);
      ɵɵlistener("selectedIndexChange", function HelpDialogComponent_Template_mat_tab_group_selectedIndexChange_5_listener($event) {
        return ctx.onTabChange($event);
      });
      ɵɵelementStart(6, "mat-tab", 3)(7, "div", 4)(8, "div", 5)(9, "p");
      ɵɵtext(10, " Neue Zustände können per Doppelklick auf die Arbeitsfläche hinzugefügt werden. ");
      ɵɵelementEnd()();
      ɵɵelementStart(11, "video", 6, 7);
      ɵɵelement(13, "source", 8);
      ɵɵtext(14, " Ihr Browser unterstützt kein Video. ");
      ɵɵelementEnd()()();
      ɵɵelementStart(15, "mat-tab", 9)(16, "div", 4)(17, "div", 5)(18, "p");
      ɵɵtext(19, " Um Zustände zu ändern/löschen, muss ein Rechtsklick auf die Mitte des Zustands ausgeführt werden. Anschließend kann der Zustand in einem Dialogmenü verändert oder gelöscht werden.");
      ɵɵelementEnd()();
      ɵɵelementStart(20, "video", 6, 7);
      ɵɵelement(22, "source", 10);
      ɵɵtext(23, " Ihr Browser unterstützt kein Video. ");
      ɵɵelementEnd()()();
      ɵɵelementStart(24, "mat-tab", 11)(25, "div", 4)(26, "div", 5)(27, "p");
      ɵɵtext(28, "Um Zustände zu verschieben muss ein Linksklick auf die Mitte des Zustands gehalten werden und zur gewünschten Position gezogen werden.");
      ɵɵelementEnd()();
      ɵɵelementStart(29, "video", 6, 7);
      ɵɵelement(31, "source", 12);
      ɵɵtext(32, " Ihr Browser unterstützt kein Video. ");
      ɵɵelementEnd()()();
      ɵɵelementStart(33, "mat-tab", 13)(34, "div", 4)(35, "div", 5)(36, "p");
      ɵɵtext(37, "Um Zustände zu verbinden, muss erstmal mit einem Linksklick vom Rand des Ausgangszustands eine Linie zum gewünschten Zielzustand gezogen werden. Anschließend muss ein Eingabesymbol, Schreibsymbol und die Bewegung eingegeben und bestätigt werden. ");
      ɵɵelementEnd()();
      ɵɵelementStart(38, "video", 6, 7);
      ɵɵelement(40, "source", 14);
      ɵɵtext(41, " Ihr Browser unterstützt kein Video. ");
      ɵɵelementEnd()()();
      ɵɵelementStart(42, "mat-tab", 15)(43, "div", 4)(44, "div", 5)(45, "p");
      ɵɵtext(46, "Um Übergänge zu bearbeiten, muss ein Rechtsklick auf den jeweiligen Übergang ausgeführt werden. Anschließend kann der Übergang in einem Dialogmenü bearbeitet werden. ");
      ɵɵelementEnd()();
      ɵɵelementStart(47, "video", 6, 7);
      ɵɵelement(49, "source", 16);
      ɵɵtext(50, " Ihr Browser unterstützt kein Video. ");
      ɵɵelementEnd()()();
      ɵɵelementStart(51, "mat-tab", 17)(52, "div", 4)(53, "div", 5)(54, "p");
      ɵɵtext(55, "Es ist möglich, gleichzeitig einen Übergang und einen Zustand zu erstellen. Dafür muss mit einem Linksklick vom Rand des Ausgangszustandes eine Linie auf eine leere Stelle der Arbeitsfläche gezogen werden.");
      ɵɵelementEnd()();
      ɵɵelementStart(56, "video", 6, 7);
      ɵɵelement(58, "source", 18);
      ɵɵtext(59, " Ihr Browser unterstützt kein Video. ");
      ɵɵelementEnd()()()();
    }
  },
  dependencies: [MatIcon, MatTabGroup, MatTab, MatDialogClose],
  styles: ['@charset "UTF-8";.tab-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.video-description[_ngcontent-%COMP%]{width:100%;height:100%;margin-bottom:0;margin-top:10px}.mat-tab-group[_ngcontent-%COMP%]{max-width:800px}video[_ngcontent-%COMP%]{width:100%;height:auto}p[_ngcontent-%COMP%]{font-size:16px}']
});
var HelpDialogComponent = _HelpDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-help-dialog",
      standalone: true,
      imports: [MatIcon, MatTabGroup, MatTab, MatTabBody, MatTabHeader, MatTabLabel, MatTabNav, MatTabLink, MatDialogClose],
      template: '<button class="button-close" mat-button [mat-dialog-close]>\n    <mat-icon>close</mat-icon>\n</button>\n<h1 mat-dialog-title>Bedienungsanweisungen</h1>\n    \n<mat-tab-group class="scrollable-tab-group"  (selectedIndexChange)="onTabChange($event)">\n    <mat-tab label="Zustand hinzufügen">\n        <div class="tab-content">\n            <div class="video-description">\n                <p> Neue Zustände können per Doppelklick auf die Arbeitsfläche\n                    hinzugefügt werden. </p>\n            </div>\n            <video #videoRef loop muted>\n                <source src="../../../assets/Videos/Zustand hinzufügen.mp4" type="video/mp4">\n                Ihr Browser unterstützt kein Video.\n            </video>\n        </div>\n    </mat-tab>\n    <mat-tab label="Zustand bearbeiten">\n        <div class="tab-content">\n            <div class="video-description">\n                <p> Um Zustände zu ändern/löschen, muss ein Rechtsklick auf\n                    die Mitte des Zustands ausgeführt werden.\n                    Anschließend kann der Zustand in einem Dialogmenü verändert oder\n                    gelöscht werden.</p>\n            </div>\n            <video #videoRef loop muted>\n                <source src="../../../assets/Videos/Zustand bearbeiten.mp4" type="video/mp4">\n                Ihr Browser unterstützt kein Video.\n            </video>\n        </div>\n    </mat-tab>\n    <mat-tab label="Zustand verschieben">\n        <div class="tab-content">\n            <div class="video-description">\n                <p>Um Zustände zu verschieben muss ein Linksklick auf die Mitte des Zustands \n                    gehalten werden und zur gewünschten Position gezogen werden.</p>\n            </div>\n            <video #videoRef loop muted>\n                <source src="../../../assets/Videos/Zustand verschieben.mp4" type="video/mp4">\n                Ihr Browser unterstützt kein Video.\n            </video>\n        </div>\n    </mat-tab>\n    <mat-tab label="Übergang hinzufügen">\n        <div class="tab-content">\n            <div class="video-description">\n                <p>Um Zustände zu verbinden, muss erstmal mit einem Linksklick vom Rand des Ausgangszustands eine\n                    Linie zum gewünschten Zielzustand gezogen werden.\n                    Anschließend muss ein Eingabesymbol, Schreibsymbol und die Bewegung eingegeben und bestätigt werden. </p>\n            </div>\n            <video #videoRef loop muted>\n                <source src="../../../assets/Videos/Übergang hinzufügen.mp4" type="video/mp4">\n                Ihr Browser unterstützt kein Video.\n            </video>\n        </div>\n    </mat-tab>\n    <mat-tab label="Übergang bearbeiten">\n        <div class="tab-content">\n            <div class="video-description">\n                <p>Um Übergänge zu bearbeiten, muss ein Rechtsklick auf den jeweiligen Übergang ausgeführt werden.\n                    Anschließend kann der Übergang in einem Dialogmenü bearbeitet werden.\n                </p>\n            </div>\n            <video #videoRef loop muted>\n                <source src="../../../assets/Videos/Übergang bearbeiten.mp4" type="video/mp4">\n                Ihr Browser unterstützt kein Video.\n            </video>\n        </div>\n    </mat-tab>\n    <mat-tab label="Übergang + Zustand erstellen">\n        <div class="tab-content">\n            <div class="video-description">\n                <p>Es ist möglich, gleichzeitig einen Übergang und einen Zustand zu erstellen.\n                    Dafür muss mit einem Linksklick vom Rand des Ausgangszustandes eine\n                    Linie auf eine leere Stelle der Arbeitsfläche gezogen werden.</p>\n            </div>\n            <video #videoRef loop muted>\n                <source src="../../../assets/Videos/Übergang mit Zustand erstellen.mp4" type="video/mp4">\n                Ihr Browser unterstützt kein Video.\n            </video>\n        </div>\n    </mat-tab>\n</mat-tab-group>\n\n\n<!-- <h2>Allgemein</h2>\n<ul>\n    <li>Zustand hinzufügen</li>\n    <ul>\n        <li>\n            Neue Zustände können per Doppelklick auf die Arbeitsfläche\n            hinzugefügt werden.\n        </li>\n    </ul>\n\n    <li>Zustände verbinden</li>\n    <ul>\n        <li>\n            Um Zustände zu verbinden, muss vom Rand des Ausgangszustandes eine\n            Linie zum gewünschten Zielzustand gezogen werden.\n        </li>\n        <li>\n            Es ist auch möglich, anstatt einen Zielzustand eine Stelle auf der\n            Arbeitsfläche auszuwählen. <br />\n            Dadurch wird der neue Zielzustand automatisch erstellt.\n        </li>\n    </ul>\n    <li>Elemente ändern/löschen</li>\n    <ul>\n        <li>\n            Um Elemente zu ändern/löschen, muss ein Doppelklick auf das\n            entsprechende Element ausgeführt werden. <br />\n            Anschließend kann das Element in einem Dialogmenü verändert oder\n            gelöscht werden.\n        </li>\n    </ul>\n    <li>Weitere Aktionen</li>\n    <ul>\n        <li>\n            Durch Klicken des Menübuttons (oben links) sind einige weitere\n            Aktionen möglich,<br />\n            wie z.B. abspeichern und laden eines Automaten und\n            Übungsaufgaben/Beispielaufgaben laden.\n        </li>\n    </ul>\n</ul>\n\n<h2>Validierung</h2>\n<ul>\n    <li>Wörter validieren</li>\n    <ul>\n        <li>\n            Um zu prüfen, ob ein bestimmtes Wort vom Automaten akzeptiert wird,\n            muss es in das Worteingabefeld eingegeben werden.<br />\n            Falls die Umrandung das Eingabefeldes grün ist, wird der Automat\n            akzeptiert, bei Rot wird er nicht akzeptiert.\n        </li>\n        <li>\n            Es ist auch möglich, mehrere "akzeptierende" und "nicht\n            akzeptierende" Wörter gleichzeitig zu testen. <br />\n            Die Wörter können durch Betätigen des entsprechenden "+"-Buttons\n            hinzugefügt und anschließend bearbeitet werden.\n        </li>\n    </ul>\n    <li>Wort Schritt für Schritt testen</li>\n    <ul>\n        <li>\n            Mittels der zwei Pfeilbuttons neben dem Worteingabefeld kann das\n            aktuelle Wort Schritt für Schritt durchgeschaltet werden. <br />\n            Die Zustände des Automaten werden daraufhin farblich markiert{{\n                text\n            }}.\n        </li>\n    </ul>\n</ul> -->\n',
      styles: ['@charset "UTF-8";.tab-content{display:flex;flex-direction:column}.video-description{width:100%;height:100%;margin-bottom:0;margin-top:10px}.mat-tab-group{max-width:800px}video{width:100%;height:auto}p{font-size:16px}\n']
    }]
  }], () => [], {
    videos: [{
      type: ViewChildren,
      args: ["videoRef"]
    }]
  });
})();
var _TestcasebuttonComponent = class _TestcasebuttonComponent {
  constructor(service) {
    this.service = service;
  }
  get testCaseViewIsVisible() {
    return this.service.testCaseViewIsVisible;
  }
  toggleTestcaseView() {
    this.service.testCaseViewIsVisible = !this.service.testCaseViewIsVisible;
    this.service.testcaseViewToggled?.();
  }
};
_TestcasebuttonComponent.ɵfac = function TestcasebuttonComponent_Factory(t) {
  return new (t || _TestcasebuttonComponent)(ɵɵdirectiveInject(StatemachineService));
};
_TestcasebuttonComponent.ɵcmp = ɵɵdefineComponent({
  type: _TestcasebuttonComponent,
  selectors: [["app-testcasebutton"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["mat-icon-button", "", 1, "toggleTestcaseView", 3, "click"], ["src", "assets/testcases.svg", "alt", "testcases"]],
  template: function TestcasebuttonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function TestcasebuttonComponent_Template_button_click_0_listener() {
        return ctx.toggleTestcaseView();
      });
      ɵɵelement(1, "img", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("pressed", ctx.testCaseViewIsVisible);
    }
  },
  dependencies: [MatIconModule, MatButtonModule, MatIconButton],
  styles: ["button.pressed[_ngcontent-%COMP%]{background-color:#ddd}"]
});
var TestcasebuttonComponent = _TestcasebuttonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestcasebuttonComponent, [{
    type: Component,
    args: [{
      selector: "app-testcasebutton",
      standalone: true,
      imports: [MatIconModule, MatButtonModule],
      template: '<button mat-icon-button class="toggleTestcaseView" [class.pressed]="testCaseViewIsVisible" (click)="toggleTestcaseView()">\n    <img src="assets/testcases.svg" alt="testcases">\n</button>',
      styles: ["button.pressed{background-color:#ddd}\n"]
    }]
  }], () => [{
    type: StatemachineService
  }], null);
})();
var StateMachine = class {
  constructor() {
    this.title = "New State Machine";
    this.description = "";
    this.allStates = [];
    this.finalStates = /* @__PURE__ */ new Set();
    this._input = "";
  }
  getAllStates() {
    return this.allStates;
  }
  getAllTransitions() {
    return this.allStates.flatMap((state2) => [...state2.transitions]);
  }
  addState(x, y) {
    const newState = this.makeState(x, y, this.makeId());
    if (this.startState == void 0) {
      this.startState = newState;
    }
    this.allStates.push(newState);
    return newState;
  }
  makeId() {
    let id = 0;
    while (this.allStates.some((state2) => state2.id == id)) {
      id++;
    }
    return id;
  }
  deleteState(state2) {
    if (this.startState == state2) {
      this.startState = void 0;
    }
    this.finalStates.delete(state2);
    this.getAllTransitions().forEach((transition2) => {
      if (transition2.destination === state2) {
        transition2.delete();
      }
    });
    let index = this.allStates.findIndex((obj) => obj === state2);
    this.allStates.splice(index, 1);
  }
  isStartState(state2) {
    return state2 === this.startState;
  }
  isFinalState(state2) {
    return this.finalStates.has(state2);
  }
  isDeterministic() {
    return ![...this.getAllStates()].some((state2) => !state2.isDeterministic());
  }
};
var Result = class {
  constructor(states, isAccepting) {
    this.activeStates = new Set(states);
    this.isAccepting = isAccepting;
  }
};
var StateConnection = class {
  get source() {
    return this.transition.source;
  }
  get destination() {
    return this.transition.destination;
  }
  getCenterPoint() {
    return this.transition.absolutCenterPoint();
  }
  constructor(transition2) {
    this.transition = transition2;
  }
};
var Line = class {
  constructor(p1, p2) {
    this.sourcePoint = p1;
    this.destinationPoint = p2;
  }
  // Gets a control point to draw a bezier curve.
  //
  // The control point with a specific `distance` to the line.
  // The point will be on the left side of the line.
  getBezierControlPoint(distance) {
    const vecSource = new Point(this.sourcePoint.x, this.sourcePoint.y);
    const vecDestination = new Point(this.destinationPoint.x - this.sourcePoint.x, this.destinationPoint.y - this.sourcePoint.y);
    const vecDestinationLength = this.sourcePoint.distance(this.destinationPoint);
    let vecDestinationUnit = Point.zero;
    if (vecDestinationLength !== 0) {
      vecDestinationUnit = new Point(vecDestination.x / vecDestinationLength, vecDestination.y / vecDestinationLength);
    }
    const vecStartControl = new Point(vecSource.x + vecDestination.x / 2, vecSource.y + vecDestination.y / 2);
    const vecEndControl = new Point(vecStartControl.x + distance * vecDestinationUnit.y, vecStartControl.y - distance * vecDestinationUnit.x);
    return vecEndControl;
  }
  getRectangleCenterPoint(width, height) {
    const {
      x: x1,
      y: y1
    } = this.sourcePoint;
    const {
      x: x2,
      y: y2
    } = this.vector;
    const x3 = this.center.x + (this.sourcePoint.y < this.destinationPoint.y ? -width / 2 : width / 2);
    const y3 = this.center.y + (this.sourcePoint.x < this.destinationPoint.x ? height / 2 : -height / 2);
    const s = (x2 * (y3 - y1) + y2 * (x1 - x3)) / (y2 * y2 + x2 * x2);
    const x = this.center.x + s * y2;
    const y = this.center.y - s * x2;
    return new Point(x, y);
  }
  get vector() {
    return new Point(this.destinationPoint.x - this.sourcePoint.x, this.destinationPoint.y - this.sourcePoint.y);
  }
  length() {
    return this.sourcePoint.distance(this.destinationPoint);
  }
  get center() {
    return new Point((this.sourcePoint.x + this.destinationPoint.x) / 2, (this.sourcePoint.y + this.destinationPoint.y) / 2);
  }
  set center(newCenter) {
    const currentCenter = this.center;
    const deltaX = newCenter.x - currentCenter.x;
    const deltaY = newCenter.y - currentCenter.y;
    this.sourcePoint = new Point(this.sourcePoint.x + deltaX, this.sourcePoint.y + deltaY);
    this.destinationPoint = new Point(this.destinationPoint.x + deltaX, this.destinationPoint.y + deltaY);
  }
  path() {
    return "M" + this.sourcePoint.x + " " + this.sourcePoint.y + ", " + this.destinationPoint.x + " " + this.destinationPoint.y;
  }
  isPointAboveLine(point) {
    const epsilon = 1e-10;
    const lineVector = {
      x: this.destinationPoint.x - this.sourcePoint.x,
      y: this.destinationPoint.y - this.sourcePoint.y
    };
    const pointVector = {
      x: point.x - this.sourcePoint.x,
      y: point.y - this.sourcePoint.y
    };
    const crossProduct = lineVector.x * pointVector.y - lineVector.y * pointVector.x;
    if (crossProduct > epsilon) {
      return true;
    }
    if (crossProduct < -epsilon) {
      return false;
    }
    return false;
  }
};
var AdjustableStateConnection = class extends StateConnection {
  constructor(transition2, connectionType = ConnectionType.Unidirectional) {
    super(transition2);
    this.connectionType = connectionType;
    this.controlPoint = this.calculateControlPoint();
    this.startEdge = this.calculateEdgePoint(this.source.origin, this.controlPoint, State.circleRadius);
    this.endEdge = this.calculateEndEdge();
    this.arrowBasePoint = this.calculateArrowBasePoint();
    this.controlPoint = this.calculateNewControlPoint();
  }
  calculateEdgePoint(center, referencePoint, radius) {
    const angle = Math.atan2(referencePoint.y - center.y, referencePoint.x - center.x);
    return new Point(center.x + radius * Math.cos(angle), center.y + radius * Math.sin(angle));
  }
  calculateArrowBasePoint() {
    const arrow = Arrow.transition;
    const endCenter = this.destination.origin;
    const angle = Math.atan2(this.controlPoint.y - endCenter.y, this.controlPoint.x - endCenter.x);
    return new Point(this.endEdge.x + arrow.width * Math.cos(angle), this.endEdge.y + arrow.width * Math.sin(angle));
  }
  calculateEndEdge() {
    const endCenter = this.destination.origin;
    const angle = Math.atan2(this.controlPoint.y - endCenter.y, this.controlPoint.x - endCenter.x);
    return new Point(endCenter.x + State.circleRadius * Math.cos(angle), endCenter.y + State.circleRadius * Math.sin(angle));
  }
  arrow() {
    const arrow = Arrow.transition;
    const dx = this.endEdge.x - this.arrowBasePoint.x;
    const dy = this.endEdge.y - this.arrowBasePoint.y;
    const angle = Math.atan2(dy, dx);
    const lowerLeft = new Point(this.arrowBasePoint.x + arrow.height / 2 * Math.sin(angle), this.arrowBasePoint.y - arrow.height / 2 * Math.cos(angle));
    const upperLeft = new Point(this.arrowBasePoint.x - arrow.height / 2 * Math.sin(angle), this.arrowBasePoint.y + arrow.height / 2 * Math.cos(angle));
    return `M ${this.arrowBasePoint.x} ${this.arrowBasePoint.y} L ${lowerLeft.x} ${lowerLeft.y} L ${this.endEdge.x} ${this.endEdge.y} L ${upperLeft.x} ${upperLeft.y} Z`;
  }
  path() {
    return `M${this.startEdge.x},${this.startEdge.y} Q${this.controlPoint.x},${this.controlPoint.y} ${this.arrowBasePoint.x},${this.arrowBasePoint.y}`;
  }
  getCenterPoint() {
    if (super.getCenterPoint()) {
      return super.getCenterPoint();
    }
    const connectionLine = new Line(this.source.origin, this.destination.origin);
    return this.connectionType === ConnectionType.Unidirectional ? connectionLine.center : connectionLine.getBezierControlPoint(State.circleRadius);
  }
  calculateControlPoint() {
    const centerPoint = this.getCenterPoint();
    return new Point(2 * centerPoint.x - 0.5 * (this.source.origin.x + this.destination.origin.x), 2 * centerPoint.y - 0.5 * (this.source.origin.y + this.destination.origin.y));
  }
  calculateNewControlPoint() {
    const centerPoint = this.getCenterPoint();
    return new Point(2 * centerPoint.x - 0.5 * (this.startEdge.x + this.arrowBasePoint.x), 2 * centerPoint.y - 0.5 * (this.startEdge.y + this.arrowBasePoint.y));
  }
  calculateRectanglePlacementAbovePath(width, height) {
    const line = new Line(this.startEdge, this.arrowBasePoint);
    const centerPoint = this.getCenterPoint();
    if (line.isPointAboveLine(centerPoint)) {
      line.sourcePoint = this.arrowBasePoint;
      line.destinationPoint = this.startEdge;
    }
    line.center = this.getCenterPoint();
    return line.getRectangleCenterPoint(width, height);
  }
};
var ConnectionType;
(function(ConnectionType2) {
  ConnectionType2[ConnectionType2["Unidirectional"] = 0] = "Unidirectional";
  ConnectionType2[ConnectionType2["Bidirectional"] = 1] = "Bidirectional";
})(ConnectionType || (ConnectionType = {}));
var EmptyStateConnection = class extends StateConnection {
  calculateRectanglePlacementAbovePath(width, height) {
    return Point.zero;
  }
  path() {
    return "";
  }
  getCenterPoint() {
    return Point.zero;
  }
  arrow() {
    return "";
  }
};
var BezierCurve = class {
  // The constructor initializes the points that define the curve.
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
  pointSecant(t) {
    const p12 = this.lerp(this.p1, this.p2, t);
    const p23 = this.lerp(this.p2, this.p3, t);
    return new Line(p12, p23);
  }
  // This method computes a point on the curve for a given value of "t".
  pointOnCurve(t) {
    const secant = this.pointSecant(t);
    return this.lerp(secant.sourcePoint, secant.destinationPoint, t);
  }
  // This method performs linear interpolation between two points.
  lerp(p1, p2, t) {
    const x = p1.x + (p2.x - p1.x) * t;
    const y = p1.y + (p2.y - p1.y) * t;
    return new Point(x, y);
  }
  path() {
    return "M" + this.p1.x + " " + this.p1.y + " Q" + this.p2.x + " " + this.p2.y + " " + this.p3.x + " " + this.p3.y;
  }
};
var CubicBezierCurve = class extends BezierCurve {
  // The constructor initializes the points that define the curve.
  constructor(p1, p2, p3, p4) {
    super(p1, p2, p3);
    this.p4 = p4;
  }
  pointSecant(t) {
    const p12 = this.lerp(this.p1, this.p2, t);
    const p23 = this.lerp(this.p2, this.p3, t);
    const p34 = this.lerp(this.p3, this.p4, t);
    const p123 = this.lerp(p12, p23, t);
    const p234 = this.lerp(p23, p34, t);
    return new Line(p123, p234);
  }
  // This method computes a point on the curve for a given value of "t".
  pointOnCurve(t) {
    const secant = this.pointSecant(t);
    return this.lerp(secant.sourcePoint, secant.destinationPoint, t);
  }
  path() {
    return "M" + this.p1.x + " " + this.p1.y + " C" + this.p2.x + " " + this.p2.y + " " + this.p3.x + " " + this.p3.y + " " + this.p4.x + " " + this.p4.y;
  }
};
var SelfStateConnection = class extends StateConnection {
  constructor(transition2) {
    super(transition2);
    const {
      curve,
      arrowBase,
      arrowTip
    } = this.createCurveAndArrow();
    this.curve = curve;
    this.arrowBase = arrowBase;
    this.arrowTip = arrowTip;
  }
  path() {
    return this.curve.path();
  }
  arrow() {
    return this.createArrowPath(this.arrowBase, this.arrowTip);
  }
  calculateRectanglePlacementAbovePath(width, height) {
    const centerPoint = this.curve.pointOnCurve(0.5);
    return new Point(centerPoint.x, centerPoint.y - height / 2 - 10);
  }
  getCenterPoint() {
    return this.curve.pointOnCurve(0.5);
  }
  createCurveAndArrow() {
    const origin = this.source.origin;
    const controlPoint1 = new Point(origin.x - 50, origin.y - 65);
    const controlPoint2 = new Point(origin.x + 50, origin.y - 65);
    const start = origin.moveToPoint(controlPoint1, State.circleRadius);
    const end = origin.moveToPoint(controlPoint2, State.circleRadius + Arrow.transition.width);
    const curve = new CubicBezierCurve(start, controlPoint1, controlPoint2, end);
    const arrowTip = origin.moveToPoint(controlPoint2, State.circleRadius);
    return {
      curve,
      arrowBase: end,
      arrowTip
    };
  }
  createArrowPath(base, tip) {
    const arrow = Arrow.transition;
    const angle = Math.atan2(tip.y - base.y, tip.x - base.x);
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const halfHeight = arrow.height / 2;
    const leftCorner = new Point(base.x + halfHeight * sin, base.y - halfHeight * cos);
    const rightCorner = new Point(base.x - halfHeight * sin, base.y + halfHeight * cos);
    return `M ${base.x} ${base.y} L ${leftCorner.x} ${leftCorner.y} L ${tip.x} ${tip.y} L ${rightCorner.x} ${rightCorner.y} Z`;
  }
};
var Label = class {
  constructor(text, x, y, width, height) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
};
var Size = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};
var Transition = class {
  constructor() {
    this.fontSize = 16;
    this.fontFamily = "Arial";
    this.highlight = false;
    const canvas = document.createElement("canvas");
    this.ctx = canvas.getContext("2d");
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
  }
  absolutCenterPoint() {
    if (this.relativePos) {
      return PolarRelativePositionCalculator.toAbsolute(this.relativePos, this.source.origin, this.destination.origin);
    }
    return void 0;
  }
  set centerPoint(point) {
    this.relativePos = PolarRelativePositionCalculator.calculate(point, this.source.origin, this.destination.origin);
  }
  get centerPoint() {
    if (this.relativePos) {
      return PolarRelativePositionCalculator.toAbsolute(this.relativePos, this.source.origin, this.destination.origin);
    }
    return this.connection.getCenterPoint();
  }
  delete() {
    const result = this.source.transitions.filter((transition2) => transition2 !== this);
    this.source.transitions = result;
  }
  get connection() {
    if (this.source.hasConnectionTo(this.destination)) {
      if (this.source === this.destination) {
        return new SelfStateConnection(this);
      } else if (this.destination.hasConnectionTo(this.source)) {
        const transition2 = this.destination.getTransitionTo(this.source);
        if (transition2.relativePos) {
          return new AdjustableStateConnection(this);
        }
        return new AdjustableStateConnection(this, ConnectionType.Bidirectional);
      }
      return new AdjustableStateConnection(this);
    }
    return new EmptyStateConnection(this);
  }
  path() {
    return this.connection.path();
  }
  arrow() {
    return this.connection.arrow();
  }
  pathCenter() {
    return this.connection.getCenterPoint() ?? Point.zero;
  }
  labels() {
    let boundingBox = new Size(0, this.fontSize * this.displayText().length);
    this.displayText().forEach((text) => {
      const width = this.ctx.measureText(text).width;
      boundingBox.width = Math.max(boundingBox.width, width);
    });
    const centerPoint = this.connection.calculateRectanglePlacementAbovePath(boundingBox.width, boundingBox.height);
    const leftEdge = centerPoint.x - boundingBox.width / 2;
    const topEdge = centerPoint.y - boundingBox.height / 2;
    return this.displayText().map((text, index) => {
      return new Label(
        text,
        leftEdge,
        // x-coordinate is now at the left edge
        topEdge + index * this.fontSize + this.fontSize / 2,
        boundingBox.width,
        boundingBox.height
      );
    });
  }
  isEmpty() {
    return this.displayText().length == 0;
  }
  toJSON() {
    return {
      destination: this.destination.id
    };
  }
};
var PolarRelativePositionCalculator = class {
  static calculate(point, p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const vx = point.x - p1.x;
    const vy = point.y - p1.y;
    const t = (vx * dx + vy * dy) / (length * length);
    const px = p1.x + t * dx;
    const py = p1.y + t * dy;
    const r = Math.sqrt((point.x - px) ** 2 + (point.y - py) ** 2);
    const clockwise = dx * (point.y - p1.y) - dy * (point.x - p1.x) > 0;
    return {
      t,
      r,
      clockwise
    };
  }
  static toAbsolute(relPos, p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const px = p1.x + relPos.t * dx;
    const py = p1.y + relPos.t * dy;
    let perpX = -dy / length;
    let perpY = dx / length;
    if (!relPos.clockwise) {
      perpX = -perpX;
      perpY = -perpY;
    }
    return new Point(px + relPos.r * perpX, py + relPos.r * perpY);
  }
};
var Rect = class {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
};
export {
  AdjustableStateConnection,
  Arrow,
  BezierCurve,
  ConnectionType,
  CoreComponent,
  CubicBezierCurve,
  DefaultState,
  EmptyStateConnection,
  FooterComponent,
  HeaderComponent,
  HelpDialogComponent,
  InputComponent,
  Label,
  Line,
  MenuComponent,
  MoveNodeState,
  MoveTransitionState,
  Point,
  Rect,
  Result,
  SelfStateConnection,
  Size,
  State,
  StateConnection,
  StateEditDialogComponent,
  StateMachine,
  StateMachineViewState,
  StatemachineService,
  StatemachineviewComponent,
  TestcasebuttonComponent,
  Transition,
  TransitionEditState,
  TransitionFromState,
  TransitionNewStateEditState,
  TransitionToState
};
//# sourceMappingURL=commons.js.map
