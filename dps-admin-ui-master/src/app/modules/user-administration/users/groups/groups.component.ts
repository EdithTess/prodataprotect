import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {GroupModel, UserModel} from '../../user-adminstration.model';
import {IFinderField, ListColumn} from '../../../../../@fury/shared/list/list-column.model';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {UserAdministrationService} from '../../user-administration.service';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {ReferenceTableService} from '../../../../services/reference-table.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { ComplaintService } from '../../../complaints/complaints.service';

@Component({
  selector: 'fury-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class GroupsComponent  extends BaseFuryForm implements OnInit {
  //Arrays
  accesses: any [] = [];
  groups: GroupModel[];
  searchFields: IFinderField[];
  // Subscriptions
  subscriptions: Subscription[] = [];
  //Events
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultGroupsEvent: EventEmitter<GroupModel> = new EventEmitter();
  //Bolean
  isProcessing = false;
  //Input
  @Input()
  columns: ListColumn[] = [
    {name: 'Group Id', property: 'id', visible: true, isModelProperty: true},
    {name: 'Group Name', property: 'name', visible: true, isModelProperty: true},
    {name: 'Group Path', property: 'path', visible: true, isModelProperty: true},
    {name: 'Actions', property: 'actions', visible: true},
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<GroupModel> | null;
  //ViewChild
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;




  constructor(
      private dialog: MatDialog,
      private route: ActivatedRoute,
      private auth: KeycloakService,
      private userAdminService: UserAdministrationService,
      public authService: KeycloakService,
      public registrationService: CompanyRegistrationService,
      public _workflowService: WorkflowServiceService,
      public complaintService: ComplaintService
  ) {
    super(
        authService,
        _workflowService,
        registrationService,
        complaintService
    );
  }

  
  ngOnInit(): void {
    // ProcessEvent
    this.subscriptions['$processingEvent'] = this.$processingEvent.subscribe(isProcessing => this.isProcessing = isProcessing);
    //datasource
    this.dataSource = new MatTableDataSource();
    // Users
    this.subscriptions['$resultUsersEvent'] = this.$resultGroupsEvent.subscribe( result => {
      if (result) {
        this.groups = result;
        this.dataSource.data = result;
        this.isLoaded = true;
      }
    })
    this.loadUserGroups();
    this.defineSearchFields();
  }


  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  loadUserGroups() {
    this.userAdminService.getUserGroups(this.$processingEvent,this.$resultGroupsEvent,this.$errorsEvent);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  private defineSearchFields() {
    this.searchFields = [];
  }


}
