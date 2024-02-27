import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  submitForm() {
    if (this.formSubmitted) {
      console.log('Form has already been submitted.');
      return;
    }
    this.formSubmitted = true;
  
    let payload: any = {
      selectedTopic: this.selectedTopic
    };
  
    // Based on the selected option, include the corresponding form data in the payload
    switch (this.selectedTopic) {
      case 'assistance':
        payload.assistance = {
          industry: this.assistanceIndustry,
          name: this.assistanceName,
          email: this.assistanceEmail,
          phone: this.assistancePhone,
          comments: this.assistanceComments,
          includeLinkedIn: this.includeLinkedIn,
          fileUpload: this.fileToUpload
        };
        break;
      case 'Interviewprep':
        payload.Interviewprep = {
          name: this.InterviewPrep1,
          email: this.InterviewPrep2,
          phone: this.InterviewPrep3,
          currentRole: this.InterviewPrep4,
          currentCompany: this.InterviewPrep5,
          interetedRole: this.InterviewPrep6,
          InterestedCompany: this.InterviewPrep7,
          industry: this.InterviewPrep8,
          comment: this.InterviewPrep9
        };
        break;
      case 'jobreferral':
        payload.jobreferral = {
          name: this.careerInput1,
          email: this.careerInput2,
          phone: this.careerInput3,
          currentRole: this.careerInput4,
          currentCompany: this.careerInput5,
          interetedRole: this.careerInput6,
          InterestedCompany: this.careerInput7,
          industry: this.careerInput8,
          Comment: this.careerInput9
        };
        break;
      case 'mentorship':
        payload.mentorship = {
          name: this.mentorship1,
          email: this.mentorship2,
          phone: this.mentorship3,
          currentRole: this.mentorship4,
          currentCompany: this.mentorship5,
          interetedRole: this.mentorship6,
          InterestedCompany: this.mentorship7,
          industry: this.mentorship8,
          comment: this.mentorship9
        };
        break;
      default:
        console.error('Invalid selected topic:', this.selectedTopic);
        return;
    }
  
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