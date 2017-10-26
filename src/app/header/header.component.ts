import { Component } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'] 
})

export class HeaderComponent{

    constructor(private dsservice:DataStorageService){

    }

    onSaveData(){
        this.dsservice.storeRecipes()
            .subscribe(
                (response: Response)=>{
                    console.log(response);
                }
            );
    }

    onFetchData(){
        this.dsservice.getRecipes();
    }
   
}