import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {

  getGlobalMap(): Observable<any[]> {
    return of([
      { id: 1, name: 'Região 1', ownerColor: 'red', status: 'Neutro' },
      { id: 2, name: 'Região 2', ownerColor: 'blue', status: 'Controlada' },
      { id: 3, name: 'Região 3', ownerColor: 'green', status: 'Em disputa' },
    ]);
  }

  voteOnRegion(regionId: number, action: string): Observable<any> {
    return of({
      newStatus: `Ação executada: ${action}`,
    });
  }

  getPlayerData(): Observable<any> {
    return of({
      name: 'Jogador1',
      avatar: '/assets/avatar.png',
      level: 10,
      gold: 1500,
      token: 20,
      power: 3000,
    });
  }

  getCityData(): Observable<any> {
    return of({
      resources: {
        farm: 3,
        lumber: 2,
        quarry: 4,
        mine: 3,
      },
      army: {
        barracks: 2,
        stables: 1,
        siege: 1,
      },
    });
  }
}
