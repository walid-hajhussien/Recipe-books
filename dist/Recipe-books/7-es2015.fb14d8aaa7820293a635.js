(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Nnu2:function(t,n,e){"use strict";e.r(n);var i=e("ccKW"),o=e("3Pt+"),s=e("tyNb"),r=e("fXoL");let a=(()=>{class t{constructor(){this.closeAlert=new r.n}ngOnInit(){}onClose(){this.closeAlert.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{closeAlert:"closeAlert"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(r.Ob(0,"div",0),r.Wb("click",(function(){return n.onClose()})),r.Nb(),r.Ob(1,"div",1),r.Ob(2,"p"),r.lc(3),r.Nb(),r.Ob(4,"div",2),r.Ob(5,"button",3),r.Wb("click",(function(){return n.onClose()})),r.lc(6,"Close"),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.Bb(3),r.mc(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75)}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})(),c=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(n){return new(n||t)(r.Lb(r.N))},t.\u0275dir=r.Gb({type:t,selectors:[["","appPlaceholder",""]]}),t})();var l=e("9ans"),b=e("ofXK");let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(t,n){1&t&&(r.Ob(0,"div",0),r.Mb(1,"div"),r.Mb(2,"div"),r.Mb(3,"div"),r.Mb(4,"div"),r.Nb())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid transparent;border-top-color:#6495ed}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"]}),t})();const g=["form"];function u(t,n){if(1&t){const t=r.Pb();r.Ob(0,"div",14),r.Ob(1,"button",15),r.Wb("click",(function(){return r.gc(t),r.Yb().errorMessage=null})),r.Ob(2,"span",16),r.lc(3,"\xd7"),r.Nb(),r.Nb(),r.lc(4),r.Nb()}if(2&t){const t=r.Yb();r.Bb(4),r.nc(" ",t.errorMessage," ")}}function p(t,n){1&t&&(r.Ob(0,"div",17),r.Mb(1,"app-loading-spinner"),r.Nb())}const m=[{path:"",component:(()=>{class t{constructor(t,n,e){this.authService=t,this.router=n,this.componentFactoryResolver=e,this.isLoginMode=!0,this.isLoading=!1,this.errorMessage=null}ngOnInit(){}ngOnDestroy(){this.closeComponent&&this.closeComponent.unsubscribe()}onSwitchLoginMode(){this.errorMessage=null,this.isLoginMode=!this.isLoginMode}onSubmitForm(t){if(t.invalid)return;const n=t.value.email,e=t.value.password;this.isLoginMode?this.signIn(n,e):this.signUp(n,e)}signUp(t,n){this.errorMessage=null,this.isLoading=!0,this.authService.signUp(t,n).subscribe(t=>{this.isLoading=!1,this.formObject.reset(),this.router.navigate(["/recipes"])},t=>{this.isLoading=!1,this.errorMessage=t})}signIn(t,n){this.errorMessage=null,this.isLoading=!0,this.authService.signIn(t,n).subscribe(t=>{this.formObject.reset(),this.isLoading=!1,this.router.navigate(["/recipes"])},t=>{this.isLoading=!1,this.errorMessage=t})}clearError(){this.errorMessage=null}showErrorAlert(t){const n=this.componentFactoryResolver.resolveComponentFactory(a),e=this.alertHost.viewContainerRef,i=e.createComponent(n);i.instance.message=t,this.closeComponent=i.instance.closeAlert.subscribe(()=>{this.closeComponent.unsubscribe(),e.clear()})}}return t.\u0275fac=function(n){return new(n||t)(r.Lb(l.a),r.Lb(s.c),r.Lb(r.j))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-auth"]],viewQuery:function(t,n){var e;1&t&&(r.jc(g,!0),r.jc(c,!0)),2&t&&(r.dc(e=r.Xb())&&(n.formObject=e.first),r.dc(e=r.Xb())&&(n.alertHost=e.first))},decls:21,vars:6,consts:[[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],[3,"ngSubmit"],["form","ngForm"],[3,"disabled"],[1,"form-group"],["for","email"],["required","","email","","ngModel","","name","email","type","email","id","email",1,"form-control"],["for","password"],["required","","minlength","6","ngModel","","name","password","type","password","id","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"],["class","alert alert-danger alert-dismissible","style","margin-top: 15px",4,"ngIf"],["style","text-align: center",4,"ngIf"],[1,"alert","alert-danger","alert-dismissible",2,"margin-top","15px"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[2,"text-align","center"]],template:function(t,n){if(1&t){const t=r.Pb();r.Ob(0,"div",0),r.Ob(1,"div",1),r.Ob(2,"form",2,3),r.Wb("ngSubmit",(function(){r.gc(t);const e=r.ec(3);return n.onSubmitForm(e)})),r.Ob(4,"fieldset",4),r.Ob(5,"div",5),r.Ob(6,"label",6),r.lc(7,"E-Mail"),r.Nb(),r.Mb(8,"input",7),r.Nb(),r.Ob(9,"div",5),r.Ob(10,"label",8),r.lc(11,"Password"),r.Nb(),r.Mb(12,"input",9),r.Nb(),r.Ob(13,"div"),r.Ob(14,"button",10),r.lc(15),r.Nb(),r.lc(16," | "),r.Ob(17,"button",11),r.Wb("click",(function(){return n.onSwitchLoginMode()})),r.lc(18),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.kc(19,u,5,1,"div",12),r.kc(20,p,2,0,"div",13),r.Nb(),r.Nb()}if(2&t){const t=r.ec(3);r.Bb(4),r.Zb("disabled",n.isLoading),r.Bb(10),r.Zb("disabled",t.invalid),r.Bb(1),r.mc(n.isLoginMode?"Login":"Sign Up"),r.Bb(3),r.nc("Switch to ",n.isLoginMode?"Sign Up":"Login",""),r.Bb(1),r.Zb("ngIf",n.errorMessage),r.Bb(1),r.Zb("ngIf",n.isLoading)}},directives:[o.u,o.m,o.n,o.a,o.s,o.b,o.l,o.o,o.k,b.i,d],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(n){return new(n||t)},imports:[[s.f.forChild(m)],s.f]}),t})();e.d(n,"AuthModule",(function(){return h}));let h=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(n){return new(n||t)},imports:[[o.j,o.r,i.a,f]]}),t})()}}]);