import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listing-kit',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './listing-kit.html',
  styleUrl: './listing-kit.css'
})
export class ListingKit {
  items = [
    {
      title: 'QR Code Generator',
      description: 'Create QR codes instantly for links, text, or WiFi.',
      url: '/qr-code',
    },
    {
      title: 'Logo Maker',
      description: 'Design custom logos using text, fonts, and colors.',
      url: '/logo-generator',
    },
    {
      title: 'Favicon Creator',
      description: 'Generate favicon icons from images or initials.',
      url: '/favicon-maker',
    },
    {
      title: 'PDF Compressor',
      description: 'Reduce your PDF size without losing quality.',
      url: '/pdf-compressor',
    },
    {
      title: 'Resume Builder',
      description: 'Build clean resumes with your personal info.',
      url: '/resume-builder',
    },
    {
      title: 'Color Palette Picker',
      description: 'Pick and copy hex codes for your designs.',
      url: '/color-palette-picker',
    }
  ];
}
