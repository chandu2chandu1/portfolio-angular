import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
})
export class Contact {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  successMessage = '';
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  submitForm() {
    this.contactService.sendMessage(this.contact).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        this.contact = { name: '', email: '', subject: '', message: '' };
      },
      error: (err) => {
        this.errorMessage = 'Failed to send message. Please try again.';
        this.successMessage = '';
        console.error(err);
      },
    });
  }
}
