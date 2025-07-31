import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-favicon-maker',
  imports: [CommonModule],
  templateUrl: './favicon-maker.html',
  styleUrl: './favicon-maker.css'
})
export class FaviconMaker {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null | undefined = null;
  selectedFileName: string | null = null;
  selectedFileSize: string | null = null;
  sizes = [16, 32, 48, 64, 128, 256]; // standard favicon sizes

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
  
    if (file) {
      this.selectedFileName = file.name;
      this.selectedFileSize = this.formatFileSize(file.size); // Use formatter
  
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result ?? null;
      };
      reader.readAsDataURL(file);
    }
  }
  
  formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  async generateFavicons(): Promise<void> {
    if (!this.selectedFile) return;

    const imageBitmap = await createImageBitmap(this.selectedFile);
    const zip = new JSZip();

    for (const size of this.sizes) {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(imageBitmap, 0, 0, size, size);
        const dataUrl = canvas.toDataURL('image/png');
        const blob = await (await fetch(dataUrl)).blob();
        zip.file(`favicon-${size}x${size}.png`, blob);
      }
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, 'favicons.zip');
  }
}