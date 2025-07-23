import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private API_URL = 'http://localhost:8000/api/contact'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  sendMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    return this.http.post(this.API_URL, data);
  }
}
