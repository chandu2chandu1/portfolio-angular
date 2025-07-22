import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
})
export class Contact {
  contact = { name: '', email: '', message: '' };
  messageSent = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const endpoint = 'http://localhost:8000/contact';
    this.http.post(`${endpoint}`, this.contact).subscribe({
      next: () => {
        this.messageSent = true;
        this.contact = { name: '', email: '', message: '' };
      },
      error: (error) => {
        this.errorMessage = 'Message could not be sent.';
        this.messageSent = false;
        console.error('Error sending contact form:', error);
      },
    });
  }
}
