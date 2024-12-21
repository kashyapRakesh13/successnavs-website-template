import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch ,faSignOutAlt,faSign} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  faSignIn=faSign;
  faSearchIcon=faSearch;
  faSignOut=faSignOutAlt;

  isAbout=false;
  isHome=true;
  isService=false;
  isContact=false;
  isLogin=false;


  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  routeToHome(){
    this.isAbout=false;
      this.isHome=true;
      this.isService=false;
      this.isContact=false;
      this.isLogin=false;
    this._router.navigate(['/']);
  }

  addBoldClass(val:string){
    console.log("val",val);
    if(val==='about'){
      this.isAbout=true;
      this.isHome=false;
      this.isService=false;
      this.isContact=false;
      this.isLogin=false;
    }else if(val==='home'){
      this.isAbout=false;
      this.isHome=true;
      this.isService=false;
      this.isContact=false;
      this.isLogin=false;
    }else if(val==='service'){
      this.isAbout=false;
      this.isHome=false;
      this.isService=true;
      this.isContact=false;
      this.isLogin=false;
    }else if(val==='contact'){
      this.isAbout=false;
      this.isHome=false;
      this.isService=false;
      this.isContact=true;
      this.isLogin=false;
    }else if(val==='login'){
      this.isAbout=false;
      this.isHome=false;
      this.isService=false;
      this.isContact=false;
      this.isLogin=true;
    }
    console.log("isAbout",this.isAbout);
    console.log("isHome",this.isHome);
    console.log("isContact",this.isContact);
    console.log("isService",this.isService);
    console.log("isLogin",this.isLogin);
  }


  
}
