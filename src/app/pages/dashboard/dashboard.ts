import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  recent = [
    { id: 'LG-001', type: 'Logo', date: '12/08/2025', status: 'Complete' },
    { id: 'QR-021', type: 'QR Code', date: '13/08/2025', status: 'Complete' },
    { id: 'FK-010', type: 'Favicon', date: '14/08/2025', status: 'Canceled' },
  ];
}
