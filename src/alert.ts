import { AlertController } from "ionic-angular";

export class Alert{
    constructor(public alertCtrl: AlertController){

    }

    alertUser(title: string, message: string){
        const alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ['Ok']
          });
          alert.present();
  
    }
}