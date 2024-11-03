import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';

interface Partido {
    id: number;
    escudo1: string;
    nombreEq1: string;
    puntaje1: number;
    puntaje2: number;
    nombreEq2: string;
    escudo2: string;
    estadio: string;
    fecha: string;
    hora: string;
}


@Component({
    selector: 'app-matchtable',
    standalone: true,
    imports: [RouterModule, SharedModule, CoreModule ,MatExpansionModule],
    templateUrl: './matchtable.component.html',
    styleUrl: './matchtable.component.scss',
})
export class MatchtableComponent{
    displayedColumns: string[] = [
        'equipo1',
        'puntaje',
        'equipo2',
        'estadio',
        'fecha',
        'hora',
    ];
    partidos: Partido[] = [
      {
          id: 1,
          escudo1: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png',
          nombreEq1: 'Barcelona',
          puntaje1: 3,
          puntaje2: 1,
          nombreEq2: 'Real Madrid',
          escudo2: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
          estadio: 'Camp Nou',
          fecha: '2024-10-22',
          hora: '18:00',
      },
      {
          id: 2,
          escudo1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j5EjaTQXvQsHby8EaP9bY8sxowqAH-5X5g&s',
          nombreEq1: 'Manchester United',
          puntaje1: 2,
          puntaje2: 2,
          nombreEq2: 'Chelsea',
          escudo2: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
          estadio: 'Old Trafford',
          fecha: '2024-10-23',
          hora: '16:00',
      },
      {
          id: 3,
          escudo1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Escudo_del_C_A_River_Plate.svg/1200px-Escudo_del_C_A_River_Plate.svg.png',
          nombreEq1: 'River Plate',
          puntaje1: 1,
          puntaje2: 0,
          nombreEq2: 'Boca Juniors',
          escudo2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/CABJ70.png/640px-CABJ70.png',
          estadio: 'Monumental',
          fecha: '2024-10-24',
          hora: '20:00',
      },
      {
          id: 4,
          escudo1: 'https://i.pinimg.com/474x/76/0a/5c/760a5cce5b0b67f4706cc96791fef59e.jpg',
          nombreEq1: 'Juventus',
          puntaje1: 3,
          puntaje2: 0,
          nombreEq2: 'AC Milan',
          escudo2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/800px-Logo_of_AC_Milan.svg.png',
          estadio: 'Allianz Stadium',
          fecha: '2024-10-25',
          hora: '21:00',
      },
      {
          id: 5,
          escudo1: 'https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/49.png',
          nombreEq1: 'PSG',
          puntaje1: 4,
          puntaje2: 1,
          nombreEq2: 'Olympique Lyon',
          escudo2: 'https://tmssl.akamaized.net//images/wappen/big/1041.png?lm=1656668172',
          estadio: 'Parc des Princes',
          fecha: '2024-10-26',
          hora: '19:00',
      },
      {
          id: 6,
          escudo1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
          nombreEq1: 'Bayern Munich',
          puntaje1: 3,
          puntaje2: 2,
          nombreEq2: 'Borussia Dortmund',
          escudo2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png',
          estadio: 'Allianz Arena',
          fecha: '2024-10-27',
          hora: '18:30',
      },
      {
          id: 7,
          escudo1: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJhqiKp4A1l5jmZZ1jerF0QnD3PnnxIiMKy2ocXlYMKoDVGZsUuk3U0Jy2pej0JbwBF2EsgpHMKHlOeB2gaD8jo5tiouRJpGLodDx2MuJrKeBUe_51HwsbKrTGB9YvWJoft6blefEPMow/s1600/Real+Sociedad.png',
          nombreEq1: 'Real Sociedad',
          puntaje1: 2,
          puntaje2: 1,
          nombreEq2: 'Villarreal',
          escudo2: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip_9iJ5rOxCFIMg8IZyqgP4N7hqRmFzrp9gfhTGbRQwQo878o3vaLs9eHdo-8FVhi4QZePam9AThbb1zNt04j7rQbK45gHy0fv4-4VFm7w221QREgMP7ytlOGaKjScAuDRhqu0UWH5EJ2e/s1600/Villarreal+CF.png',
          estadio: 'Anoeta',
          fecha: '2024-10-28',
          hora: '17:00',
      },
      {
          id: 8,
          escudo1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4A9i-vFLP4DeZugbXkyjCPTgQKNZUemM3A&s',
          nombreEq1: 'Sevilla',
          puntaje1: 2,
          puntaje2: 3,
          nombreEq2: 'Valencia',
          escudo2: 'https://assets.goal.com/images/v3/blte1406ea8a29c6bc6/1c834fa5be327b369511710ca95d66407bbb6b54.jpg',
          estadio: 'Ramón Sánchez-Pizjuán',
          fecha: '2024-10-29',
          hora: '20:00',
      },
      {
          id: 9,
          escudo1: 'https://w7.pngwing.com/pngs/913/820/png-transparent-club-america-concacaf-champions-league-liga-mx-seattle-sounders-fc-club-de-futbol-america-football-team-sports-football-team-thumbnail.png',
          nombreEq1: 'América',
          puntaje1: 2,
          puntaje2: 0,
          nombreEq2: 'Cruz Azul',
          escudo2: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/218.png',
          estadio: 'Azteca',
          fecha: '2024-10-30',
          hora: '18:00',
      },
      {
          id: 10,
          escudo1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Los_Angeles_Football_Club.svg/1200px-Los_Angeles_Football_Club.svg.png',
          nombreEq1: 'LAFC',
          puntaje1: 1,
          puntaje2: 1,
          nombreEq2: 'Galaxy',
          escudo2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Los_Angeles_Galaxy_logo.svg/800px-Los_Angeles_Galaxy_logo.svg.png',
          estadio: 'Banc of California Stadium',
          fecha: '2024-10-31',
          hora: '21:30',
      },
      {
          id: 11,
          escudo1: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGusx1fL0pjlkLAo2CcLEiYSjNSfFNydn76dmn1DQuY6u5ivkV56XaG_jZn6yGoMaTgh3VGZ1iT_73OGjpXY0_VQuUC8E_a2SVYZpxKPZquHtM2_U_EcfwPo3UmLJCLJw5TbrNWDHvGTIlOdyzen_BNN1AtSWoLnM93WoOs32XnXua0VSPLZnnaqL5iQA/s512/Inter%20de%20Miami%20CF.png',
          nombreEq1: 'Inter Miami',
          puntaje1: 3,
          puntaje2: 2,
          nombreEq2: 'Orlando City',
          escudo2: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiMnzKlvE3APPhPM8l7xgM9SgcornUe_JdzdDK3ide4gswIUUMtMBhF5w8qDXQiyPCEPxvBo9GZXzIXhPQ0rE16QIoogBtZXaEI9eI7MIDdkHWxmIPRz3Ja0D9H3FrhA82C1NDtU3ESrE/s1600/Orlando+City+SC.png',
          estadio: 'DRV PNK Stadium',
          fecha: '2024-11-01',
          hora: '20:00',
      },
      {
          id: 12,
          escudo1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/800px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png',
          nombreEq1: 'São Paulo',
          puntaje1: 1,
          puntaje2: 2,
          nombreEq2: 'Palmeiras',
          escudo2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D6STmzhhvk6t7pfL4Uq5lYOnlQ63kNZKCw&s',
          estadio: 'Morumbi',
          fecha: '2024-11-02',
          hora: '19:00',
      },
      {
          id: 13,
          escudo1: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Escudo_Deportivo_Cali.png',
          nombreEq1: 'Deportivo Cali',
          puntaje1: 0,
          puntaje2: 0,
          nombreEq2: 'Atlético Nacional',
          escudo2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Atl%C3%A9tico_Nacional.png/140px-Atl%C3%A9tico_Nacional.png',
          estadio: 'Palmaseca',
          fecha: '2024-11-03',
          hora: '18:00',
      },
      {
          id: 14,
          escudo1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Barcelona_Sporting_Club_Logo.png/200px-Barcelona_Sporting_Club_Logo.png',
          nombreEq1: 'Barcelona SC',
          puntaje1: 3,
          puntaje2: 2,
          nombreEq2: 'Emelec',
          escudo2: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/EscudoCSEmelec.png',
          estadio: 'Arena do Grêmio',
          fecha: '2024-11-04',
          hora: '21:00',
      },
      {
          id: 15,
          escudo1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Escudo_CD_El_Nacional.png/150px-Escudo_CD_El_Nacional.png',
          nombreEq1: 'Nacional',
          puntaje1: 2,
          puntaje2: 1,
          nombreEq2: 'Delfin',
          escudo2: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1011.png',
          estadio: 'Universitario',
          fecha: '2024-11-05',
          hora: '20:00',
      },
  ];
  getPartidosOrdenados(): MatTableDataSource<Partido> {
    const partidosOrdenados = this.partidos.sort((a,b) => {
      const fechaA = new Date(`${a.fecha}T${a.hora}`);
      const fechaB = new Date(`${b.fecha}T${b.hora}`);
      return fechaB.getTime() - fechaA.getTime(); 
    });
    return new MatTableDataSource(partidosOrdenados);
  }
}
