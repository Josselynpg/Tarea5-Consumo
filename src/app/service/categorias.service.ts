import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../model/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  url="http://localhost:63449/swagger/ui/index#!/Categorias/Categorias_GetCategorias"
  //http://localhost:63449/api/Categorias
  constructor(private httpclient: HttpClient) { }

  //get categoria
  getCategoria():Observable<any>{
    return this.httpclient.get(this.url+'GetCategorias')
  }

  //post
  postCategorias(categoria:Categorias):Observable<any>{
    return this.httpclient.post(this.url+'PostCategorias', categoria)
  }

  //put
  putcategoria(idcategoria:Categorias, categoria: Categorias):Observable<any>{
    return this.httpclient.put(this.url+'PutCategorias'+ idcategoria, categoria)
  }

   //delete
   deletecategoria(idcategoria:Categorias):Observable<any>{
    return this.httpclient.delete(this.url+'DeleteCategorias'+idcategoria)
   }

}
