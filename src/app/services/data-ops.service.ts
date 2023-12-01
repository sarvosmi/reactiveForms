import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DataOpsService {

  constructor() { }

  async registerUser(formData)
  {
      if(!formData) return;

      console.log(formData)
      const options = {
        url: 'http://localhost:5000/api/user/register', 
        headers: { 'Content-Type': 'application/json'  },       
        data: JSON.stringify(formData),
      };
    
      try{
        const response: HttpResponse = await CapacitorHttp.post(options);
        console.log(response.data)
        return response.data; 
      }
      catch(e)
      {
        return;
      }     
  }
}
