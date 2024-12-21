import { Component, OnInit } from '@angular/core';
import { faSearch ,faSignOutAlt,faSign} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faSearchIcon=faSearch;
  faSignOut=faSignOutAlt;
  faSignIn=faSign;

  isAbout=false;
  isHome=false;
  isService=true;
  isContact=false;
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
