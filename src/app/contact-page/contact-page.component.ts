import { Component, OnInit } from '@angular/core';
import { faSearch ,faSignOutAlt,faSign} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  faSearchIcon=faSearch;
  faSignOut=faSignOutAlt;
  faSignIn=faSign;
  
  isAbout=false;
  isHome=false;
  isService=false;
  isContact=true;
  isLogin=false;

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  routeToHome(){
    this._router.navigate(['/']);
    this.isAbout=false;
      this.isHome=true;
      this.isService=false;
      this.isContact=false;
      this.isLogin=false;
  }

  addBoldClass(val:string){
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

  }




}
