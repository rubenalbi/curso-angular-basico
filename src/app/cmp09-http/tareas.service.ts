import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tarea } from './tarea';

type PostResponse = { name: string };
type PatchResponse = { completada: boolean};

interface IGetResponse {
  [key: string]: Tarea;
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  URL: string = 'https://ejemplos-dc1c1.firebaseio.com/tareas-bankinter/ruben/tareas';

  constructor(private http: HttpClient) { }

  getTareas(): Observable<Array<Tarea>> {
    return this.http.get<any>(`${this.URL}.json`)
    .pipe(
      map((data: IGetResponse) => {
        const arrTareas: Array<Tarea> = []

        for (let id in data) {
          const { titulo, completada } = data[id];
          const tarea = new Tarea(titulo, completada, id);
          arrTareas.push(tarea);
        }

        return arrTareas;
      })
    );
  }

  createTarea(tarea: Tarea): Observable<any> {
    return this.http.post<PostResponse>(`${this.URL}.json`, tarea)
      .pipe(
        map((data: PostResponse) => {
          tarea.id = data.name;
          return tarea; 
        })
      );
  }

  completeTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.patch<PatchResponse>(`${this.URL}/${tarea.id}.json`, {completada: !tarea.completada})
    .pipe(
      map((resp: PatchResponse) => {
        tarea.completada = resp.completada
        return tarea;
      })
    );
  }

  completeTareaPUT(tarea: Tarea): Observable<Tarea> {
    return this.http.put<PatchResponse>(`${this.URL}/${tarea.id}.json`, {completada: !tarea.completada})
    .pipe(
      map((resp: PatchResponse) => {
        tarea.completada = resp.completada
        return tarea;
      })
    );
  }

  // TODO terminar delete tarea
  // deleteTarea(tarea: Tarea): Observable<Tarea> {
  //   return this.http.delete<PatchResponse>(`${this.URL}/${tarea.id}.json`, {completada: !tarea.completada});
  // }

}
