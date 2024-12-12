import { Injectable, signal } from '@angular/core';
import { ACTIService } from '../services/acti.service';
import { DailyAnalyses } from '../models/daily-analyses.model';

@Injectable({
  providedIn: 'root'
})
export class ACTIStore {
  // Zustandssignale
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  dailyAnalyses = signal<DailyAnalyses[]>([]);

  constructor(private actiService: ACTIService) {}

  // Daten laden
  loadProducts() {
    this.loading.set(true);
    this.error.set(null);

    this.actiService.getDailyAnalyses().subscribe({
      next: (dailyAnalysis) => {
        this.dailyAnalyses.set(dailyAnalysis);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Fehler beim Laden der täglichen Analysen.');
        this.loading.set(false);
      }
    });
  }
}