import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-request-for-help',
  templateUrl: './request-for-help.component.html',
  styleUrls: ['./request-for-help.component.css']
})
export class RequestForHelpComponent implements OnInit {
  formSubmitted: boolean = false;

  assistanceIndustry: string = "";
  assistanceName: string = "";
  assistanceEmail: string = "";
  assistancePhone: string = "";
  assistanceComments: string = "";
  includeLinkedIn: boolean = false;
  fileToUpload: File | null = null;

  
  selectedTopic: string = "assistance";
  @ViewChild('coachingModal') coachingModal!: ElementRef;

  openModal() {
    $(this.coachingModal.nativeElement).modal('show');
  }

  closeModal() {
    $(this.coachingModal.nativeElement).modal('hide');
  }

  assistanceInput1: string | undefined;
  assistanceInput2: string | undefined;
  InterviewPrep1: string | undefined;
  InterviewPrep2: string | undefined;
  InterviewPrep3: string | undefined;
  InterviewPrep4: string | undefined;
  InterviewPrep5: string | undefined;
  InterviewPrep6: string | undefined;
  InterviewPrep7: string | undefined;
  InterviewPrep8: string | undefined;
  InterviewPrep9: string | undefined;
  careerInput1: string | undefined;
  careerInput2: string | undefined;
  careerInput3: string | undefined;
  careerInput4: string | undefined;
  careerInput5: string | undefined;
  careerInput6: string | undefined;
  careerInput7: string | undefined;
  careerInput8: string | undefined;
  careerInput9: string | undefined;
  mentorship1: string | undefined;
  mentorship2: string | undefined;
  mentorship3: string | undefined;
  mentorship4: string | undefined;
  mentorship5: string | undefined;
  mentorship6: string | undefined;
  mentorship7: string | undefined;
  mentorship8: string | undefined;
  mentorship9: string | undefined;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onTopicSelectionChange() {
    // Reset input fields when topic changes
    this.assistanceInput1 = '';
    this.assistanceInput2 = '';
    this.InterviewPrep1 = '';
    this.InterviewPrep2 = '';
    this.InterviewPrep3 = '';
    this.InterviewPrep4 = '';
    this.InterviewPrep5 = '';
    this.InterviewPrep6 = '';
    this.InterviewPrep7 = '';
    this.InterviewPrep8 = '';
    this.InterviewPrep9 = '';
    this.careerInput1 = '';
    this.careerInput2 = '';
    this.careerInput3 = '';
    this.careerInput4 = '';
    this.careerInput5 = '';
    this.careerInput6 = '';
    this.careerInput7 = '';
    this.careerInput8 = '';
    this.careerInput9 = '';
    this.mentorship1 = '';
    this.mentorship2 = '';
    this.mentorship3 = '';
    this.mentorship4 = '';
    this.mentorship5 = '';
    this.mentorship6 = '';
    this.mentorship7 = '';
    this.mentorship8 = '';
    this.mentorship9 = '';


    // Add more reset logic for other topics if needed
  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }
  
  submitForm() {
    console.log('Form data:', {
      selectedTopic: this.selectedTopic,
      assistanceIndustry: this.assistanceIndustry,
      assistanceName: this.assistanceName,
      assistanceEmail: this.assistanceEmail,
      assistancePhone: this.assistancePhone,
      assistanceComments: this.assistanceComments,
      includeLinkedIn: this.includeLinkedIn,
      fileToUpload: this.fileToUpload
    });
  
    // Create FormData object
    // const payload: FormData = new FormData();
    // payload.append('selectedTopic', this.selectedTopic);
    // payload.append('assistanceIndustry', this.assistanceIndustry);
    // payload.append('assistanceName', this.assistanceName);
    // payload.append('assistanceEmail', this.assistanceEmail);
    // payload.append('assistancePhone', this.assistancePhone);
    // payload.append('assistanceComments', this.assistanceComments);
    // payload.append('includeLinkedIn', this.includeLinkedIn.toString());
  
    // if (this.fileToUpload) {
    //   // Append the File object itself, not just the file name
    //   payload.append('fileToUpload', this.fileToUpload);
    // }

    const payload = {
      selectedTopic: this.selectedTopic,
      assistanceIndustry: this.assistanceIndustry,
      assistanceName: this.assistanceName,
      assistanceEmail: this.assistanceEmail,
      assistancePhone: this.assistancePhone,
      assistanceComments: this.assistanceComments,
      includeLinkedIn: this.includeLinkedIn,
      fileToUpload: this.fileToUpload?.name
    };
  
    console.log('Payload before sending:', payload);
  
    // Send the payload to your Node.js server using HttpClient
    this.http.post<any>('http://localhost:3000/receive-payload', payload)
      .subscribe(response => {
        console.log('Response from server:', response);
        // Handle response as needed
      }, error => {
        console.error('Error sending payload:', error);
        // Reset the formSubmitted flag in case of error to allow resubmission
        this.formSubmitted = false;
        // Handle error as needed
      });
  }
}  