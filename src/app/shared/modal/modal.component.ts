import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers : [ModalService] //inject service in component leavel
})
export class ModalComponent implements OnInit {

  @Input() modelID = '';

  constructor(public modal : ModalService) { 
  }

  ngOnInit(): void {
  }

  modalClose(){
    this.modal.toggleModal(this.modelID);
  }

}
