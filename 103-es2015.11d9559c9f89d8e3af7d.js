"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[103],{2103:function(t,e,r){r.d(e,{q:function(){return M}});var a=r(3423),o=r(1068),i=r(9925),n=r(2340),s=r(8259),d=r.n(s),c=r(8583),l=r(7716),u=r(1140),p=r(5939),g=r(8295),m=r(9983),Z=r(3220),h=r(3679),b=r(1095),f=r(1494),q=r(346);function A(t,e){if(1&t&&(l.TgZ(0,"tr"),l.TgZ(1,"td"),l._uU(2),l.qZA(),l.TgZ(3,"td"),l._uU(4),l.qZA(),l.TgZ(5,"td"),l._uU(6),l.qZA(),l.TgZ(7,"td"),l._uU(8),l.qZA(),l.TgZ(9,"td"),l._uU(10),l.qZA(),l.TgZ(11,"td"),l._uU(12),l.qZA(),l.qZA()),2&t){const t=e.$implicit;l.xp6(2),l.Oqu(t.terminal_pin),l.xp6(2),l.Oqu(t.stokiest_name),l.xp6(2),l.Oqu(t.total),l.xp6(2),l.Oqu(t.commission),l.xp6(2),l.Oqu(t.prize_value),l.xp6(2),l.Oqu(t.total-t.commission-t.prize_value)}}function _(t,e){1&t&&(l.TgZ(0,"div",31),l.TgZ(1,"h1"),l._uU(2,"No Data"),l.qZA(),l.qZA())}function T(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"tr"),l.TgZ(1,"td"),l._uU(2),l.qZA(),l.TgZ(3,"td"),l._uU(4),l.qZA(),l.TgZ(5,"td"),l._uU(6),l.qZA(),l.TgZ(7,"td"),l._uU(8),l.qZA(),l.TgZ(9,"td"),l._uU(10),l.qZA(),l.TgZ(11,"td"),l._uU(12),l.qZA(),l.TgZ(13,"td"),l._uU(14),l.qZA(),l.TgZ(15,"td"),l._uU(16),l.qZA(),l.TgZ(17,"td"),l.TgZ(18,"a",32),l.NdJ("click",function(){const e=l.CHM(t).$implicit,r=l.oxw();return l.MAs(95).show(),r.openPopup(e.play_master_id,e.barcode_number)}),l._UZ(19,"i",33),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=e.$implicit;l.xp6(2),l.Oqu(t.barcode_number),l.xp6(2),l.Oqu(t.draw_time),l.xp6(2),l.Oqu(t.terminal_pin),l.xp6(2),l.Oqu(t.game_name),l.xp6(2),l.Oqu(t.ticket_taken_time),l.xp6(2),l.Oqu(t.total_quantity),l.xp6(2),l.Oqu(t.amount),l.xp6(2),l.Oqu(t.prize_value)}}function R(t,e){1&t&&(l.TgZ(0,"div",31),l.TgZ(1,"h1"),l._uU(2,"No Data"),l.qZA(),l.qZA())}function x(t,e){1&t&&(l.TgZ(0,"span"),l._uU(1,"Single"),l.qZA())}function D(t,e){if(1&t&&(l.TgZ(0,"button",46),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.s9C("matBadge",t.quantity),l.xp6(1),l.Oqu(t.single_number)}}function S(t,e){1&t&&(l.TgZ(0,"span"),l._uU(1,"Triple"),l.qZA())}function v(t,e){if(1&t&&(l.TgZ(0,"div",48),l.TgZ(1,"button",49),l._uU(2),l.qZA(),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.s9C("matBadge",t.quantity),l.Q6J("matBadgeHidden",!1),l.xp6(1),l.hij(" ",t.visible_triple_number," ")}}function U(t,e){if(1&t&&(l.TgZ(0,"div",42),l.YNc(1,v,3,3,"div",47),l.qZA()),2&t){const t=e.index,r=l.oxw(2);l.xp6(1),l.Q6J("ngForOf",r.barcodeDetails.triple.slice(10*t,10*t+10))}}function y(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div",34),l.TgZ(1,"div",35),l.TgZ(2,"div",36),l.TgZ(3,"h4",37),l._uU(4),l.qZA(),l.TgZ(5,"button",38),l.NdJ("click",function(){return l.CHM(t),l.oxw(),l.MAs(95).hide()}),l.TgZ(6,"span",39),l._uU(7,"\xd7"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(8,"div",40),l.YNc(9,x,2,0,"span",41),l.TgZ(10,"div",42),l.YNc(11,D,2,2,"button",43),l.qZA(),l.YNc(12,S,2,0,"span",41),l.YNc(13,U,2,1,"div",44),l.qZA(),l._UZ(14,"div",45),l.qZA(),l.qZA()}if(2&t){const t=l.oxw();l.xp6(4),l.hij(" Ticket: ",t.barcodeDetails.barcode," "),l.xp6(5),l.Q6J("ngIf",t.barcodeDetails.single.length),l.xp6(2),l.Q6J("ngForOf",t.barcodeDetails.single),l.xp6(1),l.Q6J("ngIf",t.barcodeDetails.triple.length),l.xp6(1),l.Q6J("ngForOf",t.barcodeDetails.triple.slice(0,t.barcodeDetails.triple.length%10==0?t.barcodeDetails.triple.length/10:t.barcodeDetails.triple.length/10+1))}}function k(t,e,r){return(t<e?-1:1)*(r?1:-1)}const w=[{path:"",canActivate:[o.m],component:(()=>{class t{constructor(t){this.adminReportService=t,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.isProduction=n.N.production,this.showDevArea=!1,this.barcodeReportRecords=[],this.customerSaleReportRecords=[],this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new c.uU("en-US"),this.totalAmount=0}ngOnInit(){this.barcodeReportRecords=this.adminReportService.getBarcodeReportRecords(),this.adminReportService.getBarcodeReportListener().subscribe(t=>{this.barcodeReportRecords=t}),this.customerSaleReportRecords=this.adminReportService.getCustomerSaleReportRecords(),this.adminReportService.getCustomerSaleReportListener().subscribe(t=>{this.customerSaleReportRecords=t;let e=0;this.customerSaleReportRecords.forEach(function(t){e+=Number(t.total)}),this.totalAmount=e}),this.searchByDateTab1(),this.searchByDateTab2()}searchByDateTab1(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}});let t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.adminReportService.customerSaleReportByDate(t,e).subscribe(t=>{t.data&&d().close()})}searchByDateTab2(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}});let t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.adminReportService.barcodeReportByDate(t,e).subscribe(t=>{t.data&&d().close()})}sortData(t){const e=this.barcodeReportRecords.slice();this.barcodeReportRecords=t.active&&""!==t.direction?e.sort((e,r)=>{const a="asc"===t.direction;switch(t.active){case"barcode_number":return k(e.barcode_number,r.barcode_number,a);case"draw_time":return k(e.draw_time,r.draw_time,a);case"terminal_pin":return k(e.terminal_pin,r.terminal_pin,a);case"ticket_taken_time":return k(e.ticket_taken_time,r.ticket_taken_time,a);case"total_quantity":return k(e.total_quantity,r.total_quantity,a);case"amount":return k(e.amount,r.amount,a);default:return 0}}):e}openPopup(t,e){this.adminReportService.getBarcodeDetails(t).subscribe(t=>{this.barcodeDetails=t.data})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(u.Q))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-admin-reports"]],viewQuery:function(t,e){if(1&t&&l.Gf(i.oB,5),2&t){let t;l.iGM(t=l.CRH())&&(e.modal=t.first)}},decls:97,vars:22,consts:[[1,"mt-2","mr-3","ml-3"],["label","Customer sales report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","terminal_pin"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","prize_value"],["mat-sort-header","ntp"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Barcode report"],[1,"text-center",2,"align-content","center","align-items","center","text-align","center"],["matSort","",1,"ml-4","col-11","table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","barcode_number"],["mat-sort-header","draw_time"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["label","Draw wise report"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],[1,"text-center"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4",3,"click"],[1,"bi","bi-info-square-fill"],["role","document",1,"modal-dialog","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],[4,"ngIf"],[1,"d-flex","flex-row","mt-2"],["class","mr-2",3,"matBadge",4,"ngFor","ngForOf"],["class","d-flex flex-row mt-2",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"mr-2",3,"matBadge"],["colspan","2","class","text-center align-middle mr-3","style","max-width: 100% !important;",4,"ngFor","ngForOf"],["colspan","2",1,"text-center","align-middle","mr-3",2,"max-width","100% !important"],["mat-raised-button","","value","bold","name","fontStyle","aria-label","Font Style",2,"font-size","larger","min-width","97% !important","padding","0px !important","min-height","40px",3,"matBadge","matBadgeHidden"]],template:function(t,e){if(1&t&&(l.TgZ(0,"mat-tab-group",0),l.TgZ(1,"mat-tab",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"mat-form-field",4),l.TgZ(5,"mat-label"),l._uU(6,"Start date"),l.qZA(),l.TgZ(7,"input",5),l.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),l.qZA(),l._UZ(8,"mat-datepicker-toggle",6),l.TgZ(9,"mat-datepicker",7,8),l.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"div",3),l.TgZ(12,"mat-form-field",4),l.TgZ(13,"mat-label"),l._uU(14,"End date"),l.qZA(),l.TgZ(15,"input",5),l.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),l.qZA(),l._UZ(16,"mat-datepicker-toggle",6),l.TgZ(17,"mat-datepicker",7,9),l.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(19,"button",10),l.NdJ("click",function(){return e.searchByDateTab1()}),l._uU(20,"Search"),l.qZA(),l.qZA(),l.TgZ(21,"table",11),l.NdJ("matSortChange",function(t){return e.sortData(t)}),l.TgZ(22,"thead"),l.TgZ(23,"tr"),l.TgZ(24,"th",12),l._uU(25,"Terminal Id"),l.qZA(),l.TgZ(26,"th",12),l._uU(27,"Stokiest Name"),l.qZA(),l.TgZ(28,"th",13),l._uU(29,"Total"),l.qZA(),l.TgZ(30,"th",14),l._uU(31,"Commission"),l.qZA(),l.TgZ(32,"th",15),l._uU(33,"Prize"),l.qZA(),l.TgZ(34,"th",16),l._uU(35,"NTP"),l.qZA(),l._UZ(36,"th"),l.qZA(),l.qZA(),l.TgZ(37,"tbody"),l.YNc(38,A,13,6,"tr",17),l.TgZ(39,"tr"),l._UZ(40,"td"),l.TgZ(41,"td"),l._uU(42,"Grand Total"),l.qZA(),l.TgZ(43,"td"),l._uU(44),l.qZA(),l._UZ(45,"td"),l._UZ(46,"td"),l._UZ(47,"td"),l.qZA(),l.qZA(),l.qZA(),l.YNc(48,_,3,0,"div",18),l.qZA(),l.TgZ(49,"mat-tab",19),l.TgZ(50,"div",2),l.TgZ(51,"div",3),l.TgZ(52,"mat-form-field",4),l.TgZ(53,"mat-label"),l._uU(54,"Start date"),l.qZA(),l.TgZ(55,"input",5),l.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),l.qZA(),l._UZ(56,"mat-datepicker-toggle",6),l.TgZ(57,"mat-datepicker",7,8),l.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(59,"div",3),l.TgZ(60,"mat-form-field",4),l.TgZ(61,"mat-label"),l._uU(62,"End date"),l.qZA(),l.TgZ(63,"input",5),l.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),l.qZA(),l._UZ(64,"mat-datepicker-toggle",6),l.TgZ(65,"mat-datepicker",7,9),l.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(67,"button",10),l.NdJ("click",function(){return e.searchByDateTab2()}),l._uU(68,"Search"),l.qZA(),l.qZA(),l.TgZ(69,"div",20),l.TgZ(70,"table",21),l.NdJ("matSortChange",function(t){return e.sortData(t)}),l.TgZ(71,"thead"),l.TgZ(72,"tr"),l.TgZ(73,"th",22),l._uU(74,"Barcode"),l.qZA(),l.TgZ(75,"th",23),l._uU(76,"Draw time"),l.qZA(),l.TgZ(77,"th",12),l._uU(78,"Terminal"),l.qZA(),l.TgZ(79,"th",12),l._uU(80,"Game"),l.qZA(),l.TgZ(81,"th",24),l._uU(82,"Ticket take time"),l.qZA(),l.TgZ(83,"th",25),l._uU(84,"Quantity"),l.qZA(),l.TgZ(85,"th",26),l._uU(86,"Amount"),l.qZA(),l.TgZ(87,"th",15),l._uU(88,"Prize"),l.qZA(),l._UZ(89,"th"),l.qZA(),l.qZA(),l.TgZ(90,"tbody"),l.YNc(91,T,20,8,"tr",17),l.qZA(),l.qZA(),l.YNc(92,R,3,0,"div",18),l.qZA(),l.qZA(),l._UZ(93,"mat-tab",27),l.qZA(),l.TgZ(94,"div",28,29),l.YNc(96,y,15,5,"div",30),l.qZA()),2&t){const t=l.MAs(10),r=l.MAs(18);l.xp6(7),l.Q6J("matDatepicker",t)("ngModel",e.StartDateFilter),l.xp6(1),l.Q6J("for",t),l.xp6(1),l.Q6J("ngModel",e.StartDateFilter),l.xp6(6),l.Q6J("matDatepicker",r)("ngModel",e.EndDateFilter),l.xp6(1),l.Q6J("for",r),l.xp6(1),l.Q6J("ngModel",e.EndDateFilter),l.xp6(21),l.Q6J("ngForOf",e.customerSaleReportRecords),l.xp6(6),l.Oqu(e.totalAmount),l.xp6(4),l.Q6J("ngIf",0==e.customerSaleReportRecords.length),l.xp6(7),l.Q6J("matDatepicker",t)("ngModel",e.StartDateFilter),l.xp6(1),l.Q6J("for",t),l.xp6(1),l.Q6J("ngModel",e.StartDateFilter),l.xp6(6),l.Q6J("matDatepicker",r)("ngModel",e.EndDateFilter),l.xp6(1),l.Q6J("for",r),l.xp6(1),l.Q6J("ngModel",e.EndDateFilter),l.xp6(26),l.Q6J("ngForOf",e.barcodeReportRecords),l.xp6(1),l.Q6J("ngIf",0==e.barcodeReportRecords.length),l.xp6(4),l.Q6J("ngIf",e.barcodeDetails)}},directives:[p.SP,p.uX,g.KE,g.hX,m.Nt,Z.hl,h.Fj,h.JJ,h.On,Z.nW,g.R9,Z.Mq,b.lW,f.YE,f.nU,c.sg,c.O5,i.oB,i.b6,q.k],styles:[""]}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.Bz.forChild(w)],a.Bz]}),t})()},1140:function(t,e,r){r.d(e,{Q:function(){return u}});var a=r(2340),o=r(5304),i=r(8307),n=r(9765),s=r(205),d=r(7716),c=r(1841),l=r(4889);let u=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=a.N.BASE_API_URL,this.barcodeReportRecords=[],this.barcodeReportSubject=new n.xQ,this.barcodeDetailsSubject=new n.xQ,this.customerSaleReportRecords=[],this.customerSaleReportSubject=new n.xQ}getBarcodeReportRecords(){return[...this.barcodeReportRecords]}getBarcodeReportListener(){return this.barcodeReportSubject.asObservable()}getCustomerSaleReportRecords(){return[...this.customerSaleReportRecords]}getCustomerSaleReportListener(){return this.customerSaleReportSubject.asObservable()}getBarcodeDetails(t){return this.http.get(this.BASE_API_URL+"/cPanel/barcodeReport/particulars/"+t).pipe((0,o.K)(this.handleError),(0,i.b)(t=>{this.barcodeDetails=t.data,this.barcodeDetailsSubject.next(Object.assign({},this.barcodeDetails))}))}getBarcodeDetailsListener(){return this.barcodeDetailsSubject.asObservable()}customerSaleReportByDate(t,e){return this.http.post(this.BASE_API_URL+"/cPanel/customerSaleReports",{startDate:t,endDate:e}).pipe((0,o.K)(this.handleError),(0,i.b)(t=>{t.data&&(this.customerSaleReportRecords=t.data,this.customerSaleReportSubject.next([...this.customerSaleReportRecords]))}))}barcodeReportByDate(t,e){return this.http.post(this.BASE_API_URL+"/cPanel/barcodeReportByDate",{startDate:t,endDate:e}).pipe((0,o.K)(this.handleError),(0,i.b)(t=>{t.data&&(this.barcodeReportRecords=t.data,this.barcodeReportSubject.next([...this.barcodeReportRecords]))}))}serverError(t){return t instanceof Response?(0,s._)("backend server error"):(0,s._)(0===t.status?{status:t.status,message:"Backend Server is not Working",statusText:t.statusText}:401===t.status?{status:t.status,message:"Your are not authorised",statusText:t.statusText}:t)}handleError(t){return t.error.message.includes("1062")?(0,s._)("Record already exists"):(0,s._)(t.error.message)}}return t.\u0275fac=function(e){return new(e||t)(d.LFG(c.eN),d.LFG(l.T))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1068:function(t,e,r){r.d(e,{m:function(){return i}});var a=r(7716),o=r(3535);let i=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(o.e))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);