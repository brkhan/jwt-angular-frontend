import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { ActivatedRoute} from '@angular/router' 

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})


export class ProfileComponent { 

    profile;
    constructor(private apiService: ApiService, private route: ActivatedRoute) {
    }

    ngOnInit() {
       var id = this.route.snapshot.params.id;
        this.apiService.getProfile(id).subscribe(ret => {
         this.profile = ret
         console.log(this.profile.email)
         console.log(ret)
    })
}
}