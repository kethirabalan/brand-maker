import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logo-generator',
  imports: [CommonModule, FormsModule],
  templateUrl: './logo-generator.html',
  styleUrl: './logo-generator.css'
})
export class LogoGenerator {
  brandName = '';
  fontStyle = 'sans-serif';
  color = '#ffffff';
  textColor: string = '#ffffff';
  backgroundColor: string = '#000000';
  logoDataUrl: string | null = null;
  canvasWidth = 600;
  canvasHeight = 200;
  dropdownOpen = false;
  fontSize = 64;

  fontOptions = [
    { label: 'Sans Serif', value: 'sans-serif' },
    { label: 'Serif', value: 'serif' },
    { label: 'Monospace', value: 'monospace' },
    { label: 'Cursive', value: 'cursive' },
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Times New Roman', value: "'Times New Roman', serif" },
    { label: 'Courier New', value: "'Courier New', monospace" },
    { label: 'Georgia', value: "Georgia, serif" },
    { label: 'Comic Sans MS', value: "'Comic Sans MS', cursive" },
    { label: 'Lucida Console', value: "'Lucida Console', monospace" }
  ];

  selectedFont = this.fontOptions[0];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectFont(font: any) {
    this.selectedFont = font;
    this.dropdownOpen = false;
  }
  generateLogo(): void {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;
  
    // Fill background with selected background color
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Set font and text styles
    ctx.font = `bold ${this.fontSize}px ${this.selectedFont.value}`;
    ctx.fillStyle = this.textColor; // Use textColor, not generic color
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
  
    // Draw the text
    ctx.fillText(this.brandName, canvas.width / 2, canvas.height / 2);
  
    // Convert to image
    this.logoDataUrl = canvas.toDataURL('image/png');
  }
  
  downloadLogo(): void {
    if (!this.logoDataUrl) return;
    const a = document.createElement('a');
    a.href = this.logoDataUrl;
    a.download = `${this.brandName || 'logo'}.png`;
    a.click();
  }
}
