import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { ApiService } from "../api.service";

@Component({
    selector: 'app-page-feed',
    templateUrl: './page-feed.component.html',
    styleUrls: ['./page-feed.component.css']
})
export class PageFeedComponent implements OnInit {

    constructor(public auth:AuthService,private api:ApiService) { }

    ngOnInit() {
        let requestObject = {
            type:"GET",
            location:"users/generate-feed",
            authorize:true
        }

        this.api.makeRequest(requestObject).then((val)=>{
            console.log(val);
        });
    }


}
