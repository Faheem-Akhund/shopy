import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

//   socket=io("http://192.168.1.104:5555?userName="+localStorage.getItem('user'));
//   chatwith=""
//   self=localStorage.getItem('user');
//   messageArea=""
//   object: ProductsModule[] = [];
//   users:USERSLIST[]=[]
//   conversationList:CONVERSATION_PURE[]=[]
//   convo = {} as CONVERSATION_PURE

//   conversation={
 

//   sender:"",
//   reciever:"",
//   roomId:"",
//   message:""
 
//   }
  

//   constructor(private auth:AuthService) { }



//   categories:Categories[]=[]
   ngOnInit(): void {



//     this.getProductsByCategory('DRESS')
//     this.getallCategories()
//     this.getAllUsersListForChat()

//     this.socket.on("recieveMessage",(data)=>{
//       console.log(data)


//       for (let i = 0; i < this.conversationList.length; i++) {

//         if(this.conversationList[i].from==data.from)
//         {
//           this.conversationList[i].conversationOBJECT=data;
//         }

//         else
//         {
//           this.convo.from=data.from
//           this.convo.conversationOBJECT=data;
//           this.conversationList.push(this.convo);
          
//         }

//         console.log(this.conversationList[i].from);
//       }

  
//      console.log(this.conversationList)
    //  })




    
   }

//   getallCategories() {

//     this.auth.getallCategories().toPromise().then(res => {
//       this.categories = res.object;
//     });

// }

// fire(receiver:string)
// {
//   this.chatwith=receiver;
//   this.socket.emit("beginConvo",localStorage.getItem('user'),receiver);
//   this.socket.on("getChatObj",(data)=>{
//     this.conversation=data
    
//   })
// }

// sendMessage()
// {

//   let cobject={
//     from:localStorage.getItem('user'),
//     roomId:this.conversation.roomId,
//     to:this.chatwith,
//     message:this.messageArea
//   }
  
// this.socket.emit("sendMessage",cobject)


// }



// getAllUsersListForChat() {
 
//   this.auth.getUserDetails('users').toPromise().then(res => {
 

//     if(res.code==0)
//     {
//       console.log(res.object)
//       this.users = res.object;
//     }
  
//   });

// }


// getProductsByCategory(category:string) {

//   this.auth.getallPrdocuts(category).toPromise().then(res => {
//     this.object = res.object;
    
//   });


// }

}


interface ProductsModule {
  id: string  ;
  status: string | null;
  price: string | null;
  imgsrc: string | null;
  productName: string | null;


}

interface CART {
  id: string  ;
}

interface Categories{
  id: string  ;
  categoryType :string;
  
}




export interface MESSAGEBEAN
{
  id:number,
  message:string
}


export interface USERSLIST
{
  id:number,
  userName:string
}


export interface CONVERSATIONRECIEVED
{
  id:number,
  conversationId:number
}


export interface CONVERSATION
{
  from:string,
  to:string,
  roomId:string,
  message:string

}


export interface CONVERSATION_PURE
{
  from:string,
  conversationOBJECT:CONVERSATION[]
}