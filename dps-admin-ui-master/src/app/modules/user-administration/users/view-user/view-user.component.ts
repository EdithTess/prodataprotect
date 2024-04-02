import {AfterViewInit,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {scaleInAnimation} from '../../../../../@fury/animations/scale-in.animation';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Observable, of, ReplaySubject} from 'rxjs';
import { DocumentComment } from '../../../../../@fury/shared/base-fury-form.model';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { Subscription} from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { ThrowStmt } from '@angular/compiler';
import {UserAdministrationService} from '../../user-administration.service';
import {User} from '../../user-adminstration.model';
import { MatDialog } from '@angular/material/dialog';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../services/api.service';
import { UtilService } from '../../../../../@fury/services/util.service';
import { ComplaintService } from '../../../complaints/complaints.service';
import { SnackBarService } from '../../../../pages/services/snack-bar.service';
@Component({
  selector: 'fury-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent extends BaseFuryForm implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  
  //Arrays
  accesses: any [] = [];
  users: User[];
  // Subscriptions
  subscriptions: Subscription[] = [];
  //Events
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultUsersEvent: EventEmitter<User> = new EventEmitter();
  //Bolean
  isProcessing = false;
  UserForm: FormGroup;

  private _gap = 16;
  gap = `${this._gap}px`;
  col2 = `1 1 calc(50% - ${this._gap / 2}px)`;
  col3 = `1 1 calc(33.3333% - ${this._gap / 1.5}px)`;

  


  constructor( 
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private route: Router,
    private dialog: MatDialog,
    private bottomsheet: MatBottomSheet,
    private endpoints: ApiEndpointsService,
    private http: HttpClient,
    private service: ApiService,
    private allDialogRef: MatDialog,
    private auth: KeycloakService,
    private utilService: UtilService,
    public snackBar: SnackBarService,
    public authService: KeycloakService,
    public _workflowService: WorkflowServiceService,
    public registrationService: CompanyRegistrationService,
    public complaintService: ComplaintService,) { 

      super(
        authService,
        _workflowService,
        registrationService,
        complaintService
    );
    }

  ngOnInit(): void {

    console.log("here");
  }

}
