import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FileUpload } from 'src/app/services/api.model';


@Component({
  selector: 'app-org-upload',
  templateUrl: './org-upload.component.html',
  styleUrls: ['./org-upload.component.scss']
})
export class OrgUploadComponent implements OnInit, AfterViewInit, OnDestroy {

  processing = false;
  httpSubscription: Subscription;
  form: FormGroup;
  status = false;  
  documents: any[] = [];
  currentIndex = 0;
  files: FileUpload;
  size: string = '0';
  errorMessage = null;

  @ViewChild('attachDocumentInput', { static: false }) attachDocumentInput: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { multiple: boolean },
    private dialogRef: MatDialogRef<OrgUploadComponent>,
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({                          
      Document: new FormControl('', [
        Validators.required
      ])                        
    });   

  }
  
  ngAfterViewInit(): void {
    this.onAttachDocument();
  }

  onCloseDialog(): void {
    this.dialogRef.close({
      status: this.status,
      row: this.status ? this.files : null
    });
  }  

  onAttachDocument():void {
    this.attachDocumentInput.nativeElement.click();
  }

  onFileChange(event) {
    this.documents = Array.from(event.target.files);

    this.size = parseFloat((this.documents[0].size / 1000000).toString()).toFixed(3);

    const fileType = this.documents[0].type.split('application/')[1];

    const reader = new FileReader();
    reader.onloadend = () => {
      // console.log(reader.result);
      this.files.Base64 = reader.result;
    };

    reader.readAsDataURL(this.documents[0]);

    this.files = {
      Name: this.documents[0]['name'],
      Document: this.documents[0],
      Size: this.size,
    }   

    if (parseInt(this.size) < 40 && fileType === 'pdf') {
      this.errorMessage = null;  
    } else {
      // this.documents.length = 0;
      this.errorMessage = parseInt(this.size) > 40 && fileType !== 'pdf' ? 'Document Too large, please upload a .pdf format document less than 40 Mbs.' : 
      this.errorMessage = parseInt(this.size) > 40 ? 'Document Too large, please upload a document less than 40 Mbs.' : 
      fileType !== 'pdf' ? 'Please choose a .pdf format document.' : 
      '';
    }
  }

  get f(){
    return this.form.controls;
  }

  onAttach(): void {
    this.processing = true;
    
    setTimeout(() => {
      this.status = true;

      this.form.reset();

      this.onCloseDialog();
      
      this.processing = false;
    }, 500);    
  }

  ngOnDestroy(): void {
    if (this.httpSubscription) { this.httpSubscription.unsubscribe(); }
  }     
}


