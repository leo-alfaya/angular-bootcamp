import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID w2xA3of-WyxCNGAaRMkeKpJyodABOmDeBJwyBZQ3kHk',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
