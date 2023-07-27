import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {
  
  constructor() { }
  hpAvailable(){
    return true
  }
  dellAvailable(){
    return false
  }
  hp={
    Brand:'HP',
    HardDisk:'2 TB',
    Color:'Silver'
  }
  dell={
    Brand:'Dell',
    HardDisk:'1 TB',
    Color:'Black'
  }
  notAvailable={
    Brand:'Not avaolable',
    Status:'Failed'
  }


  ngOnInit(): void {

    let buylaptop = new Promise((resolve , reject)=>{
      // resolve('promise is resolved')
      // reject('promise is reject');
      if(this.hpAvailable()){
        return setTimeout(()=>{
        // resolve('HP is purchased')
        resolve(this.hp)

        },3000)
      } else if(this.dellAvailable()){
        return setTimeout(()=>{
        // resolve('Dell is purchased')
        resolve(this.dell)
        },3000)
      }else{
        return setTimeout(()=>{
          // reject('laptop is not available')
        reject(this.notAvailable)
        },3000)
      }
     
    });

buylaptop.then((res)=>{
  console.log('then code: ',res);
  
}).catch((res)=>{
  console.log('catch code: ',res);
  });

}
}
