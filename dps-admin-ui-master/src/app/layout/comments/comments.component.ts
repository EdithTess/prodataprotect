import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { DocumentComment } from '../../../@fury/shared/base-fury-form.model';
import { DataServiceError } from '../../../@fury/shared/HttpModel';

@Component({
    selector: 'fury-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


    @Input() applicationComments: DocumentComment[];
    @Input() isViewOnly: boolean;
    @Output() commentChange = new EventEmitter<DocumentComment[]>();

    commentsFormGroup: FormGroup;

    dateTimeEvent: EventEmitter<any> = new EventEmitter();
    processingEvent: EventEmitter<boolean> = new EventEmitter();
    errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
    displayedColumns: string[] = ['nber', 'comment', 'creationDate', 'username', 'actions'];
    list = [];
    isEditingComment = false;
    commentButtonIcon = 'add_circle_outline';
    commentButtonLabel = ' Add new comment';
    commentEditId = 0;
    dateTimeRowId = 0;
    comment: DocumentComment = new DocumentComment();

    constructor(
        private _formBuilder: FormBuilder,
        private auth: KeycloakService
    ) {
    }

    ngOnInit(): void {
        this.processingEvent.subscribe(processing => console.log(processing));

        this.errorsEvent.subscribe(errors => {
            this.commentChange.emit(this.applicationComments);
        });

        this.commentsFormGroup = this._formBuilder.group({
            commentCtrl: ['', Validators.required]
        });

        this.dateTimeEvent.subscribe(result => {
            if (result) {
                this.list[this.dateTimeRowId - 1].creationDate = result;
            }
            this.commentChange.emit(this.applicationComments);
        });

        if (this.applicationComments) {
            // this.list = this.applicationComments;
            this.applicationComments.forEach(comment => {
                this.list.push(comment);
            });
        }
    }


    

    addOrUpdateComment(option: number): void {
        if (this.commentsFormGroup.valid) {
            this.mapCommentToControl(1);

            if (option === 1) {
                this.comment.username = this.auth.getUsername();
                this.list.push(this.comment);
                this.applicationComments.push(this.comment);
                this.list = [...this.list];
                this.dateTimeRowId = this.list.length;
            } else {
                this.list[this.commentEditId] = this.comment;
                this.applicationComments[this.commentEditId] = this.comment;
                this.list = [...this.list];
                this.dateTimeRowId = this.commentEditId + 1;
            }
            // this.getServerDateTime();
            // reset custom item
            this.resetComment();
        }
    }

    mapCommentToControl(option: number) {
        if (option === 1) { // 1 is for mapping from controls to comment object
            this.comment.comment = this.commentsFormGroup.get('commentCtrl').value;
        } else { // 2 is for  mapping from comment object to controls
            this.commentsFormGroup.get('commentCtrl').setValue(this.comment.comment);
        }
    }

    resetComment() {
        this.commentsFormGroup.reset();
        this.commentsFormGroup.markAsPristine();
        this.commentsFormGroup.markAsUntouched();
        this.comment = new DocumentComment();

        this.validateCommentLabels(1);
        this.manageComment(1);
    }

    manageComment(option: number, id?: number): void {
        if (option === 2) {
            this.comment = this.applicationComments[id];
            this.isEditingComment = true;
            this.commentEditId = id;

            this.mapCommentToControl(option);
        } else {
            this.isEditingComment = false;
            this.comment = new DocumentComment();
            this.commentEditId = 0;
        }

        this.validateCommentLabels(option);
    }

    validateCommentLabels(option: number) {
        if (option === 1) {
            this.commentButtonIcon = 'add_circle_outline';
            this.commentButtonLabel = 'Add new comment';
        } else {
            this.commentButtonIcon = 'save';
            this.commentButtonLabel = 'Save';
        }
    }

    deleteComment(index: number) {
        if (this.list[index].userName === this.auth.getUsername()) {
            this.list.splice(index, 1);
            this.applicationComments.splice(index, 1);
            this.list = [...this.list];
            this.commentChange.emit(this.applicationComments);
        }
        this.isEditingComment = false;
    }

    isCommentAuthor(index: number): boolean {
        return (this.list[index].userName === this.auth.getUsername() && !this.list[index].id);
    }
    
    

}
