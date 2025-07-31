import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as QRCode from 'qrcode';
@Component({
  selector: 'app-qr-code',
  imports: [CommonModule, FormsModule],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.css'
})
export class QrCode {
  qrType: 'text' | 'wifi' = 'text';
  qrText = '';
  wifiSSID = '';
  wifiPassword = '';
  qrImage: string | null = null;
  dropdownOpen = false;

  qrTypeOptions: { label: string, value: 'text' | 'wifi' }[] = [
    { label: 'Text / URL', value: 'text' },
    { label: 'WiFi', value: 'wifi' }
  ];

  wifiEncryption: 'WPA' | 'WEP' | 'nopass' = 'WPA';
  wifiDropdownOpen = false;

  wifiEncryptionOptions: { label: string; value: 'WPA' | 'WEP' | 'nopass' }[] = [
    { label: 'WPA/WPA2', value: 'WPA' },
    { label: 'WEP', value: 'WEP' },
    { label: 'No Password', value: 'nopass' }
  ];

  toggleWifiDropdown() {
    this.wifiDropdownOpen = !this.wifiDropdownOpen;
  }
  
  selectWifiEncryption(value: 'WPA' | 'WEP' | 'nopass') {
    this.wifiEncryption = value;
    this.wifiDropdownOpen = false;
  }
  
  getWifiEncryptionLabel(value: 'WPA' | 'WEP' | 'nopass'): string {
    const found = this.wifiEncryptionOptions.find(opt => opt.value === value);
    return found ? found.label : '';
  }

  selectQrType(value: 'text' | 'wifi') {
    this.qrType = value;
    this.dropdownOpen = false;
  }

  getQrTypeLabel(value: 'text' | 'wifi'): string {
    const found = this.qrTypeOptions.find(opt => opt.value === value);
    return found ? found.label : '';
  }

  generateQRCode() {
    let data = '';

    if (this.qrType === 'text') {
      data = this.qrText;
    } else if (this.qrType === 'wifi') {
      data = `WIFI:T:${this.wifiEncryption};S:${this.wifiSSID};P:${this.wifiPassword};;`;
    }

    QRCode.toDataURL(data)
      .then((url) => {
        this.qrImage = url;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  downloadQR() {
    if (!this.qrImage) return;
    const link = document.createElement('a');
    link.href = this.qrImage;
    link.download = 'qr-code.png';
    link.click();
  }
}
