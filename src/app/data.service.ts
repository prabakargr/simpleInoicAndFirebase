import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/map';

export interface User{
    name:string,
    age:number,
    city:string
}
@Injectable()

export class DataService{   
 
    private users : Observable<User[]>
    private userCollection:AngularFirestoreCollection<User>;
    constructor(db:AngularFirestore){

        this.userCollection=db.collection<User>('users');

        this.users=this.userCollection.snapshotChanges().pipe(
            map(action =>{
                return action.map(a=>{
                    const data = a.payload.doc.data();
                    const id =a.payload.doc.id;
                    return {id,...data};
                })
            })
        )
    }
    getUsers(){
        return this.users
    }

    getUser(id){
        return this.userCollection.doc<User>(id).valueChanges();
    }

    updateUser(user:User,id:string){
        return this.userCollection.doc(id).update(user)
    }
    addUser(user:User){
        return this.userCollection.add(user);
    }
    removeUser(id){
        return this.userCollection.doc(id).delete()
    }
}
