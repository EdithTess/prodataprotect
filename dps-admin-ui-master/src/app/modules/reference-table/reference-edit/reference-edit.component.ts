import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsService } from '../../../../@fury/services/forms.service';
import { UtilService } from '../../../../@fury/services/util.service';
// import { DynamicFormComponent } from 'src/@fury/shared/dynamic-form/dynamic-form.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

// import { FieldConfig } from 'src/@fury/shared/dynamic-form/field.interface';
// import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import {DPSBaseFormComponent, FormMode} from '../../../../@fury/shared/base-form.component';
import { TimedTableDefinition, TimedTableResult, TimedTableUpdate } from '../table-model';
import {ActivatedRoute} from '@angular/router';
import {SidenavService} from '../../../layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-reference-edit',
  templateUrl: './reference-edit.component.html',
  styleUrls: ['./reference-edit.component.scss']
})
export class ReferenceEditComponent extends DPSBaseFormComponent implements OnInit, AfterViewInit {

  // @ViewChild(DynamicFormComponent, {static: false}) form: DynamicFormComponent;
  // regConfig: FieldConfig[] = [];

  public FormModes: any;

  windowTitle: string;
  tableName: string;
  viewOnlyMode: boolean;
  cardTitle: string;
  id: string;
  fields: string[] = [];
  values: string[] = [];
  originalValue: any = [];

  // events
  processingEvent: EventEmitter<boolean> = new EventEmitter();
  errorsEvent: EventEmitter<any> = new EventEmitter();
  resultTableDefinitionEvent: EventEmitter<TimedTableDefinition> = new EventEmitter();
  resultTTRowResultEvent: EventEmitter<any> = new EventEmitter();
  resultTableSaveEvent: EventEmitter<TimedTableResult> = new EventEmitter();
  resultLookupEvent: EventEmitter<any> = new EventEmitter();
  subscription: Subscription;

  isProcessing = false;
  formLoaded = false;

  errors: string[] = [];

  tableDefinition: TimedTableDefinition;

  timedTableUpdate: TimedTableUpdate = {
    addEntries: [],
    deleteEntries: [],
    updateEntries: []
  };


  constructor(
      // private auth: AuthenticationService,
      // private nav: NavigationService,
      // private table: TableService,
      // private dialog: DialogService,
      private auth: AuthenticationService,
      private formService: FormsService,
      // private ueswService: UeswService,
      private sidenavItemService: SidenavService,
      private activateRoute: ActivatedRoute,
      private utilService: UtilService
  ) {
    
    super(  activateRoute.routeConfig.data.viewOnlyMode, auth,
        {new: 'tt.edit', edit: 'tt.edit', view: 'tt.view'});

    const viewOnlyMode: boolean = activateRoute.routeConfig.data.viewOnlyMode;

    try {
      if (viewOnlyMode === false) {
        // this.type = this.typeEditMode;
        this.viewOnlyMode = false;
      } else {
        // this.type = this.typeViewMode;
        this.viewOnlyMode = true;
      }
    } catch (e) {
      // this.type = this.typeViewMode;
      this.viewOnlyMode = true;
    }
    //
    // if (this.type) {
    //   if (false === this.auth.isUserInRoles(this.type.accesses)) {
    //     throw new Error('Unauthorized navigation request.');
    //   }
    // } else {
    //   // Just in case of error in selecting the type
    //   throw new Error('Unauthorized navigation request (type has not been provided).');
    // }
    this.FormModes = FormMode;
  }

  ngOnInit(): void {
    this.tableName = this.sidenavItemService.getItemByRoute(this.activateRoute).name;
  }

  ngAfterViewInit(): void {
  }

}
