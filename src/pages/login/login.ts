import {Component} from '@angular/core';
import {NavController, AlertController, ModalController} from 'ionic-angular';
import {CadastroPage} from '../cadastro/cadastro';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(private navCtrl: NavController, private alertCtrl: AlertController, public modalCtrl: ModalController) {

    }

    cadastro() {
        let cadastroModal = this.modalCtrl.create(CadastroPage);
        cadastroModal.present();
    }


    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Resetar Senha',
            message: 'Informe seu email para a recuperação da sua senha, uma nova senha será enviada em seu email.',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Sair',
                    role: 'sair',
                    handler: () => {

                    }
                },
                {
                    text: 'Enviar',
                    handler: () => {

                    }
                }
            ]

        });
        alert.present();
    }

}